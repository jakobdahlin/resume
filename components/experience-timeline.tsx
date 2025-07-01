import { CalendarDays, Building, MapPin, } from "lucide-react"

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">

            {/* First Company */}
            <div className="space-y-4">

<div>
<div className="flex items-center gap-2">
<h3 className="text-xl font-semibold">Product Designer & UX Engineer</h3>
<span className="inline-block rounded-full p-[1px] 
text-white border border-white animate-pulse-slow shadow-lg shadow-white/50">
<span className="block rounded-full px-2.5 py-0.5 text-xs 
font-medium text-primary text-white">
Current
</span>
</span>
</div>
<div className="mt-1 text-sm text-white">
      <div className="flex items-center gap-1">
          <Building className="h-4 w-4 text-white" />
          <h3 className="text-lg font-semibold">Self-Employed</h3>
      </div>
  </div>
<div className="mt-1 text-sm text-muted-foreground">
<div className="flex items-center gap-1 mb-3">
<CalendarDays className="h-4 w-4 text-white" />
<span className="text-neutral-400">2012 - Present</span>
<MapPin className="h-4 w-4 text-white ml-4" />
<span className="text-neutral-400">New York, NY (Remote)</span>
</div>
</div>
<p className="text-neutral-400 pb-4">
I design and build responsive, accessible websites and digital products that combine 
clean UX with strong visual design. My background in architectural photography 
sharpens my focus on structure, layout, and hierarchy. I'm expanding my toolkit 
with modern web technologies and AI-powered workflows to create functional, 
scalable digital experiences.
</p>
<ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
  <li>Design web and mobile products end-to-end, from wireframe to ship</li>
  <li>Build responsive, mobile-first websites and apps with React, Next.js, and Tailwind CSS</li>
  <li>Design and build reusable UI components directly in React and Tailwind CSS</li>
  <li>Creating UI with focus on accessibility, layout, typography, and visual hierarchy</li>
  <li>Develop interactive tools, apps, and websites with clean, scalable code</li>
  <li>Design directly in code, iterating live and refining based on feedback</li>
  <li>Optimize websites for SEO with clean structure, content strategy, and performance</li>
  <li>Manage e-commerce tracking, affiliate tools, and performance analytics</li>
  <li>Produce logos, branding, icons, motion graphics, and print-ready assets</li>
</ul>
</div>

</div>

{/* Second Company */}
<div className="space-y-4">
    <div>
        <div className="flex items-center gap-">
            <h3 className="text-xl font-semibold">Architectural Photographer</h3>
            <span className="inline-block rounded-full ml-2 p-[1px]
            bg-transparent">
  <span className="block rounded-full px-2.5 py-0.5 text-xs 
  font-medium text-primary text-white border border-white shadow-lg shadow-white/50 animate-pulse-slow">
    Current
  </span>
</span>
        </div>
        <div className="mt-1 text-md text-white">
            <div className="flex items-center gap-1">
                <Building className="h-4 w-4 text-white" />
                <h3 className="text-lg font-semibold">Self-Employed</h3>
            </div>
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 mb-3">
                <CalendarDays className="h-4 w-4 text-white" />
                <span className="text-neutral-400">2016 - Present</span>
                <MapPin className="h-4 w-4 text-white ml-4" />
                <span className="text-neutral-400">New York, NY (Hybrid)</span>
            </div>
        </div>
        <ul className="list-disc pl-6 space-y-1 marker:text-white text-neutral-400">
  <li>Document major architectural projects for real estate, design, and global brands</li>
  <li>Photographed iconic properties including Empire State Building, The Helmsley Building, The Refinery at Domino, and The Woolworth Building</li>
  <li>Work featured on Bravo's <i>Million Dollar Listing: New York</i> and published worldwide via IKEA</li>
  <li>Cover art, design, and culture events across New York City</li>
  <li>Built an archive of 200,000+ images from major U.S. cities and international locations</li>
  <li>Specialize in clean, editorial-style photography for architecture, interiors, and public spaces</li>
</ul>
        </div>
    </div>



{/* Third Company */}
      <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">Other Experience</h3>
        </div>
        <div className="mt-1 text-sm text-white">
            <div className="flex items-center gap-1">
                <Building className="h-4 w-4 text-white" />
                <h3 className="text-lg font-semibold">Örebro Municipality</h3>
            </div>
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 mb-3">
                <CalendarDays className="h-4 w-4 text-white" />
                <span className="text-neutral-400">2014 - 2016</span>
                <MapPin className="h-4 w-4 text-white ml-4" />
                <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
        </div>
        <p className="w-full text-neutral-400 text-md">
        <b className="text-white">Childcare Worker</b> – Planned activities, managed documentation, and handled digital tasks like organizing lists and creating marketing materials.</p>
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1 mb-3">
                <CalendarDays className="h-4 w-4 text-white" />
                <span className="text-neutral-400">2013 - 2014</span>
                <MapPin className="h-4 w-4 text-white ml-4" />
                <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
        </div>
        <p className="w-full text-neutral-400 text-md">
        <b className="text-white">System Administrator</b> – Managed website, social media, and marketing materials for a project connecting job seekers with companies through a custom-built platform.</p>
        </div>
        </div>

  )
}

