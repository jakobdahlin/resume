import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  className: string
  title: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  githubUrl: string
}

export function ProjectCard({ title, tags, imageUrl, demoUrl, githubUrl }: ProjectCardProps) {
  return (
<div className="h-full flex flex-col">
  <Card className="flex flex-col h-full overflow-hidden transition-all 
  hover:shadow-md bg-white/5 border border-cyan-400/50 duration-300">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform"
      />
    </div>

    <CardHeader className="p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </CardHeader>

    <CardContent className="p-4 pt-0 flex-grow">
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag} className="text-sm border bg-transparent hover:bg-transparent border-cyan-400 text-cyan-400/50">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>

    <CardFooter className="flex justify-between gap-2 p-4">
  <Button asChild size="sm" className="w-full gap-1 px-6 py-2 rounded-md 
  bg-transparent border border-cyan-400/50 hover:border-cyan-300 
  transition ease-in-out duration-200 hover:bg-transparent hover:text-white">
    <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
      <Github className="h-5 w-5" />
      Code
    </Link>
  </Button>

  <Button asChild size="sm" className="w-full gap-1 rounded-md bg-transparent border border-cyan-400/50 hover:border-cyan-300 
  transition ease-in-out duration-200 hover:bg-transparent hover:text-white">
    <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
      <ExternalLink className="h-5 w-5" />
      Demo
    </Link>
  </Button>
</CardFooter>
  </Card>
</div>

  )
}

