// Services Section Configuration - Central place to modify content
export const servicesConfig = {
  badge: {
    text: "Our Services",
    icon: (
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="3" height="3" stroke="#37322F" strokeWidth="1" fill="none" />
        <rect x="5" y="1" width="3" height="3" stroke="#37322F" strokeWidth="1" fill="none" />
        <rect x="9" y="1" width="2" height="3" stroke="#37322F" strokeWidth="1" fill="none" />
        <rect x="1" y="5" width="3" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
        <rect x="5" y="5" width="3" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
        <rect x="9" y="5" width="2" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
      </svg>
    ),
  },

  header: {
    title: "Comprehensive Educational Solutions",
    subtitle: "Empowering educators and learners with innovative technology solutions designed for the modern classroom.",
  },

  // Service cards
  services: [
    {
      id: "elearning",
      title: "eLearning",
      description:
        "We create engaging and interactive eLearning solutions that enhance learning outcomes and drive educational success.",
      link: {
        text: "About eLearning",
        url: "/services/elearning",
      },
    },
    {
      id: "accessibility",
      title: "Accessibility",
      description:
        "We ensure your educational content is accessible to all learners by implementing WCAG standards and inclusive design practices.",
      link: {
        text: "About Accessibility",
        url: "/services/accessibility",
      },
    },
    {
      id: "localisation",
      title: "Localisation",
      description:
        "We adapt your educational content for global audiences with professional translation and cultural localization services.",
      link: {
        text: "About Localisation",
        url: "/services/localisation",
      },
    },
    {
      id: "multimedia",
      title: "Multimedia",
      description:
        "We produce high-quality multimedia content including videos, animations, and interactive media for engaging learning experiences.",
      link: {
        text: "About Multimedia",
        url: "/services/multimedia",
      },
    },
    {
      id: "software",
      title: "Software",
      description:
        "We develop custom educational software solutions and learning management systems tailored to your specific needs.",
      link: {
        text: "About Software",
        url: "/services/software",
      },
    },
    {
      id: "mentoring",
      title: "Mentoring",
      description:
        "We provide expert mentoring programs to guide educators and learners in achieving their professional development goals.",
      link: {
        text: "About Mentoring",
        url: "/services/mentoring",
      },
    },
    {
      id: "skilling",
      title: "Skilling",
      description:
        "We offer comprehensive skill development programs designed to empower individuals with in-demand competencies.",
      link: {
        text: "About Skilling",
        url: "/services/skilling",
      },
    },
  ],
}

// Styling Configuration - Central place to modify styling
export const servicesStyles = {
  container: "w-full border-b border-border flex flex-col justify-center items-center",

  headerSection: {
    container:
      "self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-border flex justify-center items-center gap-6",
    innerWrapper:
      "w-full max-w-full sm:max-w-[586px] px-2 sm:px-4 md:px-6 py-4 sm:py-5 overflow-hidden flex flex-col justify-start items-center gap-3 sm:gap-4",
    title:
      "w-full block text-center text-[#2D2926] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight px-2",
    subtitle:
      "w-full block text-center text-[#3D3935] text-sm sm:text-base font-normal leading-relaxed sm:leading-6 md:leading-7 font-sans break-words px-2",
  },

  badge: {
    container:
      "inline-flex px-2 py-1 bg-white/80 backdrop-blur-sm border border-border justify-center items-center gap-1.5",
    icon: "w-3 h-3 relative",
    text: "text-center text-[#37322F] text-xs font-medium leading-[18px] font-sans",
  },

  servicesGrid: {
    container: "self-stretch flex justify-center items-start py-8 sm:py-12 md:py-16",
    gridWrapper:
      "w-full px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 auto-cols-fr",
  },

  serviceCard: {
    container:
      "min-h-[200px] sm:min-h-[260px] p-5 sm:p-6 md:p-7 bg-[#F8F7F6] flex flex-col justify-between items-start gap-3 sm:gap-5 transition-all duration-200 hover:bg-[#F0EEEC] group",
    contentWrapper: "flex flex-col justify-start items-start gap-2 sm:gap-3",
    title:
      "text-[#2D2926] text-base sm:text-lg md:text-xl font-semibold leading-tight font-sans",
    description:
      "text-[#3D3935] text-xs sm:text-sm md:text-base font-normal leading-5 sm:leading-6 font-sans",
    link: "inline-flex items-center gap-1.5 text-[#2D2926] text-xs sm:text-sm font-medium leading-5 transition-colors group-hover:text-[oklch(0.586_0.253_17.585)] underline decoration-1 underline-offset-4",
    linkArrow: "w-3.5 h-3.5 transition-transform group-hover:translate-x-1",
  },

  decorativePattern: {
    container: "w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden",
    wrapper:
      "w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start",
    line: "self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]",
  },
}
