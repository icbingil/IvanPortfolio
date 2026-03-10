"use client"

import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navLinks = [
    {
      name: 'ABOUT',
      href: '#about',
    },
    {
      name: 'SKILLS',
      href: '#skills',
    },
    {
      name: 'PROJECTS',
      href: '#projects',
    },
    {
      name: 'EXPERIENCE',
      href: '#experience',
    },
    {
      name: 'CONTACT',
      href: '#contact',
    },
  ]
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    setMobileMenuOpen(false)
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${isScrolled ? 'border-b-[3px] border-black py-4' : 'py-6'}`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, '#top')}
          className="text-lg font-black uppercase tracking-tight text-black hover:text-[#FF5722] transition-colors"
        >
          I.C.B
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black hover:text-[#FF5722] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-[3px] border-black px-6 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF5722] transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
