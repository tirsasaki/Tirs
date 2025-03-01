"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Tag, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface Project {
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  github: string
  demo: string
  date: string
  category: "Web App" | "Mobile App" | "Design" | "Other"
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "Kasa Blog Astro",
      description: "Modern blog platform built with Astro",
      longDescription: "A modern and minimalistic blog website designed for sharing and distributing content seamlessly. Built with performance and SEO in mind.",
      image: "/kasa.png",
      tags: ["Astro.js", "Tailwind CSS", "Markdown", "TypeScript"],
      github: "https://github.com/tirsasaki/kasa-blog-astro",
      demo: "https://kasa-blog.vercel.app/",
      date: "2024",
      category: "Web App"
    },
    // Add more projects here
  ]

  const categories = ["All", "Web App", "Mobile App", "Design", "Other"]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Header with parallax effect */}
        <div className="relative h-[40vh] overflow-hidden pt-16"> {/* Added pt-16 for header spacing */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="container relative h-full px-4 md:px-6">
            <div className="flex h-full flex-col items-center justify-center">
              <motion.h1 
                className="mb-4 text-4xl font-bold text-white md:text-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                My Projects
              </motion.h1>
              <motion.p 
                className="max-w-2xl text-center text-zinc-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                A collection of my work, side projects, and experiments
              </motion.p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container px-4 py-16 md:px-6">
          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className="rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-zinc-400 transition-all hover:border-purple-500 hover:bg-purple-500/10 hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity group-hover:opacity-100 z-20">
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </Link>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center text-sm text-zinc-400">
                      <Calendar className="mr-1 h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-zinc-400">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400"
                      >
                        <Tag className="mr-1 h-3 w-3" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-purple-500/20 transition-all group-hover:ring-purple-500/40" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
