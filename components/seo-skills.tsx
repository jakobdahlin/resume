"use client"

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"

interface SeoProps {
  name: string
  category: string
}

const skills: SeoProps[] = [
  // Content Creation & Blogging
  { name: "SEO Writing", category: "content" },            // Writing content a certain way that improves SEO
  { name: "Wordpress", category: "content" },              // Website manager - good for SEO 
  { name: "Product Reviews", category: "content" },        // Inform readers about a product's pros/cons to move to purchase
  { name: "Buying Guides", category: "content" },          // A detailed article that compares multiple products  
  { name: "Affiliate Linking", category: "content" },      // Organizing articles with proper headings, sections, and hierarchy
  { name: "Article Updates", category: "content" },        // Refreshing content with new information, keywords, or formatting
  { name: "Headline Writing", category: "content" },       // Writing titles that grab attention and include keywords to boost SEO and click-through rates.

    // SEO & Keyword Strategy
    { name: "Keyword Research", category: "strategy" },    // Identifying the search terms people use to increase search visibility
    { name: "On-Page SEO", category: "strategy" },         // Optimize things on page such as titles, headings, meta des, content and image alt text
    { name: "Site Speed", category: "strategy" },          // Knowing what makes a site fast and what to avoid
    { name: "Search Console", category: "strategy" },      // Monitor a site's presence on Google, tran perfoemance and indexing
    { name: "Content Strategy", category: "strategy" },    // Prior planning of content creation, goals, targeted audience
    { name: "SEO Tools", category: "strategy" },           // Includes keyword reserach, analytics and content optimization
    { name: "Competitor Analysis", category: "strategy" }, // Studying other sites in same niche to learn what keywords etc. they use so I can outperform

  // Affiliate Integration & Tracking
  { name: "Link Management", category: "inttrack" },       // Organizing, monitoring, and optimizing affiliate links to ensure proper tracking, clean URLs, and working redirects
  { name: "Affiliate Platforms", category: "inttrack" },   // Connects publishers with brands, generate affiliate links, track performance, and receive commissions
  { name: "CTA Design", category: "inttrack" },            // Focuses on creating buttons or links with persuasive text and visual style that encourage users to take a specific action
  { name: "Tracking Codes", category: "inttrack" },        // Snippets in URLs or scripts that monitor user behavior and track conversions
  { name: "Link Cloaking", category: "inttrack" },         // Hides long or messy URLs
  { name: "A/B Testing", category: "inttrack" },           // Comparing two versions of something to see which performs better in terms of clicks/conversions
  { name: "FTC Compliance", category: "inttrack" },        // Means disclosing affiliate relationships so users know you may earn a commission from links, as required by law

  // E-Commerce & Website Building
  { name: "Shopify", category: "commerce" },               // An e-commerce platform that lets you build and manage an online store
  { name: "WooCommerce", category: "commerce" },           // A WordPress plugin that turns your site into an online store, with full control over products, payments, and shipping
  { name: "Landing Pages", category: "commerce" },         // Single page to make a user take an action
  { name: "Mobile Design", category: "commerce" },         // Creating layouts, text sizes, and elements that work well on smaller screens
  { name: "Product Pages", category: "commerce" },         // Includes key details about an item—like images, price, description, reviews
  { name: "Wordpress Elementor", category: "commerce" },   // A drag-and-drop page builder plugin that lets you create custom layouts and designs in WordPress
  { name: "Niche Research", category: "commerce" },        // Finding a specific, profitable topic or market to target, based on demand, competition, and monetization potential
  { name: "Payment Setup", category: "commerce" },         // Integrating secure checkout options like credit cards, PayPal, or Stripe

  // Analytics & Optimization
  { name: "Google Analytics", category: "optimization" },  // Helps track how users interact with your site—like page views, traffic sources, and conversions
  { name: "Link Clicks", category: "optimization" },       // Shows how many times users clikced specific links or buttons
  { name: "Conversion Rates", category: "optimization" },  // The percentage of users who complete a desired action (sign-up, purchase etc.)
  { name: "Traffic Sources", category: "optimization" },   // Shows where users come from (Google Search Console have this)
  { name: "CTR Boosting", category: "optimization" },      // Improve Click-Through-Rate by using good headlines, meta desc, CTAs and viauals
  { name: "Heatmaps", category: "optimization" },          // They visually show where users click, scroll, or hover on a page, helping you understand how they interact with your site
  { name: "Session Tracking", category: "optimization" },  // Is a recorded session where I can view what a user did on the site
  { name: "Keyword Tracking", category: "optimization" },  // Monitors how specific keywords rank in search results over time so you can measure SEO performance
]

export function SeoSkills() {
  // Group skills by category
  const contentSkills = skills.filter((skill) => skill.category === "content")
  const strategySkills = skills.filter((skill) => skill.category === "strategy")
  const inttrackSkills = skills.filter((skill) => skill.category === "inttrack")
  const commerceSkills = skills.filter((skill) => skill.category === "commerce")
  const optimizationSkills = skills.filter((skill) => skill.category === "optimization")

  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-bold">Content Creation & Blogging</h3>
        <div className="flex flex-wrap gap-3">
  {contentSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
    hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out"
  >
    <div
      className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200"
    >
        {skill.name}
      </div>
    </div>
  ))}
</div>
    </div>

      <div>
        <h3 className="mb-3 text-lg font-bold">SEO & Keyword Strategy</h3>
        <div className="flex flex-wrap gap-3">
  {strategySkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
    hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out"
  >
    <div
      className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-bold">Affiliate Integration & Tracking</h3>
        <div className="flex flex-wrap gap-3">
  {inttrackSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
    hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out"
  >
    <div
      className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-bold">E-Commerce & Website Building</h3>
        <div className="flex flex-wrap gap-3">
  {commerceSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
    hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out"
  >
    <div
      className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200"
    >
      {skill.name}
    </div>
  </div>
  ))}
</div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-bold">Analytics & Optimization</h3>
        <div className="flex flex-wrap gap-3">
  {optimizationSkills.map((skill) => (
    <div
    key={skill.name}
    className="p-[1px] rounded-xl border border-neutral-400/60 hover:border-white hover:bg-white/20
    hover:shadow-lg hover:shadow-white/50 transform duration-200 ease-in-out"
  >
    <div
      className="px-2 py-1 rounded-xl text-neutral-400 hover:text-white transition-colors duration-200"
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

