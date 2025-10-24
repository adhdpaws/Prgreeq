/**
 * Navbar Configuration - Central place to modify navbar content and styling
 */

export const navbarConfig = {
  brand: {
    name: "Geeq",
    href: "/",
  },
  
  // Main navigation items
  navigation: [
    {
      label: "Solutions",
      href: "#",
      dropdownItems: [
        { label: "Academia", href: "#academia" },
        { label: "Publishers", href: "#publishers" },
        { label: "Corporates", href: "#corporates" },
        { label: "EdTech Companies", href: "#edtech" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      dropdownItems: [
        { label: "eLearning Development", href: "/services#elearning" },
        { label: "Accessibility Services", href: "/services#accessibility" },
        { label: "Localisation", href: "/services#localisation" },
        { label: "Multimedia Content", href: "/services#multimedia" },
        { label: "Software Solutions", href: "/services#software" },
        { label: "Mentoring", href: "/services#mentoring" },
        { label: "Skilling", href: "/services#skilling" },
      ],
    },
    {
      label: "Company",
      href: "/about",
      dropdownItems: [
        { label: "About Us", href: "/about" },
        { label: "Our Approach", href: "/about#approach" },
        { label: "Impact & Case Studies", href: "/about#impact" },
        { label: "Careers", href: "/about#careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      label: "Resources",
      href: "/blog",
      dropdownItems: [
        { label: "Blog", href: "/blog" },
        { label: "Events", href: "/blog#events" },
        { label: "Help Center", href: "/blog#help" },
        { label: "FAQs", href: "/blog#faqs" },
      ],
    },
  ],
  
  // CTA button
  cta: {
    label: "Get Started",
    href: "/contact",
  },
}

// Navbar Styling Configuration
export const navbarStyles = {
  // Main container
  container: "w-full border-b border-[#E5E5E5] bg-white sticky top-0 z-50",
  wrapper: "w-full px-4 sm:px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between",
  
  // Brand/Logo
  brand: {
    link: "text-[#2D2926] text-xl sm:text-2xl font-semibold leading-tight font-sans hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
  },
  
  // Desktop Navigation
  desktop: {
    nav: "hidden lg:flex items-center gap-8",
    navItem: "relative group",
    navLink: "text-[#2D2926] text-sm font-medium font-sans hover:text-[#525252] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926] py-2",
    dropdown: {
      container: "absolute top-full left-0 mt-2 w-56 bg-white border border-[#E5E5E5] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
      item: "block px-4 py-3 text-[#2D2926] text-sm font-normal font-sans hover:bg-[#F5F5F5] transition-colors first:rounded-t-lg last:rounded-b-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
    },
  },
  
  // CTA Button
  cta: {
    desktop: "hidden lg:block bg-[#2D2926] text-white px-6 py-2.5 text-sm font-medium font-sans hover:bg-[#1D1916] transition-colors rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
    mobile: "bg-[#2D2926] text-white px-6 py-2.5 text-sm font-medium font-sans hover:bg-[#1D1916] transition-colors rounded-none w-full text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
  },
  
  // Mobile Menu
  mobile: {
    button: "lg:hidden p-2 text-[#2D2926] hover:bg-[#F5F5F5] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
    overlay: "fixed inset-0 bg-black/50 z-40 lg:hidden",
    panel: "fixed top-0 right-0 h-full w-full sm:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto",
    header: "flex items-center justify-between p-4 border-b border-[#E5E5E5]",
    brandText: "text-[#2D2926] text-xl font-semibold leading-tight font-sans",
    closeButton: "p-2 text-[#2D2926] hover:bg-[#F5F5F5] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
    nav: "flex flex-col p-4 gap-2",
    navItem: "flex flex-col",
    navButton: "w-full flex items-center justify-between px-4 py-3 text-[#2D2926] text-base font-medium font-sans hover:bg-[#F5F5F5] transition-colors rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
    dropdown: {
      container: "flex flex-col mt-1 ml-4 border-l-2 border-[#E5E5E5] pl-4 gap-1",
      item: "px-4 py-2.5 text-[#525252] text-sm font-normal font-sans hover:bg-[#F5F5F5] hover:text-[#2D2926] transition-colors rounded-md text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D2926]",
    },
    ctaContainer: "p-4 border-t border-[#E5E5E5] mt-auto",
  },
}
