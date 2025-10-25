// FAQ Configuration - Central place to modify FAQ content
export const faqConfig = {
  header: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our educational technology solutions and services.",
  },

  faqs: [
    {
      question: "What services does Prgeeq provide?",
      answer:
        "Prgeeq provides comprehensive educational technology solutions including eLearning development, accessibility services, localization, multimedia content creation, software solutions, and specialized programs for various audiences including academia, publishers, corporates, and EdTech companies.",
    },
    {
      question: "How does PrgeeqLearn LMS work?",
      answer:
        "PrgeeqLearn LMS is our comprehensive learning management system that enables organizations to create, deliver, and track educational content. It features intuitive course creation tools, analytics dashboards, mobile accessibility, and seamless integration with existing systems.",
    },
    {
      question: "Can you help make our existing content accessible?",
      answer:
        "Yes! Our accessibility services team specializes in making educational content WCAG compliant. We provide remediation services, accessibility audits, and training to ensure your content is accessible to all learners.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve a wide range of industries including higher education institutions, K-12 schools, publishing houses, corporate training departments, EdTech companies, government organizations, NGOs, and training institutes.",
    },
    {
      question: "Do you offer localization services?",
      answer:
        "Absolutely. Our localization services include translation, cultural adaptation, and technical formatting for multiple languages. We ensure your educational content resonates with learners across different regions and cultures.",
    },
    {
      question: "How do I get started with Prgeeq?",
      answer:
        "Getting started is easy! Book a demo to discuss your requirements, and our team will create a customized solution for your needs. We provide onboarding support and training to ensure a smooth implementation.",
    },
  ],
}

// Styling Configuration - Central place to modify styling
export const faqStyles = {
  container: "w-full flex justify-center items-start",
  
  innerContainer: "flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12",
  
  header: {
    container: "w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5",
    title: "w-full flex flex-col justify-center text-[#2D2926] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight",
    subtitle: "w-full text-[#3D3935] text-base font-normal leading-7 font-sans",
  },
  
  faqList: {
    container: "w-full lg:flex-1 flex flex-col justify-center items-center",
    wrapper: "w-full flex flex-col",
  },
  
  faqItem: {
    container: "w-full border-b border-[rgba(55,50,47,0.16)] overflow-hidden",
    button: "w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    question: "flex-1 text-[#2D2926] text-base font-medium leading-6 font-sans",
    iconContainer: "flex justify-center items-center",
    icon: "w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out",
    answerWrapper: "overflow-hidden transition-all duration-300 ease-in-out",
    answer: "px-5 pb-[18px] text-[#3D3935] text-sm font-normal leading-6 font-sans",
  },
}
