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
          Im a student from Ramon Magsaysay Memorial Colleges with 4 years of experience building web
          applications and distributed systems. I care deeply about clean code,
          thoughtful design, and shipping products that make a difference.
          Currently based in General Santos City.
        </p>
        <div className="border-t-[3px] border-black mt-16 w-full"></div>
      </FadeIn>
    </section>
  )
}
