"use client"

import React from 'react'
import Image from 'next/image'
import { FadeIn } from "@/components/FadeIn"
export function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <section id="top" className="min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12">
      <div className="w-full flex items-center gap-8 mb-12">
        <div className="flex-1 shrink-0 p-8 bg-gray-100 rounded-full flex items-center justify-center">
          <Image
            src="/images/ivanaaaaa.png"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-full"
          />
        </div>
        <div className="flex-1">
          <FadeIn>
            <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none text-black">
              IVAN CLARK BINGIL
            </h1>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.05}>
        <p className="mt-8">
          <span className="inline-block bg-[#FF5722] text-white px-3 py-1 text-lg md:text-xl font-bold uppercase tracking-wide">
            Building thoughtful software that solves real problems.
          </span>
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, '#projects')}
            className="inline-flex items-center justify-center bg-black text-white border-[3px] border-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#FF5722] hover:border-[#FF5722] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center justify-center bg-transparent text-black border-[3px] border-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
