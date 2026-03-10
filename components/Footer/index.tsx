"use client"

import React from 'react'
export function Footer() {
  return (
    <footer className="py-12 border-t-[3px] border-black mt-12">
      <div className="text-center text-sm font-bold uppercase tracking-widest text-black">
        © {new Date().getFullYear()} IVAN CLARK BINGIL. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
