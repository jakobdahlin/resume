import { Progress } from "@/components/ui/progress"

interface SeoProps {
  name: string
  category: string
}

const skills: SeoProps[] = [
  // Content Creation & Blogging
  { name: "SEO Writing", category: "content" },
  { name: "Wordpress", category: "content" },
  { name: "Product Reviews", category: "content" },
  { name: "Buying Guides", category: "content" },
  { name: "Affiliate Linking", category: "content" },
  { name: "Content Structure", category: "content" },
  { name: "Article Updates", category: "content" },
  { name: "Headling Writing", category: "content" },

    // SEO & Keyword Strategy
    { name: "Keyword Research", category: "strategy" },
    { name: "On-Page SEO", category: "strategy" },
    { name: "Off-Page SEO", category: "strategy" },
    { name: "Site Speed", category: "strategy" },
    { name: "Search Console", category: "strategy" },
    { name: "Content Strategy", category: "strategy" },
    { name: "SEO Tools", category: "strategy" },
    { name: "Competitor Analysis", category: "strategy" },

  // Affiliate Integration & Tracking
  { name: "Link Management", category: "inttrack" },
  { name: "Affiliate Platforms", category: "inttrack" },
  { name: "CTA Design", category: "inttrack" },
  { name: "Tracking Codes", category: "inttrack" },
  { name: "Link Cloaking", category: "inttrack" },
  { name: "A/B Testing", category: "inttrack" },
  { name: "FTC Compliance", category: "inttrack" },
  { name: "UTM Tags", category: "inttrack" },

  // E-Commerce & Website Building
  { name: "Shopify", category: "commerce" },
  { name: "WooCommerce", category: "commerce" },
  { name: "Landing Pages", category: "commerce" },
  { name: "Mobile Desing", category: "commerce" },
  { name: "Product Pages", category: "commerce" },
  { name: "Wordpress Elementor", category: "commerce" },
  { name: "Niche Research", category: "commerce" },
  { name: "Payment Setup", category: "commerce" },

  // Analytics & Optimization
  { name: "Google Analytics", category: "optimization" },
  { name: "Link Clicks", category: "optimization" },
  { name: "Conversion Rates", category: "optimization" },
  { name: "Traffic Sources", category: "optimization" },
  { name: "CTR Boosting", category: "optimization" },
  { name: "Heatmaps", category: "optimization" },
  { name: "Session Tracking", category: "optimization" },
  { name: "Keyword Tracking", category: "optimization" },
]

export function SeoSkills() {
  // Group skills by category
  const contentSkills = skills.filter((skill) => skill.category === "content")
  const strategySkills = skills.filter((skill) => skill.category === "strategy")
  const inttrackSkills = skills.filter((skill) => skill.category === "inttrack")
  const commerceSkills = skills.filter((skill) => skill.category === "commerce")
  const optimizationSkills = skills.filter((skill) => skill.category === "optimization")

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-medium">Content Creation & Blogging</h3>
        <div className="flex flex-wrap gap-3">
  {contentSkills.map((skill) => (
    <div
      key={skill.name}
      className="p-[1px] rounded-full bg-gradient-to-r from-black/0 via-neutral-500/30 to-black/0"
    >
      <div
        className="px-4 py-1 rounded-full bg-black/50 text-white/50 hover:text-white 
        hover:bg-black/0 transition-colors duration-200 "
      >
        {skill.name}
      </div>
    </div>
  ))}
</div>
    </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">SEO & Keyword Strategy</h3>
        <div className="flex flex-wrap gap-3">
  {strategySkills.map((skill) => (
    <div
      key={skill.name}
      className="p-[1px] rounded-full bg-gradient-to-r from-black/0 via-neutral-500/30 to-black/0"
    >
      <div
        className="px-4 py-1 rounded-full bg-black/50 text-white/50 hover:text-white 
        hover:bg-black/0 transition-colors duration-200 "
      >
        {skill.name}
      </div>
    </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Affiliate Integration & Tracking</h3>
        <div className="flex flex-wrap gap-3">
  {inttrackSkills.map((skill) => (
    <div
      key={skill.name}
      className="p-[1px] rounded-full bg-gradient-to-r from-black/0 via-neutral-500/30 to-black/0"
    >
      <div
        className="px-4 py-1 rounded-full bg-black/50 text-white/50 hover:text-white 
        hover:bg-black/0 transition-colors duration-200 "
      >
        {skill.name}
      </div>
    </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">E-Commerce & Website Building</h3>
        <div className="flex flex-wrap gap-3">
  {commerceSkills.map((skill) => (
    <div
      key={skill.name}
      className="p-[1px] rounded-full bg-gradient-to-r from-black/0 via-neutral-500/30 to-black/0"
    >
      <div
        className="px-4 py-1 rounded-full bg-black/50 text-white/50 hover:text-white 
        hover:bg-black/0 transition-colors duration-200 "
      >
        {skill.name}
      </div>
    </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-medium">Analytics & Optimization</h3>
        <div className="flex flex-wrap gap-3">
  {optimizationSkills.map((skill) => (
    <div
      key={skill.name}
      className="p-[1px] rounded-full bg-gradient-to-r from-black/0 via-neutral-500/30 to-black/0"
    >
      <div
        className="px-4 py-1 rounded-full bg-black/50 text-white/50 hover:text-white 
        hover:bg-black/0 transition-colors duration-200 "
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

