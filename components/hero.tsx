"use client"

import { useCallback, useEffect, useState, useMemo } from 'react'
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Github, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { debounce } from 'lodash-es' // Only import what we need
import toast from 'react-hot-toast'
import Link from "next/link"

export function Hero() {
  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  
  const fullText = useMemo(() => "Creative Developer & Writter", [])
  const githubUrl = useMemo(() => "https://github.com/tirsasaki", [])
  
  // Memoize the typing effect
  const startTypingEffect = useCallback(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      setText(prev => {
        if (currentIndex >= fullText.length) {
          clearInterval(intervalId)
          return prev
        }
        currentIndex++
        return fullText.slice(0, currentIndex)
      })
    }, 100)
    return () => clearInterval(intervalId)
  }, [fullText])

  useEffect(() => {
    startTypingEffect()
  }, [startTypingEffect])

  // Memoize the copy handler
  const handleCopyGithub = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(githubUrl)
      setCopied(true)
      toast.success('GitHub URL copied!')
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      toast.error('Failed to copy')
    }
  }, [githubUrl])

  // Optimize particles count based on device performance
  const particleCount = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 10 : 20
    }
    return 15
  }, [])

  // Memoize particle animations
  const particles = useMemo(() => {
    if (prefersReducedMotion) return []
    
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 400 - 200,
      y: Math.random() * 400 - 200,
      scale: Math.random() + 0.5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2
    }))
  }, [particleCount, prefersReducedMotion])

  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Optimized background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
          {!prefersReducedMotion && (
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/grid.svg')]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </div>

      {/* Optimized particles */}
      {!prefersReducedMotion && (
        <motion.div className="absolute inset-0 z-0">
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              className="absolute h-1 w-1 rounded-full bg-purple-500/30"
              animate={{
                x: [0, particle.x],
                y: [0, particle.y],
                scale: [1, particle.scale],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: particle.left,
                top: particle.top,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Main content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          className="mx-auto max-w-3xl text-center min-h-[600px] flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
              Welcome to my portfolio
            </span>
          </motion.div>
          
          <div className="mb-6 h-[120px] md:h-[144px] flex items-center justify-center">
            <h1 className="bg-gradient-to-r from-white to-purple-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
              {text}
              <span className="inline-block w-[12px] text-purple-500 animate-pulse">|</span>
            </h1>
          </div>

          <motion.p 
            className="mb-8 text-lg text-zinc-400 md:text-xl min-h-[56px] md:min-h-[84px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            I craft exceptional digital experiences that merge creativity with functionality. 
            Transforming ideas into elegant, responsive web solutions.
          </motion.p>

          <motion.div 
            className="flex flex-col items-center justify-center gap-4 sm:flex-row min-h-[48px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Link href="/projects">
              <Button size="lg" className="group w-full bg-purple-600 text-white hover:bg-purple-700 sm:w-auto">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Button
              size="lg"
              variant="outline"
              className="group w-full border-purple-500/20 bg-transparent text-white hover:bg-purple-500/10 hover:border-purple-500 sm:w-auto"
              onClick={handleCopyGithub}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
              {copied ? (
                <Check className="ml-2 h-4 w-4 text-green-500" />
              ) : (
                <Copy className="ml-2 h-4 w-4 opacity-70 transition-transform group-hover:scale-110" />
              )}
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center justify-center gap-4 min-h-[32px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-black bg-gradient-to-r from-purple-500 to-purple-700"
                ></div>
              ))}
            </div>
            <span className="text-sm text-zinc-400">
              +1K projects completed
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center h-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="flex animate-bounce items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 p-2"
          whileHover={{ scale: 1.1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-purple-500"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
