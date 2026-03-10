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
              2026 — Present
            </p>
            <h3 className="text-xl font-black uppercase tracking-tight text-black mt-2">
              Senior Software Engineer
            </h3>
            <p className="font-bold text-[#FF5722] mt-1">Stripe</p>
            <p className="text-base text-black mt-3">
              Leading the frontend architecture for the billing platform.
              Improved dashboard load times by 40%.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="border-t-[3px] border-black py-6">
            <p className="text-sm font-bold uppercase tracking-wide text-black">
              2026
            </p>
            <h3 className="text-xl font-black uppercase tracking-tight text-black mt-2">
              Software Engineer
            </h3>
            <p className="font-bold text-[#FF5722] mt-1">Vercel</p>
            <p className="text-base text-black mt-3">
              Core contributor to Next.js. Developed key features for the edge
              runtime and routing system.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="border-t-[3px] border-black py-6">
            <p className="text-sm font-bold uppercase tracking-wide text-black">
              2026
            </p>
            <h3 className="text-xl font-black uppercase tracking-tight text-black mt-2">
              Frontend Developer
            </h3>
            <p className="font-bold text-[#FF5722] mt-1">
              Acme Startup (YC S18)
            </p>
            <p className="text-base text-black mt-3">
              First engineering hire. Built the MVP from scratch and scaled the
              platform to 100k+ MAU.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
