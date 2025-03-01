"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tirsasaki@gmail.com",
      href: "mailto:tirsasaki@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 123 456 789",
      href: "tel:+62123456789"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="relative bg-black py-24 overflow-hidden">
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
              Get In Touch
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to help you bring it to life. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-lg border border-purple-500/20 bg-purple-500/5 p-4 transition-colors hover:bg-purple-500/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">{item.label}</p>
                      <p className="font-medium text-white group-hover:text-purple-400">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Me</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/tirsasaki" },
                    { icon: Twitter, href: "https://x.com/tirsasaki" },
                    { icon: Linkedin, href: "/" }
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={social.href}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 transition-colors hover:bg-purple-500/20"
                        target="_blank"
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 opacity-20 blur-lg" />
              <div className="relative rounded-xl border border-purple-500/20 bg-black p-6">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Name</label>
                      <input
                        className="w-full rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Email</label>
                      <input
                        className="w-full rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Message</label>
                      <textarea
                        className="h-32 w-full rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                        placeholder="Your message..."
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
