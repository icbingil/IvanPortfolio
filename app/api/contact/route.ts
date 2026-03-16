import nodemailer from "nodemailer"

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function POST(req: Request) {
  try {
    // support either JSON body or form-data from the client
    let name: string | undefined
    let email: string | undefined
    let message: string | undefined
    let attachment: unknown

    const contentType = req.headers.get("content-type") || ""
    if (contentType.includes("application/json")) {
      const body = await req.json()
      name = body.name?.toString().trim()
      email = body.email?.toString().trim()
      message = body.message?.toString().trim()
      // JSON payloads won't include attachments
    } else {
      const formData = await req.formData()
      name = formData.get("name")?.toString().trim()
      email = formData.get("email")?.toString().trim()
      message = formData.get("message")?.toString().trim()
      attachment = formData.get("attachment")
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    // Validate environment variables
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      throw new Error("Missing SMTP configuration in environment variables")
    }

    const smtpPort = Number(process.env.SMTP_PORT)
    // For Gmail: 465 uses SSL (secure: true), 587 uses TLS (secure: false)
    const isSecure = smtpPort === 465

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 15000,
      socketTimeout: 15000,
    })

    try {
      await transporter.verify()
    } catch (verifyError) {
      throw new Error(
        `Cannot connect to SMTP server at ${process.env.SMTP_HOST}:${smtpPort}. ` +
          `Make sure the SMTP server is running and credentials are correct. ` +
          `Error: ${verifyError instanceof Error ? verifyError.message : String(verifyError)}`
      )
    }

    // Always send to this Gmail (ignores env "to" address).
    const toAddress = "icbingil2@gmail.com"

    const attachments: Array<{
      filename: string
      content: Buffer
      contentType?: string
    }> = []

    const info = await transporter.sendMail({
      from: `"ICB PORTFOLIO" <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission from</h3>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b> ${escapeHtml(message)}</p>
      `,
      attachments: attachments.length ? attachments : undefined,
    })

    console.log("Email sent successfully:", info.response)

    return new Response(JSON.stringify({ success: true, message: "Message received" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: unknown) {
    console.error("Email error:", error)

    const message =
      error instanceof Error ? error.message : "Failed to send email"

    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}