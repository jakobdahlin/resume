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
    <div className="h-full">
      <Card className="flex flex-col h-full overflow-hidden transition-all 
      hover:shadow-md bg-transparent border border-neutral-400/50 duration-200 w-full">
        
        {/* Top image */}
        <div className="relative w-full h-64">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform"
          />
        </div>

        {/* Bottom content */}
        <div className="flex flex-col justify-between flex-grow">
          <CardHeader className="p-4 pb-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </CardHeader>

          <CardContent className="p-4 pt-0 flex-grow">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge key={tag} className="text-xs border bg-transparent 
                hover:bg-transparent border-neutral-400/50 text-white">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap sm:flex-row justify-between gap-2 p-4 pt-0">
            <Button
              asChild
              size="sm"
              className="w-full gap-1 px-6 py-2 rounded-xl
              bg-transparent border border-neutral-400/60 hover:border-white 
              transition ease-in-out hover:shadow-lg hover:shadow-white/50 transform duration-200 hover:bg-white/20 hover:text-white"
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Demo
              </Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="w-full gap-1 px-6 py-2 rounded-xl 
              bg-transparent border border-neutral-400/60 hover:border-white
              transition ease-in-out hover:shadow-lg hover:shadow-white/50 transform duration-200 hover:bg-white/20 hover:text-white"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                Code
              </Link>
            </Button>
          </CardFooter>

        </div>
      </Card>
    </div>
  );
}

