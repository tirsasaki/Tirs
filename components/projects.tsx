"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link" // Add this import

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  github: string
  demo: string
}

export function Projects() {
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
    <section id="projects" className="relative bg-black py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 ring-1 ring-inset ring-purple-500/20 mb-4">
              My Work
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Here are some of my favorite projects that showcase my skills and passion for building exceptional digital experiences.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mb-4 text-sm text-zinc-400">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400 ring-1 ring-inset ring-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub`}
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">GitHub Repository</span>
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      asChild
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-purple-500/20 rounded-xl pointer-events-none" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/projects">
              <Button
                variant="outline"
                className="group border-purple-500/20 bg-purple-500/10 text-white hover:bg-purple-500/20"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
