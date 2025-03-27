import { Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface GraphicDesignProps {
  name: string
  description: string
}

const designSkills = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Figma",
  "Canva",
  "InVision",
  "Microsoft Office Suite",
  "Pages",
  "Numbers",
  "Keynote"
]

const uiuxSkills = [
    "Wireframing & Prototyping",
    "Responsive & Mobile-First Design",
    "Color Theory & Accessability",
    "Typography & Layout Principles",
    "Usability Testing & User Research",
    "Interaction & Microinteractions",
    "Iconography & Visual Hierarchy",
    "Design Systems & Component Libraries",
  ]

  const graphicSkills = [
    "Branding & Logotypes",
    "Illustration & Custom Icons",
    "Infograpgics & Data Visualization",
    "Image Editing & Retouching",
    "Print & Digital Media",
    "Motion Graphics & Animations",
    "Posters / Flyers",
    "Ad Design",
    "Socal Media Content Design",
  ]
  
  const collaborationSkills = [
    "Developer Handoff",
    "Style Guides & Brand Kits",
    "Annotating Designs",
    "Version Control & File Management",
    "Team Collaboration",
    "Client Communication",
    "Exporting Assets for Web & Print",
  ]

export function GraphicDesignSection() {
  return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      
          <div className="p-4">
            <h3 className="mb-3 text-lg font-medium">UI / UX</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
              {uiuxSkills.map((skill) => (
                <div key={skill} className="flex items-centergap-2 text-neutral-500 hover:text-white">
                  <span className="text-md">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4">
            <h3 className="mb-3 text-lg font-medium">Visual & Graphic Design</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
              {graphicSkills.map((skill) => (
                <div key={skill} className="flex items-centergap-2 text-neutral-500 hover:text-white">
                  <span className="text-md">{skill}</span>
                </div>
              ))}
            </div>
          </div>


          <div className="p-4">
            <h3 className="mb-3 text-lg font-medium">Collaboration & Design Handoff</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
              {collaborationSkills.map((skill) => (
                <div key={skill} className="flex items-centergap-2 text-neutral-500 hover:text-white">
                  <span className="text-md">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4">
            <h3 className="mb-3 text-lg font-medium">Digital & Print</h3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
              {designSkills.map((skill) => (
                <div key={skill} className="flex items-centergap-2 text-neutral-500 hover:text-white">
                  <span className="text-md">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      );
}

