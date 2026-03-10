"use client"

import React, { useState } from "react"
import { FadeIn } from "../FadeIn"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // keep a reference to the form element before the event object is released
    const formElement = e.currentTarget

    setLoading(true)
    setStatus("")

    const formData = new FormData(formElement)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        setStatus("✅ Message sent successfully!")
        formElement.reset()
      } else {
        setStatus("❌ " + (data.error || "Unexpected response"))
      }
    } catch (error) {
      console.error("Contact form error", error)
      setStatus("❌ Failed to send message.")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-6">
          GET IN TOUCH
        </h2>

        <p className="text-black text-lg mb-10">
          Im always open to interesting conversations and opportunities.
        </p>

        <div className="flex flex-wrap gap-8 mb-16">
          <a
            href="mailto:icbingil2@gmail.com"
            className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/ivan-clark-bingil-15a3b83b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/icbingil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
          >
            GitHub
          </a>
        </div>

        <form
          className="max-w-xl space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="NAME"
              className="w-full border-[3px] border-black bg-white p-4 text-black placeholder-gray-500 focus:border-[#FF5722] focus:outline-none transition-colors font-bold uppercase tracking-wide"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="w-full border-[3px] border-black bg-white p-4 text-black placeholder-gray-500 focus:border-[#FF5722] focus:outline-none transition-colors font-bold uppercase tracking-wide"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="MESSAGE"
              rows={5}
              className="w-full border-[3px] border-black bg-white p-4 text-black placeholder-gray-500 focus:border-[#FF5722] focus:outline-none transition-colors resize-none font-bold uppercase tracking-wide"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#FF5722] text-white font-bold uppercase tracking-widest px-10 py-4 border-[3px] border-black hover:bg-black transition-colors duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-sm font-bold mt-4">
              {status}
            </p>
          )}
        </form>
      </FadeIn>
    </section>
  )
}