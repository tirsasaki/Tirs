"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download, Code2 } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollY = window.scrollY

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionId = section.getAttribute("id") || ""

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveItem(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" }, // Updated this line
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  const logoVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  }

  const menuItemVariants = {
    initial: { width: 0 },
    hover: { 
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const underlineVariants = {
    hidden: { 
      width: "0%",
      left: "50%",
      right: "50%"
    },
    hover: { 
      width: "100%",
      left: "0%",
      right: "0%",
      transition: { 
        duration: 0.3,
        ease: [0.65, 0, 0.35, 1] 
      }
    }
  }

  const buttonVariants = {
    hover: {
      boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-purple-500/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="group flex items-center space-x-2">
            <motion.div
              className="relative"
              variants={logoVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              {/* Updated logo design */}
              <div className="relative flex h-10 w-10 items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-600/20 to-purple-400/20 backdrop-blur-sm group-hover:from-purple-600/30 group-hover:to-purple-400/30 transition-all duration-300" />
                <Code2 className="h-6 w-6 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -inset-1 rounded-lg border border-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-105 transition-all duration-300" />
              </div>
            </motion.div>
            
            <motion.span 
              className="text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
                tirsasaki
              </span>
              <span className="text-purple-500 animate-pulse">.</span>
            </motion.span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item, index) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                  activeItem === item.href.slice(1)
                    ? "text-purple-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
                <div className="relative">
                  {/* Main underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300"
                    initial={{ width: 0 }}
                    animate={{
                      width: activeItem === item.href.slice(1) ? "100%" : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  {/* Hover underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[1px] bg-purple-500/50 blur-sm"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </nav>

        {/* Enhanced Mobile Menu Button */}
        <motion.button
          className="md:hidden relative p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobileMenuOpen ? "close" : "menu"}
              initial={{ rotate: 0 }}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              exit={{ rotate: -90 }}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-purple-500/20"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-purple-500" />
              ) : (
                <Menu className="h-6 w-6 text-purple-500" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden border-t border-purple-500/10 bg-black/95 backdrop-blur-md"
          >
            <div className="container py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ 
                    delay: index * 0.1,
                    ease: [0.76, 0, 0.24, 1]
                  }}
                >
                  <Link
                    href={item.href}
                    className="group block relative py-2 text-center text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span
                      className="relative z-10 text-zinc-400 transition-colors duration-300 group-hover:text-purple-400"
                    >
                      {item.label}
                    </motion.span>
                    <motion.span
                      className="absolute inset-0 bg-purple-500/10 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <Button
                  variant="outline"
                  className="w-full border-purple-500/20 bg-purple-500/10 text-white hover:bg-purple-500/20 hover:border-purple-500"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
