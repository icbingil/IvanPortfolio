"use client"

import React from 'react'
import { FadeIn } from '../FadeIn'
export function Contact() {
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
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="NAME"
              className="w-full border-[3px] border-black bg-white p-4 text-black placeholder-gray-500 focus:border-[#FF5722] focus:outline-none transition-colors rounded-none font-bold uppercase tracking-wide"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="EMAIL"
              className="w-full border-[3px] border-black bg-white p-4 text-black placeholder-gray-500 focus:border-[#FF5722] focus:outline-none transition-colors rounded-none font-bold uppercase tracking-wide"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              placeholder="MESSAGE"
              rows={5}
              className="w-full border-[3px] border-black bg-white p-4 text-black placeholder-gray-500 focus:border-[#FF5722] focus:outline-none transition-colors resize-none rounded-none font-bold uppercase tracking-wide"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#FF5722] text-white font-bold uppercase tracking-widest px-10 py-4 border-[3px] border-black hover:bg-black transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </FadeIn>
    </section>
  )
}
