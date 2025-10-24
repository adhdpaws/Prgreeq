// Credibility Section Configuration - Central place to modify content
export const credibilityConfig = {
  badge: {
    text: "Trusted Partners",
    icon: (
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
        <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
        <rect x="2" y="4" width="1" height="1" fill="#37322F" />
        <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
        <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
        <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
        <rect x="8" y="2" width="1" height="1" fill="#37322F" />
        <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
        <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
        <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
        <rect x="8" y="5" width="1" height="1" fill="#37322F" />
        <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
      </svg>
    ),
  },

  header: {
    title: "OUR CLIENTS",
    subtitle: "At PRGEEQ, we strive to be of value, rather to be a success! Our greatest assets' are our Clients!"
  },

  // Partner/Client logos
  partners: [
    {
      name: "University of Excellence",
      logo: "/next.svg",
      url: "#",
    },
    {
      name: "Global Learning Institute",
      logo: "/next.svg",
      url: "#",
    },
    {
      name: "Education First",
      logo: "/next.svg",
      url: "#",
    },
    {
      name: "Knowledge Academy",
      logo: "/next.svg",
      url: "#",
    },
    {
      name: "Future Skills",
      logo: "/next.svg",
      url: "#",
    },
    {
      name: "Learning Hub",
      logo: "/next.svg",
      url: "#",
    },
    {
      name: "Smart Education",
      logo: "/next.svg",
      url: "#",
    },
    {
      name: "Digital Campus",
      logo: "/next.svg",
      url: "#",
    },
  ],

  grid: {
    mobileCols: 2,
    desktopCols: 4,
  },
}

// Styling Configuration - Central place to modify styling
export const credibilityStyles = {
  container: "w-full border-b border-border flex flex-col justify-center items-center",

  headerSection: {
    container:
      "self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-border flex justify-center items-center gap-6",
    innerWrapper:
      "w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4",
    title:
      "w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#2D2926] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight",
    subtitle:
      "self-stretch text-center text-[#3D3935] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans",
  },

  badge: {
    container:
      "inline-flex px-2 py-1 bg-white/80 backdrop-blur-sm rounded-full border border-border justify-center items-center gap-1.5",
    icon: "w-3 h-3 relative",
    text: "text-center text-[#37322F] text-xs font-medium leading-[18px] font-sans",
  },

  logoGrid: {
    container: "self-stretch border-border flex justify-center items-start border-t border-b-0",
    gridWrapper:
      "flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-border",
    logoItem:
      "h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex flex-col justify-center items-center gap-2 transition-colors hover:bg-[rgba(73,66,61,0.02)] group relative",
    logoIcon:
      "w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 relative shadow-[0px_-4px_8px_rgba(255,255,255,0.64)_inset] overflow-hidden rounded-full",
    logoImage: "w-full h-full object-contain",
    logoName:
      "absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center text-[#37322F] text-xs sm:text-sm font-medium leading-tight font-sans px-2",
  },

  decorativePattern: {
    container: "w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden",
    wrapper:
      "w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start",
    line: "self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]",
  },
}
