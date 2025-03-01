"use client"

import { motion } from "framer-motion"
import { Code2, Layout, Database, GitBranch, Terminal, Crop, Cloud, Brain } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: { name: string; level: number }[]
}

export function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      title: "Backend Development",
      icon: Code2,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "Express", level: 85 },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="relative bg-zinc-900 py-24 overflow-hidden">
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
              Skills & Expertise
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              My Technical Skills
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A showcase of my technical expertise and proficiency in various technologies and tools.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl border border-purple-500/20 bg-purple-500/5 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-purple-500/10 p-2">
                    <category.icon className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.1) }}
                    >
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">{skill.name}</span>
                        <span className="text-sm text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-700"
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

          {/* Tools & Technologies */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-center text-xl font-semibold mb-8">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "VSCode", "Git", "GitHub", "Docker", "AWS", "Vercel",
                "Figma", "Photoshop", "Jest", "Cypress"
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  className="rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-sm text-zinc-400">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
