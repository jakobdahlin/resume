import { Progress } from "@/components/ui/progress"

interface SkillProps {
  name: string
  category: string
}

const gradients: Record<string, string> = {
    HTML: "from-black/0 via-orange-400/30 to-black/0",
    CSS: "from-black/0 via-sky-500/30 to-black/0",
    JavaScript: "from-black/0 via-amber-300/30 to-black/0",
    TypeScript: "from-black/0 via-sky-500/30 to-black/0",
    React: "from-black/0 via-teal-400/30 to-black/0",
    "Next.js": "from-black/0 via-neutral-500/30 to-black/0",
  };

const skills: SkillProps[] = [
  // Core Technologies
  { name: "HTML", category: "core" },
  { name: "CSS", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "TypeScript", category: "core" },
  { name: "React", category: "core" },
  { name: "Next.js", category: "core" },

    // Styling & Animation
    { name: "Tailwind CSS", category: "styling" },
    { name: "CSS Modules", category: "styling" },
    { name: "Framer Motion", category: "styling" },

  // Version Control & Deployment
  { name: "GitHub", category: "VC & deploy" },
  { name: "Vercel", category: "VC & deploy" },

  // Coding & Deployment Tools
  { name: "Visual Studio Code", category: "code" },
  { name: "Adobe Dreamweaver", category: "code" },
  { name: "Rapidweaver", category: "code" },
  { name: "CodePen", category: "code" },
  { name: "Wordpress", category: "code" },
]

export function SkillsSection() {
  const coreSkills = skills.filter((skill) => skill.category === "core")
  const stylingSkills = skills.filter((skill) => skill.category === "styling")
  const vcdepSkills = skills.filter((skill) => skill.category === "VC & deploy")
  const codingSkills = skills.filter((skill) => skill.category === "code")

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-medium">Core Technologies</h3>
        <div className="flex flex-wrap gap-3">
  {coreSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-cyan-400/50 hover:border-cyan-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-cyan-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Styling & Animation</h3>
        <div className="flex flex-wrap gap-3">
  {stylingSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-cyan-400/50 hover:border-cyan-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-cyan-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Version Control & Deployment</h3>
        <div className="flex flex-wrap gap-3">
  {vcdepSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-cyan-400/50 hover:border-cyan-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-cyan-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">IDE & Development Tools</h3>
        <div className="flex flex-wrap gap-3">
  {codingSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-full border border-cyan-400/50 hover:border-cyan-400 transform duration-200 ease-in-out"
  >
    <div
      className="px-4 py-1 rounded-full text-cyan-400/50 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</div>
      </div>

</div>
  )
}

