"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, Download, Code2, Globe, Rocket } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import toast from 'react-hot-toast'
import { useRef } from 'react'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/tirsasaki",
      label: "GitHub",
      color: "hover:text-[#2ea043]"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/tirsasaki",
      label: "Twitter",
      color: "hover:text-[#1DA1F2]"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/tirsasaki",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]"
    },
    {
      icon: Mail,
      href: "mailto:tirsasaki@gmail.com",
      label: "Email",
      color: "hover:text-[#EA4335]"
    }
  ]

  const stats = [
    { icon: Code2, value: "50+", label: "Projects Completed", color: "from-purple-500 to-blue-500" },
    { icon: Globe, value: "30+", label: "Happy Clients", color: "from-green-500 to-emerald-500" },
    { icon: Rocket, value: "5+", label: "Years Experience", color: "from-orange-500 to-red-500" }
  ]

  const handleDownloadCV = () => {
    const cvUrl = '/Tirsasaki.pdf'
    try {
      const link = document.createElement('a')
      link.href = cvUrl
      link.download = 'Tirsasaki-CV.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      toast.success('CV download started!')
    } catch (error) {
      toast.error('Failed to download CV. Please try again.')
    }
  }

  return (
    <section id="about" className="relative bg-zinc-900 py-24 overflow-hidden" ref={containerRef}>
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"
          style={{ y }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div 
            className="mb-12 text-center"
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
              About Me
            </motion.div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Crafting Digital Experiences
            </h2>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Profile Section */}
            <motion.div 
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 opacity-20 blur-lg transition-all group-hover:opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative h-80 w-80 overflow-hidden rounded-xl border-2 border-purple-500/20 bg-zinc-800">
                  <motion.img
                    src="/image.jpg"
                    alt="Profile"
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="flex flex-col justify-center space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="mb-4 text-2xl font-bold">
                  Hi, I'm <span className="text-purple-500">Tirsasaki</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  A passionate Full Stack Developer based in Indonesia, specializing in building exceptional digital experiences. 
                  With a strong foundation in both front-end and back-end development, I create scalable and efficient solutions 
                  that solve real-world problems.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-purple-500/20 bg-purple-500/5 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-all duration-300 group-hover:opacity-10`} />
                    <div className="relative z-10 transition-all duration-300 group-hover:translate-y-[-2px]">
                      <stat.icon className="h-6 w-6 mb-2 text-purple-500" />
                      <div className="text-2xl font-bold text-purple-500">{stat.value}</div>
                      <div className="text-xs text-zinc-400">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  className="group bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  Download CV
                </Button>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 transition-colors ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
