import { Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface GraphicDesignProps {
  name: string
  description: string
}

const uiuxSkills = [
    "Wireframing",
    "Prototyping",
    "Color Theory",
    "Accessability",
    "Interaction",
    "Microinteractions",
    "Iconography",
    "Visual Hierarchy",
    "Typography",
    "Layout Principles",
    "Mobile-First Design",
    "User Research",
    "Design Systems",
    "Component Libraries",
  ]

  const graphicSkills = [
    "Infograpgics",
    "Data Visualization",
    "Motion Graphics",
    "Animations",
    "Socal Media Design",
    "Image Editing",
    "Retouching",
    "Custom Icons",
    "Branding",
    "Logotypes",
    "Print",
    "Digital Media",
    "Posters / Flyers",
    "Ad Design",

  ]
  
  const collaborationSkills = [
    "Developer Handoff",
    "Annotating Designs",
    "Team Collaboration",
    "Client Communication",
    "Style Guides",
    "Brand Kits",
    "Exporting Assets for Web & Print",
    "Version Control",
    "File Management",
  ]

  const designSkills = [
    "Microsoft Office Suite",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Numbers",
    "Keynote",
    "InVision",
    "Figma",
    "Canva",
    "Pages",

  ]

export function GraphicDesignSection() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
      
  <div className="md:text-left mb-6">
    <h3 className="mb-4 text-lg font-bold">UI / UX</h3>
      <div className="flex flex-wrap gap-3">
        {uiuxSkills.map((skill) => (
          <div key={skill}
            className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
            hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out">
            <div
            className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
            {skill}
            </div>
          </div>
        ))}
      </div>
  </div>

  <div className="md:text-lef mb-6">
    <h3 className="mb-3 text-lg font-bold">Visual & Graphic Design</h3>
      <div className="flex flex-wrap gap-3">
        {graphicSkills.map((skill) => (
          <div key={skill}
            className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
            hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out">
            <div
            className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
            {skill}
            </div>
          </div>
        ))}
      </div>
  </div>

  <div className="md:text-left mb-6">
    <h3 className="mb-3 text-lg font-bold">Collaboration & Design Handoff</h3>
      <div className="flex flex-wrap gap-3">
        {collaborationSkills.map((skill) => (
          <div key={skill}
            className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
            hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out">
            <div
            className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
            {skill}
            </div>
          </div>
        ))}
      </div>
  </div>

  <div className="md:text-left mb-1">
    <h3 className="mb-3 text-lg font-bold">Digital & Print</h3>
      <div className="flex flex-wrap gap-3">
        {designSkills.map((skill) => (
          <div key={skill}
            className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
            hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out">
            <div
            className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200">
            {skill}
            </div>
          </div>
        ))}
      </div>
  </div>

</div>
  );
}

