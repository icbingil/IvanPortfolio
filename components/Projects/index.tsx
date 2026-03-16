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
              A group Project for Sia2 Massage Booking
            </h3>
            <p className="text-black text-base mt-3">
              Real-time booking management and analytics dashboard for a massage service. Designed to track appointments, manage schedules, and provide insights with fast, responsive performance.
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-black mt-4">
              PHP, Laravel, MySQL, HTML, CSS, JavaScript
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://github.com/CAACARL/Sia2-Massage-Booking"
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
              mpo group project for coahs department of Rmmc
            </h3>
            <p className="text-black text-base mt-3">
              A comprehensive system designed to manage inventory, student records, and various administrative operations.
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-black mt-4">
              Built with PHP, Laravel, Boostrap, Javascript
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://github.com/lowiji12/coahs"
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
              Laurelle Veterinary Clinic Inventory and POS Sytem
            </h3>
            <p className="text-black text-base mt-3">
              Laurelle Veterinary Clinic Inventory and POS System is a smart, all-in-one solution designed to streamline clinic operations. From managing medical supplies and inventory to handling sales transactions with speed and accuracy, this system ensures a seamless experience for staff and clients alike, improving efficiency and enhancing overall service quality.
            </p>
            <p className="text-sm font-bold uppercase tracking-wide text-black mt-4">
              Built with PHP, Laravel, MySQL, HTML, CSS, JavaScript
            </p>
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://github.com/icbingil/LaurelleVet"
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
