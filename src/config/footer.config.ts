import { BookOpen, Calendar, HelpCircle, MessageSquare, Twitter, Linkedin, Github } from "lucide-react"

// Footer Configuration - Central place to modify footer content
export const footerConfig = {
  brand: {
    name: "Geeq",
    tagline: "Transforming Education Through Innovation",
  },
  
  socialLinks: [
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
      ariaLabel: "Follow us on Twitter",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      ariaLabel: "Connect with us on LinkedIn",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      ariaLabel: "View our GitHub",
    },
  ],
  
  navigationSections: [
    {
      title: "Solutions",
      links: [
        { label: "Academia", href: "/services" },
        { label: "Publishers", href: "/services" },
        { label: "Corporates", href: "/services" },
        { label: "EdTech Companies", href: "/services" },
        { label: "eLearning Development", href: "/services" },
        { label: "Accessibility Services", href: "/services" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "GeeqLearn LMS", href: "/services" },
        { label: "MobiGeeq App", href: "/services" },
        { label: "Multimedia Content", href: "/services" },
        { label: "Software Solutions", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Approach", href: "/#services" },
        { label: "Impact", href: "/blog" },
        { label: "Careers", href: "/contact" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog", icon: BookOpen },
        { label: "Events", href: "/blog", icon: Calendar },
        { label: "Help Center", href: "/contact", icon: HelpCircle },
        { label: "FAQs", href: "/#faq", icon: MessageSquare },
      ],
    },
  ],
}

// Styling Configuration - Central place to modify styling
export const footerStyles = {
  container: "w-full flex flex-col justify-start items-start border-t border-border",
  
  mainContent: "self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-0 pt-0",
  
  brandSection: {
    container: "h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8 md:border-r border-border md:flex-2",
    name: "text-center text-[#2D2926] text-xl font-semibold leading-4 font-sans",
    tagline: "text-[#3D3935] text-sm font-medium leading-[18px] font-sans",
    socialContainer: "flex justify-start items-start gap-4",
    socialLink: "w-6 h-6 text-[#2D2926] hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  },
  
  navigationGrid: {
    container: "self-stretch md:flex-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    column: "flex flex-col justify-start items-start gap-3 p-4 md:p-6",
    title: "text-sm font-bold leading-5 font-sans",
    linksContainer: "flex flex-col justify-start items-start gap-2",
    link: "text-[#2D2926] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    linkWithIcon: "flex items-center gap-2 text-[#2D2926] text-sm font-normal leading-5 font-sans cursor-pointer hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  },
  
  borders: {
    solutions: "sm:border-r border-border",
    products: "lg:border-r border-border",
    company: "sm:border-r border-border",
    resources: "",
  },
  
  patternSection: {
    container: "self-stretch h-12 relative overflow-hidden border-t border-b border-border",
    innerContainer: "absolute inset-0 w-full h-full overflow-hidden",
    patternItem: "absolute w-[300px] h-16 border border-[rgba(3,7,18,0.08)]",
  },
}
