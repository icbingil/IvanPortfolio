"use client"

import React from 'react'
import { FadeIn } from '../FadeIn'
export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-12">
          SKILLS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              TypeScript
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              React
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              Node.js
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              Python
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              PostgreSQL
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              Redis
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              AWS
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              Docker
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              GraphQL
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              Next.js
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              Tailwind CSS
            </span>
          </div>
          <div className="border-b-[3px] border-black py-3">
            <span className="font-bold uppercase text-sm tracking-wide text-black">
              Git
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
