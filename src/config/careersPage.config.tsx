export const careersPageConfig = {
  hero: {
    badge: "CAREERS",
    headline: "Join our Team. Build Your Future.",
    subtitle: "Discover a world of possibilities. Elevate your career with us — a place where passion meets purpose.",
  },
  jobs: [
    {
      id: "marketing-specialist",
      title: "Marketing Specialist",
      description: "Craft compelling campaigns, drive brand presence, and shape our market position with strategic marketing initiatives.",
      type: "FULL TIME",
      location: "REMOTE",
    },
    {
      id: "software-engineer",
      title: "Software Engineer",
      description: "Innovate and develop cutting-edge solutions, contributing to the technological backbone of our forward-thinking projects.",
      type: "PART TIME",
      location: "BERLIN",
    },
    {
      id: "customer-success-manager",
      title: "Customer Success Manager",
      description: "Foster client relationships, ensuring satisfaction and success through personalized support and strategic guidance.",
      type: "FULL TIME",
      location: "NEW YORK",
    },
    {
      id: "financial-analyst",
      title: "Financial Analyst",
      description: "Analyze fiscal data, provide insights, and contribute to the financial health and growth of our organization.",
      type: "FULL TIME",
      location: "REMOTE",
    },
  ],
}

export const careersPageStyles = {
  hero: {
    container: "w-full border-b border-border flex flex-col justify-center items-stretch py-16 sm:py-6 md:py-8 lg:py-12",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center sm:items-start gap-6 sm:gap-8",
    badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase rounded-none",
    headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight font-sans max-w-4xl text-center sm:text-left",
    subtitle: "text-[#3D3935] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl text-center sm:text-left",
  },
  jobs: {
    container: "w-full border-t border-border px-4 sm:px-6 md:px-12 lg:px-24",
    stickyHeader: "bg-white w-full lg:w-[240px] flex-shrink-0 py-6 lg:py-12 lg:pr-12 border-b lg:border-b-0 border-border",
    headerText: "text-[#525252] text-xs sm:text-sm font-semibold leading-tight font-sans tracking-wider uppercase",
    listContainer: "flex-1 py-6 lg:py-12 lg:pl-12 lg:border-l border-border",
    jobCard: {
      container: "border-b border-border p-6 sm:p-8 md:p-10 lg:p-12 hover:bg-[#FAFAFA] transition-colors duration-200 cursor-pointer group last:border-b-0",
      content: "flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6 lg:gap-8",
      leftSection: "flex-1 flex flex-col gap-3 sm:gap-4",
      title: "text-[#2D2926] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight tracking-tight font-sans group-hover:text-[#1D1916]",
      description: "text-[#666666] text-sm sm:text-base leading-relaxed font-sans max-w-2xl",
      rightSection: "flex items-center gap-2 sm:gap-3",
      metaGroup: "flex gap-2 sm:gap-3 items-center",
      badge: "inline-flex px-3 py-1.5 bg-[#F5F5F3] text-[#2D2926] text-xs sm:text-sm font-medium leading-tight font-sans tracking-wide uppercase whitespace-nowrap rounded",
      arrow: "inline-flex items-center justify-center h-6 w-8 bg-[#F5F5F3] rounded text-[#2D2926] transition-all duration-200 group-hover:bg-[#2D2926] group-hover:text-white",
    },
  },
}
