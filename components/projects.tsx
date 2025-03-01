"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from 'react'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const projects: Project[] = [
    {
      title: "Kasa Blog Astro",
      description: "Kasa Blog is a modern and minimalistic blog website designed for sharing and distributing content seamlessly.",
      image: "/kasa.png", // Add your project image
      tags: ["Astro.js", "Tailwind CSS", "Markdown"],
      github: "https://github.com/tirsasaki/kasa-blog-astro",
      demo: "https://kasa-blog.vercel.app/"
    },
    // Add more projects here
  ]

  return (
    <section id="projects" className="relative bg-black py-24 overflow-hidden" ref={containerRef}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"
            style={{ y }}
          />
        </div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 ring-1 ring-inset ring-purple-500/20 mb-4"
            >
              Featured Work
            </motion.div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Latest Projects
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore my recent work and creative experiments
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 overflow-hidden hover:border-purple-500/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Image with Centered Links */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Centered Links Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-purple-500/80 backdrop-blur-sm hover:bg-purple-500 transition-all duration-300"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{project.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400 ring-1 ring-inset ring-purple-500/20 transition-colors duration-300 group-hover:bg-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/projects">
              <Button
                variant="outline"
                className="group relative overflow-hidden border-purple-500/20 bg-purple-500/10 text-white hover:bg-purple-500/20"
              >
                <span className="relative z-10 flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <motion.div
                  className="absolute inset-0 z-0 bg-gradient-to-r from-purple-500/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
