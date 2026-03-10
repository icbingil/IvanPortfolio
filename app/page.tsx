import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FF5722] selection:text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <div className="max-w-5xl mx-auto px-6">
        <Footer />
      </div>
    </div>
  )
}
