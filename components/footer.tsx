"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Twitter, Linkedin, Heart, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative border-t border-purple-500/10 bg-black/30 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-transparent" />
      
      <div className="container relative">
        <div className="mx-auto max-w-6xl py-8">
          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* Credit */}
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span>© {currentYear} Built with</span>
              <Heart className="h-4 w-4 text-purple-500 animate-pulse" />
              <span>by</span>
              <Link
                href="https://github.com/tirsasaki"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                Tirsasaki
                <ExternalLink className="ml-1 inline-block h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
