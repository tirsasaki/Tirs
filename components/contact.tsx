"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Github, Twitter, Linkedin, Send, ExternalLink } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tirsasaki@gmail.com",
      href: "mailto:tirsasaki@gmail.com",
      color: "group-hover:text-[#EA4335]"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indonesia",
      href: "https://goo.gl/maps/Indonesia",
      color: "group-hover:text-[#34A853]"
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/tirsasaki", color: "hover:text-[#2ea043]" },
    { icon: Twitter, href: "https://twitter.com/tirsasaki", color: "hover:text-[#1DA1F2]" },
    { icon: Linkedin, href: "https://linkedin.com/in/tirsasaki", color: "hover:text-[#0A66C2]" }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative bg-black py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
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
            <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 ring-1 ring-inset ring-purple-500/20 mb-4">
              Get In Touch
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Have an idea? Let's bring it to life together. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 transition-colors ${item.color}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">{item.label}</p>
                      <p className="font-medium text-white group-hover:text-purple-400">
                        {item.value}
                        <ExternalLink className="ml-1 inline-block h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-500 transition-all duration-300 ${social.color} hover:border-purple-500/40 hover:bg-purple-500/10`}
                      whileHover={{ y: -3 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 opacity-20 blur-lg" />
              <div className="relative rounded-xl border border-purple-500/20 bg-black/40 backdrop-blur-sm p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {[
                      { label: "Name", type: "text", value: "name" },
                      { label: "Email", type: "email", value: "email" },
                      { label: "Message", type: "textarea", value: "message" }
                    ].map((field, index) => (
                      <motion.div
                        key={field.value}
                        className="space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <label className="text-sm font-medium text-zinc-400">
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            className="h-32 w-full rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder={`Your ${field.label.toLowerCase()}...`}
                            value={formData[field.value as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [field.value]: e.target.value })}
                            required
                          />
                        ) : (
                          <input
                            type={field.type}
                            className="w-full rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                            placeholder={`Your ${field.label.toLowerCase()}`}
                            value={formData[field.value as keyof typeof formData]}
                            onChange={(e) => setFormData({ ...formData, [field.value]: e.target.value })}
                            required
                          />
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div 
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                        Sending...
                      </motion.div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
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
