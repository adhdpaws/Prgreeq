// Services Page Configuration - Central place to modify content
export const servicesPageConfig = {
  hero: {
    badge: {
      text: "SERVICES",
    },
    headline: "Creating Strong Brands: Our Expertise, Your Success",
    subtitle: "From brand strategy to creative execution, discover how our services can elevate your brand.",
  },

  // Service navigation buttons
  serviceNav: [
    { id: "elearning", label: "eLearning" },
    { id: "accessibility", label: "Accessibility" },
    { id: "localisation", label: "Localisation" },
    { id: "multimedia", label: "Multimedia" },
    { id: "software", label: "Software" },
    { id: "mentoring", label: "Mentoring" },
    { id: "skilling", label: "Skilling" },
  ],

  // Detailed service sections
  services: [
    {
      id: "elearning",
      title: "eLearning",
      subtitle: "Engaging Interactive Learning Solutions",
      description:
        "We create engaging and interactive eLearning solutions that enhance learning outcomes and drive educational success. Our comprehensive approach combines instructional design, multimedia content, and cutting-edge technology to deliver exceptional learning experiences.",
      features: [
        "Custom course development",
        "Interactive assessments and quizzes",
        "Gamification and engagement strategies",
        "SCORM and xAPI compliance",
        "Mobile-responsive design",
        "Learning analytics and reporting",
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      subtitle: "Inclusive Design for All Learners",
      description:
        "We ensure your educational content is accessible to all learners by implementing WCAG standards and inclusive design practices. Our accessibility services make learning materials usable for people with diverse abilities and needs.",
      features: [
        "WCAG 2.1 AA/AAA compliance",
        "Screen reader optimization",
        "Alternative text and captions",
        "Keyboard navigation support",
        "Color contrast optimization",
        "Accessibility audits and remediation",
      ],
    },
    {
      id: "localisation",
      title: "Localisation",
      subtitle: "Global Content Adaptation",
      description:
        "We adapt your educational content for global audiences with professional translation and cultural localization services. Our team ensures your content resonates with learners across different regions and cultures.",
      features: [
        "Professional translation services",
        "Cultural adaptation and localization",
        "Multilingual content management",
        "Right-to-left language support",
        "Regional compliance and standards",
        "Native speaker review and quality assurance",
      ],
    },
    {
      id: "multimedia",
      title: "Multimedia",
      subtitle: "Rich Media Content Production",
      description:
        "We produce high-quality multimedia content including videos, animations, and interactive media for engaging learning experiences. Our creative team brings your educational content to life with professional production values.",
      features: [
        "Video production and editing",
        "2D and 3D animations",
        "Interactive simulations",
        "Audio narration and voiceover",
        "Graphic design and illustrations",
        "Motion graphics and visual effects",
      ],
    },
    {
      id: "software",
      title: "Software",
      subtitle: "Custom Educational Technology",
      description:
        "We develop custom educational software solutions and learning management systems tailored to your specific needs. Our development team creates scalable, secure, and user-friendly platforms that power modern learning.",
      features: [
        "Learning Management Systems (LMS)",
        "Custom learning applications",
        "API integration and development",
        "Cloud-based solutions",
        "Mobile app development",
        "System maintenance and support",
      ],
    },
    {
      id: "mentoring",
      title: "Mentoring",
      subtitle: "Expert Guidance and Support",
      description:
        "We provide expert mentoring programs to guide educators and learners in achieving their professional development goals. Our experienced mentors offer personalized guidance and support for career growth.",
      features: [
        "One-on-one mentoring sessions",
        "Professional development planning",
        "Skill gap analysis",
        "Career coaching and guidance",
        "Best practice sharing",
        "Ongoing support and feedback",
      ],
    },
    {
      id: "skilling",
      title: "Skilling",
      subtitle: "Comprehensive Skill Development",
      description:
        "We offer comprehensive skill development programs designed to empower individuals with in-demand competencies. Our training programs combine theory with practical application for effective skill acquisition.",
      features: [
        "Technical skills training",
        "Soft skills development",
        "Industry-specific certifications",
        "Hands-on workshops",
        "Competency-based assessments",
        "Continuous learning pathways",
      ],
    },
  ],
}

// Styling Configuration
export const servicesPageStyles = {
  hero: {
    container: "w-full border-b border-border flex flex-col justify-center items-stretch py-16 sm:py-6 md:py-8 lg:py-12",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center items-start gap-6 sm:gap-8",
    badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase w-fit rounded-none",
    headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight font-sans max-w-4xl",
    subtitle: "text-[#3D3935] text-base sm:text-lg md:text-xl font-normal leading-relaxed font-sans max-w-3xl",
  },

  serviceNav: {
    container: "w-full border-b border-border flex justify-start items-center py-4 sm:py-5 md:py-6 sticky top-0 bg-white z-10",
    wrapper: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-wrap justify-start items-center gap-2 sm:gap-3",
    button: "px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-[#2D2926] text-sm sm:text-base font-medium border border-[#2D2926] hover:bg-[#2D2926] hover:text-white transition-all duration-200 rounded-none",
    activeButton: "px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-[#2D2926] text-white text-sm sm:text-base font-medium border border-[#2D2926] transition-all duration-200 rounded-none",
  },

  serviceSection: {
    container: "w-full border-b border-border flex justify-start items-start py-16 sm:py-20 md:py-24 lg:py-28 scroll-mt-20",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-start",
    
    // Left Card
    leftCard: "w-full lg:w-[380px] xl:w-[420px] bg-[#F5F5F3] p-8 sm:p-10 md:p-12 flex flex-col justify-between gap-6 sm:gap-8 flex-shrink-0",
    cardHeader: "flex flex-col gap-3",
    cardTitle: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight font-sans",
    cardSubtitle: "text-[#9B9B9B] text-base sm:text-lg font-normal leading-relaxed font-sans",
    cardDescription: "text-[#9B9B9B] text-sm sm:text-base leading-relaxed font-sans",
    cardButton: "bg-[#2D2926] text-white px-7 py-3 text-sm sm:text-base font-medium hover:bg-[#1D1916] transition-colors duration-200 rounded-full w-fit",
    
    // Right Features
    rightFeatures: "flex-1 max-w-[600px] flex flex-col gap-8 sm:gap-10 md:gap-12 pt-4",
    featuresTitle: "text-[#9B9B9B] text-xs sm:text-sm font-bold leading-tight tracking-[0.2em] uppercase font-sans",
    featuresList: "flex flex-col gap-8 sm:gap-10 md:gap-12 mt-4",
    featureText: "text-[#9B9B9B] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-sans",
  },
}
