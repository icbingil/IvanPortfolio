"use client"

import React from 'react'
import { FadeIn } from '../FadeIn'
export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-12">
          PROJECTS
        </h2>

        <div>
          {/* Project 1 */}
          <div className="border-t-[3px] border-black py-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              Nexus Analytics
            </h3>
            <p className="text-black text-base mt-3">
              Real-time event tracking and analytics dashboard for SaaS
              products.
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-black mt-4">
              React / TypeScript / ClickHouse / Go
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border-t-[3px] border-black py-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              Lumina Editor
            </h3>
            <p className="text-black text-base mt-3">
              A block-based rich text editor with collaborative features.
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-black mt-4">
              Next.js / ProseMirror / Yjs / WebSockets
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border-t-[3px] border-black py-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              Aura UI
            </h3>
            <p className="text-black text-base mt-3">
              Minimalist, accessible component library for React applications.
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-black mt-4">
              React / Tailwind CSS / Radix UI / Storybook
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                Live
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="border-t-[3px] border-black py-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black">
              Orbit CLI
            </h3>
            <p className="text-black text-base mt-3">
              Command-line tool for managing multi-cloud deployments.
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-black mt-4">
              Rust / AWS SDK / Docker / GitHub Actions
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
