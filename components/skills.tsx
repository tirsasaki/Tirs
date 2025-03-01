"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, Layout, Database, GitBranch, Cpu, Globe, Shield, Cloud } from "lucide-react"
import { useRef } from 'react'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: Skill[]
  bgColor: string
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Layout,
      bgColor: "from-blue-500/10 to-cyan-500/10",
      skills: [
        { name: "React/Next.js", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", level: 95, color: "from-cyan-400 to-cyan-600" }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      bgColor: "from-purple-500/10 to-pink-500/10",
      skills: [
        { name: "Node.js", level: 88, color: "from-purple-500 to-pink-500" },
        { name: "Python", level: 82, color: "from-purple-400 to-purple-600" },
        { name: "Express", level: 85, color: "from-pink-400 to-pink-600" }
      ]
    },
    {
      title: "DevOps",
      icon: GitBranch,
      bgColor: "from-orange-500/10 to-red-500/10",
      skills: [
        { name: "Docker", level: 80, color: "from-orange-500 to-red-500" },
        { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "CI/CD", level: 85, color: "from-red-400 to-red-600" }
      ]
    },
    {
      title: "Others",
      icon: Cpu,
      bgColor: "from-green-500/10 to-emerald-500/10",
      skills: [
        { name: "Git", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "APIs", level: 88, color: "from-green-400 to-green-600" },
        { name: "Testing", level: 82, color: "from-emerald-400 to-emerald-600" }
      ]
    }
  ]

  const tools = [
    { name: "VS Code", icon: Code2, color: "hover:text-blue-500" },
    { name: "GitHub", icon: Globe, color: "hover:text-purple-500" },
    { name: "Vercel", icon: Cloud, color: "hover:text-gray-500" },
    { name: "Firebase", icon: Shield, color: "hover:text-yellow-500" }
  ]

  return (
    <section id="skills" className="relative bg-black py-24 overflow-hidden" ref={containerRef}>
      {/* Animated background */}
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
              Skills & Expertise
            </motion.div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              My Technical Skills
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${category.bgColor} p-6`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span className="text-zinc-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-black/20 backdrop-blur-sm">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center gap-2 text-zinc-400 transition-colors ${tool.color}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <tool.icon className="h-6 w-6" />
                  <span className="text-sm">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
