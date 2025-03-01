import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

export function ProjectCard({ title, description, image, tags }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden rounded-xl border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <Link
          href="#"
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-zinc-400">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t border-zinc-800 p-6">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
            {tag}
          </span>
        ))}
      </CardFooter>
    </Card>
  )
}

