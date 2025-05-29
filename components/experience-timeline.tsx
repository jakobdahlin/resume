import { CalendarDays, Building, MapPin, } from "lucide-react"

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">

            {/* First Company */}
            <div className="space-y-4">

<div>
<div className="flex items-center gap-2">
<h3 className="text-xl font-semibold">Web Developer</h3>
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

<p className="w-full text-neutral-400 text-md">
I'm currently shifting into web development and learning to work with modern AI tools, 
while still building on my background in architectural photography. I'm expanding my 
skills in web design and UI/UX, and using my photography archive as part of the creative process. 
This mix lets me create responsive, visually strong websites that combine function with design, 
backed by years of visual experience.</p>
</div>

  {/* Multiple positions at the same company */}
<div className="ml-2 border-l border-neutral-400/60 pl-4">
  <div className="flex items-center gap-2">
        <h4 className="text-lg font-medium">Web Development</h4>
      </div>
      <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
        <p>
        I build responsive, mobile-first websites using HTML5, CSS, Tailwind CSS, React, and 
        Next.js. My focus is on clean, fast, and scalable user interfaces with accessible design.</p>
      </ul>
    
  <div className="flex items-center gap-2">
        <h4 className="text-lg font-medium">UI/UX Design</h4>
      </div>
      <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
        <p>
        I apply user-centered design through wireframes, prototypes, usability testing, and design systems. 
        I work with layout, color, typography, accessibility, and visual hierarchy to create intuitive 
        digital experiences.</p>
      </ul>
    
  <div className="flex items-center gap-2">
        <h4 className="text-lg font-medium">SEO</h4>
      </div>
      <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
        <p>
        I improve visibility through clean structure, strategic content, and keyword optimization. 
        I also handle e-commerce tracking, affiliate tools, and performance analytics.</p>
      </ul>

  <div className="flex items-center gap-2">
        <h4 className="text-lg font-medium">Graphic Design</h4>
      </div>
      <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
        <p>
        With 15+ years of Photoshop experience, I create logos, branding, icons, 
        social media content, motion graphics, and print-ready designs. 
        I also manage design handoff and organized file exports for web and print.</p>
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
        <p className="w-full text-neutral-400 text-md">
        Most of my work focuses on documenting major architectural projects in the real estate industry.
        My clients include top real estate firms, global brands, and iconic properties such as Empire 
        State Building, The Helmsley Building, The Refinery at Domino, and The Woolworth Building. 
        My work has been featured on Bravo's Million Dollar Listing: New York and is regularly 
        available for sale through IKEA worldwide.
        </p>
        <p className="w-full text-neutral-400 text-md pt-4">
        I also document art and have worked in cities like Stockholm, Sweden, and Los Angeles, CA. 
        As a former landscape and architectural photographer, I've built an archive of over 200,000 images 
        across most major U.S. cities and several countries.
        </p>
        </div>
    </div>



{/* Third Company */}
      <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">Childcare Worker</h3>
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
        Responsible for children aged 2 to 12, including 
planning activities suited to each age group. I also 
managed digital tasks such as organizing lists, 
handling documentation, and creating marketing 
materials.</p>
        </div>
    </div>

    {/* Fourth Company */}
    <div className="space-y-4">
      <div>
        <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">System Administrator</h3>
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
                <span className="text-neutral-400">2013 - 2014</span>
                <MapPin className="h-4 w-4 text-white ml-4" />
                <span className="text-neutral-400">Örebro, Sweden (On-Site)</span>
            </div>
        </div>
        <p className="w-full text-neutral-400 text-md">
        Helped launch a project to connect job-seeking 
individuals with companies through a custom-built 
system. Managed website, social media, and 
marketing material for various events.</p>
        </div>
    </div>
</div>
  )
}

