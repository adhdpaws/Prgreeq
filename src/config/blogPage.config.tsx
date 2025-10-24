export const blogPageConfig = {
  hero: {
    badge: "OUR BLOG",
    headline: "Latest News & Insights",
    subtitle: "Stay updated with the latest trends, tips, and insights from our team of experts. Explore articles covering industry news, best practices, and innovative solutions.",
  },
  filter: {
    categories: [
      { id: "all", label: "All" },
      { id: "creative-strategy", label: "Creative Strategy" },
      { id: "digital-innovation", label: "Digital Innovation" },
      { id: "brand-storytelling", label: "Brand & Storytelling" },
      { id: "technology", label: "Technology" },
      { id: "design", label: "Design" },
    ],
  },
  posts: [
    {
      image: "/blog/thumbnail.png",
      title: "The Finnish Institute of UK & Ireland",
      description: "Transforming how the Finnish Institute of UK & Ireland connect communities across borders.",
      category: "Arts & Heritage",
      slug: "finnish-institute-uk-ireland",
    },
    {
      image: "/blog/thumbnail.png",
      title: "Catalytic Climate Finance Facility",
      description: "Mobilising private capital to accelerate climate solutions where they're needed most.",
      category: "Financial Services",
      slug: "catalytic-climate-finance",
    },
    {
      image: "/blog/thumbnail.png",
      title: "Instant Aid",
      description: "Building trust and credibility for continued action on emerging crises across the globe.",
      category: "Nonprofit & Social Causes",
      slug: "instant-aid",
    },
  ],
}

export const blogPageStyles = {
  hero: {
    container: "w-full pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pt-24",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left",
    badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase rounded-none",
    headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight font-sans",
    subtitle: "text-[#525252] text-sm sm:text-base leading-relaxed font-sans max-w-2xl",
  },
  filter: {
    container: "w-full py-6 sm:py-8 px-4 sm:px-6 md:px-12 lg:px-24",
    mobileWrapper: "sm:hidden w-full flex items-center justify-center gap-2",
    mobileSelect: "flex-1 max-w-[280px] border-[#E5E5E5] rounded-md focus:ring-[#2D2926] text-[#2D2926] font-medium",
    filterList: "flex flex-wrap items-center gap-6 sm:gap-8 border-b border-[#E5E5E5] w-fit",
    filterButton: "pb-5 text-sm text-[#525252] hover:text-[#2D2926] transition-all duration-200 border-b-2 border-transparent hover:border-[#E5E5E5] font-normal",
    filterButtonActive: "pb-5 text-sm text-[#2D2926] border-b-2 border-[#2D2926] font-semibold",
    moreButton: "pb-5 text-sm text-[#525252] hover:text-[#2D2926] transition-colors duration-200 font-normal",
  },
  grid: {
    container: "w-full pb-12 sm:pb-16 md:pb-20",
    grid: "w-full px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12",
    card: {
      card: "group flex flex-col gap-4 hover:opacity-80 transition-opacity duration-300",
      imageWrapper: "relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F3]",
      image: "object-cover group-hover:scale-105 transition-transform duration-500",
      content: "flex flex-col gap-3",
      title: "text-[#2D2926] text-xl sm:text-2xl font-semibold leading-tight tracking-tight font-sans",
      description: "text-[#525252] text-sm sm:text-base leading-relaxed font-sans",
      category: "inline-flex px-3 py-1 bg-transparent border border-[#E5E5E5] text-[#525252] text-xs font-medium font-sans rounded-full w-fit",
    },
  },
}
