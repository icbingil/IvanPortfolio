"use client"

import React from 'react'
import { FadeIn } from '../FadeIn'
export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-8">
          ABOUT
        </h2>
        <p className="text-black leading-relaxed text-lg md:text-xl">
          A Bachelor of Science in Information Technology (BSIT) intern with hands-on experience in web development using HTML, CSS, PHP, and JavaScript.
          Skilled in building responsive websites, creating dynamic web applications, and developing functional web systems. Passionate about improving web development skills and contributing to innovative projects.
          Currently based in General Santos City.
        </p>
        <div className="border-t-[3px] border-black mt-16 w-full"></div>
      </FadeIn>
    </section>
  )
}
