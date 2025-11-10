"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MainHeroBox() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Cool Stuff", href: "#cool-stuff" },
    { name: "Contact", href: "#contact" },
  ]

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div
      className="relative min-h-[45vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/math-background.png)" }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Desktop Navigation - Horizontal at top */}
        <div className="hidden md:flex justify-center space-x-6 mb-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="text-white hover:text-ace-green px-4 py-3 text-lg font-medium transition-colors duration-200 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg drop-shadow-md"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex justify-center mb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="ml-2">Menu</span>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-8">
          <Image
            src="/images/ace-logo.png"
            alt="ACE Tutoring Logo"
            width={300}
            height={150}
            className="h-32 w-auto object-contain object-center"
            style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" }}
          />
          <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-lg text-center md:text-left">
            AP Calculus Tutoring
          </h1>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-white/30">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-white hover:text-ace-green px-4 py-3 text-lg font-medium transition-colors duration-200 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-center drop-shadow-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
