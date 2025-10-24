export const aboutPageConfig = {
  hero: {
    badge: "ABOUT US",
    headline: "Building brands that matter.",
    subtitle: "We're a strategic branding agency focused on creating meaningful connections between brands and their audiences.",
  },
  values: {
    badge: "OUR VALUES",
    items: [
      {
        title: "Building Trust, Not Pitching.",
        description: "We conduct market research to understand our clients' target audience, competitors, and industry trends. This research informs the brand strategy and positioning, helping our clients define their unique brand message.",
      },
      {
        title: "Bold Moves, Big Impact.",
        description: "We help businesses define their unique brand positioning and messaging. We identify the brand's unique selling proposition, value proposition and key messaging, which then guide all branding efforts, including visual identity and marketing communications.",
      },
      {
        title: "Building Strong Partnerships.",
        description: "We assist our clients in organizing and structuring their portfolio of brands and sub-brands. We identify the relationships between different brands and create guidelines for their use and communication, ensuring a cohesive and consistent branding strategy.",
      },
    ],
  },
  stats: [
    {
      number: "200+",
      label: "CLIENTS",
      description: "Over 200 satisfied clients trust our expertise and exceptional services.",
      bgColor: "bg-[#F0EDE8]",
    },
    {
      number: "300+",
      label: "PROJECTS",
      description: "We've successfully completed over 300 projects, delivering outstanding results every time.",
      bgColor: "bg-[#FAFAFA]",
    },
    {
      number: "100%",
      label: "HAPPY CLIENTS",
      description: "Our focus on client satisfaction ensures a 100% happiness rate with our services.",
      bgColor: "bg-[#F0EDE8]",
    },
    {
      number: "110%",
      label: "COMMITMENT",
      description: "With our unwavering dedication, we give 110% commitment to every project we undertake.",
      bgColor: "bg-[#FAFAFA]",
    },
    {
      number: "1 Million",
      label: "FOLLOWER",
      description: "Join our community of 1 million loyal followers and be part of something extraordinary.",
      bgColor: "bg-[#FFF9E6]",
      fullWidth: true,
    },
  ],
  contact: {
    badge: "CONTACT",
    headline: "Let's start building your brand's unique story together.",
    subtitle: "Want to see what a difference a strong brand can make? Request a consultation today.",
    buttonText: "Get in Touch",
    buttonHref: "#contact",
  },
}

export const aboutPageStyles = {
  hero: {
    container: "w-full border-b border-border flex flex-col justify-center items-stretch py-16 sm:py-6 md:py-8 lg:py-12",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center sm:items-start gap-6 sm:gap-8",
    badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase rounded-none",
    headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight font-sans max-w-4xl text-center sm:text-left",
    subtitle: "text-[#3D3935] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl text-center sm:text-left",
  },
  values: {
    container: "w-full border-b border-border flex justify-start items-start py-4 sm:py-20 md:py-24 lg:py-28",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex lg:flex-row flex-col gap-4 sm:gap-16 md:gap-20 items-start",
    badge: "text-[#666666] text-xs sm:text-sm font-semibold leading-tight font-sans tracking-wider uppercase w-full lg:w-[240px] flex-shrink-0 pt-4",
    valuesList: {
      container: "flex-1 flex flex-col",
      item: "flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-10 py-6 border-b border-[#E5E5E5] last:border-b-0",
      title: "text-[#2D2926] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight font-sans w-full sm:w-[280px] md:w-[320px] lg:w-[360px] flex-shrink-0",
      description: "text-[#666666] text-sm sm:text-base leading-relaxed font-sans flex-1 pt-1",
    },
  },
  stats: {
    container: "w-full border-b border-border py-16 sm:py-20 md:py-24 lg:py-28",
    grid: "w-full px-4 sm:px-6 md:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10",
    card: "p-8 sm:p-10 md:p-12 flex flex-col gap-4 sm:gap-6",
    fullWidthCard: "p-8 sm:p-10 md:p-12 flex flex-col gap-4 sm:gap-6 sm:col-span-2",
    number: "text-[#2D2926] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-tight tracking-tight font-sans",
    label: "text-[#2D2926] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight font-sans tracking-wider uppercase",
    description: "text-[#666666] text-sm sm:text-base leading-relaxed font-sans",
  },
  contact: {
    container: "w-full bg-[#F5F5F3] py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center gap-8 sm:gap-10 md:gap-12",
    badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase rounded-none",
    headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight tracking-tight font-sans text-center max-w-5xl",
    subtitle: "text-[#666666] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans text-center max-w-2xl",
    button: "bg-[#2D2926] text-white px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#1D1916] transition-colors duration-200 rounded-full",
  },
}
