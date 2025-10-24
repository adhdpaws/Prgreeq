export const contactPageConfig = {
  hero: {
    badge: "GET IN TOUCH",
    headline: "We are always ready to help you and answer your questions",
    description: "Professional hires talent directly from our platform. Bandwidth-constrained national economies creating deeper.",
  },
  contactInfo: {
    callCenter: {
      title: "Call Center",
      phones: [
        "(+1) 123 456 789 01",
        "+91 987 654 3210",
      ],
    },
    location: {
      title: "Our Location",
      addresses: [
        "Bengaluru, India",
        "22, 18th Cross Rd",
      ],
    },
    email: {
      title: "Email",
      address: "contact@prgeeq.com",
    },
    social: {
      title: "Social Network",
      links: [
        { name: "Facebook", url: "#", icon: "facebook" },
        { name: "Twitter", url: "#", icon: "twitter" },
        { name: "LinkedIn", url: "#", icon: "linkedin" },
        { name: "YouTube", url: "#", icon: "youtube" },
      ],
    },
  },
  form: {
    title: "Get in Touch",
    subtitle: "Define your goals and identify areas where AI can add value to your business.",
    fields: {
      fullName: {
        label: "Full Name",
        placeholder: "Enter your full name",
        type: "text",
        required: true,
      },
      email: {
        label: "Email",
        placeholder: "Enter your email",
        type: "email",
        required: true,
      },
      subject: {
        label: "Subject",
        placeholder: "Enter subject",
        type: "text",
        required: true,
      },
      message: {
        label: "Message",
        placeholder: "Enter your message",
        type: "textarea",
        required: true,
      },
    },
    button: {
      text: "Send a message",
    },
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4485869829577!2d77.62899!3d12.882182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzU1LjkiTiA3N8KwMzcnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    title: "Our Location",
  },
}

export const contactPageStyles = {
  hero: {
    container: "w-full pt-16 sm:pt-20 md:pt-24 lg:pt-28",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20",
    
    // Left Section
    leftSection: "flex-1 flex flex-col gap-8 sm:gap-10",
    badge: "inline-flex px-2 py-0.5 bg-transparent border border-[#2D2926] text-[#2D2926] text-[10px] font-semibold leading-tight font-sans tracking-wider uppercase rounded-none w-fit",
    headline: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight font-sans",
    description: "text-[#525252] text-sm sm:text-base leading-relaxed font-sans max-w-xl",
    
    // Contact Info Grid
    contactGrid: "grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-4",
    contactItem: "flex flex-col gap-2",
    contactTitle: "text-[#2D2926] text-sm sm:text-base font-semibold leading-tight font-sans",
    contactText: "text-[#525252] text-sm sm:text-base leading-relaxed font-sans",
    
    // Social Links
    socialLinks: "flex gap-4 mt-2",
    socialIcon: "text-[#2D2926] hover:text-[#525252] transition-colors duration-200",
    
    // Right Section - Form Card
    rightSection: "flex-1 lg:max-w-[800px]",
    formCard: "bg-[#F5F5F3] p-8 sm:p-10 md:p-12 flex flex-col gap-6",
    formTitle: "text-[#2D2926] text-2xl sm:text-3xl font-semibold leading-tight tracking-tight font-sans",
    formSubtitle: "text-[#525252] text-sm sm:text-base leading-relaxed font-sans",
    
    // Form Fields
    formFields: "flex flex-col gap-4 sm:gap-5",
    inputGroup: "flex flex-col gap-2",
    label: "text-[#525252] text-sm font-medium font-sans",
    input: "w-full px-4 py-3 bg-white border border-[#E5E5E5] text-[#2D2926] text-sm font-sans placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#2D2926] focus:border-transparent rounded-none",
    textarea: "w-full px-4 py-3 bg-white border border-[#E5E5E5] text-[#2D2926] text-sm font-sans placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#2D2926] focus:border-transparent rounded-none min-h-[120px] resize-vertical",
    button: "bg-[#2D2926] text-white px-8 py-3.5 text-sm sm:text-base font-medium hover:bg-[#1D1916] transition-colors duration-200 w-fit rounded-none",
  },
  
  map: {
    container: "w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20",
    iframe: "w-full h-[400px] sm:h-[500px] md:h-[600px] border border-[#E5E5E5] rounded-lg",
  },

  mobileContactInfo: {
    container: "w-full py-12 sm:py-16 lg:hidden",
    content: "w-full px-4 sm:px-6",
    grid: "grid grid-cols-1 gap-8",
    item: "flex flex-col gap-3",
    title: "text-[#2D2926] text-base font-semibold leading-tight font-sans",
    textGroup: "flex flex-col gap-1",
    text: "text-[#525252] text-sm leading-relaxed font-sans",
    socialLinks: "flex gap-4 mt-1",
    socialIcon: "text-[#2D2926] hover:text-[#525252] transition-colors duration-200",
  },
}
