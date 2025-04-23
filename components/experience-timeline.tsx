import { CalendarDays, Building, MapPin, } from "lucide-react"

export function ExperienceTimeline() {
  return (
    <div className="space-y-8">

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
        Work includes collaborations with some of the most well-known real estate brokerages, 
        marketing agencies, and property owners in the industry. Projects cover both residential 
        and commercial real estate, as well as retail spaces and event venues. Features include 
        appearances by IKEA and Million Dollar Listing: New York, along with ongoing work in 
        online art sales and social media campaigns.</p>
        </div>
    </div>

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
I am expanding my knowledge in web design and UI/UX design, 
while integrating these skills into my creative work as an 
architectural photographer. This expansion allows me to create 
responsive, user-friendly websites that reflect both functionality and aesthetics.</p>
</div>

        {/* Multiple positions at the same company */}
    <div className="ml-2 border-l border-neutral-400/60 pl-4">
        <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Web Development</h4>
            </div>
            <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
              <p>
I build responsive, mobile-first websites using HTML5, CSS, 
Tailwind CSS, and React. My work is component-based and structured 
for scalability using Next.js. I focus on creating clean, 
fast user interfaces with accessible design practices.</p>
            </ul>
          
        <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">UI/UX Design</h4>
            </div>
            <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
              <p>
I apply user-centered design principles to create seamless and 
engaging digital experiences. I stay current with the latest UI 
and UX trends and apply that knowledge through wireframing, prototyping, 
usability testing, responsive design, and design systems. 
My projects also include work with color theory, typography, 
accessibility, microinteractions, layout, and visual hierarchy.</p>
            </ul>
          
        <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">SEO</h4>
            </div>
            <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
              <p>
I work on improving website visibility using content creation, 
blogging, and keyword research. I set up and optimize e-commerce 
tracking, affiliate integration, and analytics tools for performance 
insights. My focus is on long-term organic growth through clean 
SEO structure, smart content, and strategic on-page updates.</p>
            </ul>

        <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium">Graphic Design</h4>
            </div>
            <ul className="mt-2 list-disc space-y-1 text-md text-neutral-400 mb-2">
              <p>
I work with Photoshop daily and have over 15 years of experience 
creating digital and print-ready designs. My work includes branding, 
logos, custom icons, infographics, motion graphics, posters, 
and social media content. I also handle developer handoff, 
file organization, design annotations, brand kits, and asset 
exports for both web and print.</p>
            </ul>

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
        Responsible for children aged 2 to 12, including planning activities 
        suited to each age group. Also managed digital tasks such as organizing 
        lists, handling documentation, and creating marketing materials.</p>
        </div>
    </div>

    {/* Third Company */}
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
Helped launch a project to connect job-seeking individuals with 
companies through a custom-built system. Managed website, 
social media, and marketing material for various events.</p>
        </div>
    </div>
</div>
  )
}

