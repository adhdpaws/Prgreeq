// Hero Section Configuration - Central place to modify content
export const heroConfig = {
  badge: {
    text: "FOR BUSINESSES",
  },

  headline: "Innovate Today, Lead Tomorrow.",
  subtitle: "Navigate the future with our innovative consulting, where today's breakthroughs become the leadership strategies propelling your business into tomorrow's forefront.",
  
  cta: {
    primary: {
      text: "Our Services",
      url: "#services",
    },
    secondary: {
      text: "About Us",
      url: "#about",
    },
  },
}

// Styling Configuration - Central place to modify styling
export const heroStyles = {
  container: "w-full border-b border-border flex flex-col justify-center items-stretch min-h-[600px] sm:min-h-[700px] md:min-h-[800px]",
  
  contentSection: {
    wrapper: "flex-1 flex flex-col",
    content: "flex-1 px-6 sm:px-12 md:px-16 lg:px-24 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-0 flex flex-col justify-center items-center sm:items-start gap-6 sm:gap-8",
    badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase w-fit rounded-none align-self: center",
    headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight font-sans max-w-[900px] text-center sm:text-left",
    subtitle: "text-[#3D3935] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans max-w-[700px] text-center sm:text-left",
    ctaGroup: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4",
    primaryButton: "inline-flex px-8 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-4.5 bg-[#2D2926] hover:bg-[oklch(0.586_0.253_17.585)] text-white text-sm sm:text-base font-medium leading-6 font-sans transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[oklch(0.586_0.253_17.585)] min-w-[140px] sm:min-w-[160px] rounded-none",
    secondaryButton: "inline-flex px-8 sm:px-9 md:px-10 py-3.5 sm:py-4 md:py-4.5 bg-transparent border border-[#2D2926] hover:bg-[#2D2926] text-[#2D2926] hover:text-white text-sm sm:text-base font-medium leading-6 font-sans transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2D2926] min-w-[140px] sm:min-w-[160px] rounded-none",
  },

  decorativePattern: {
    container: "w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden",
    wrapper:
      "w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start",
    line: "self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]",
  },
}
