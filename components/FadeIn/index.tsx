"use client"

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}
export function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: '-50px',
      }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
