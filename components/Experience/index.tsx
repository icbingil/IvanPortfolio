"use client"

import React from 'react'
import { FadeIn } from '../FadeIn'
export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-12">
          EXPERIENCE
        </h2>

        <div>
          {/* Experience 1 */}
          <div className="border-t-[3px] border-black py-6">
            <p className="text-sm font-bold uppercase tracking-wide text-black">
              2022 — 2026
            </p>
            <h3 className="text-xl font-black uppercase tracking-tight text-black mt-2">
              BSIT Student
            </h3>
            <p className="font-bold text-[#FF5722] mt-1">RMMC</p>
            <p className="text-base text-black mt-3">
              Learning the fundamentals of Information Technology, including programming, web development, and database systems. Building small projects to practice and apply core concepts.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="border-t-[3px] border-black py-6">
            <p className="text-sm font-bold uppercase tracking-wide text-black">
              2023
            </p>
            <h3 className="text-xl font-black uppercase tracking-tight text-black mt-2">
              Student Developer
            </h3>
            <p className="font-bold text-[#FF5722] mt-1">Academic Projects</p>
            <p className="text-base text-black mt-3">
              Created several web applications as part of coursework to practice programming and system development.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="border-t-[3px] border-black py-6">
            <p className="text-sm font-bold uppercase tracking-wide text-black">
              Present
            </p>
            <h3 className="text-xl font-black uppercase tracking-tight text-black mt-2">
              IT Intern
            </h3>
            <p className="font-bold text-[#FF5722] mt-1">
              Internship Program
            </p>
            <p className="text-base text-black mt-3">
              Gaining practical experience in web development and assisting with development tasks.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
