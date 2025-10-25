/**
 * Solution Services Configuration
 * Content for all services across different solution types
 */

export interface ServiceContent {
  id: string
  title: string
  whatWeOffer: string
  keyFeatures: string[]
}

export interface SolutionServicesConfig {
  [solutionType: string]: ServiceContent[]
}

export const solutionServicesConfig: SolutionServicesConfig = {
  academia: [
    {
      id: "lms-integration",
      title: "LMS Integration & Management",
      whatWeOffer: "Comprehensive LMS solutions tailored for academic institutions, enabling seamless course delivery, student tracking, and educational content management. We help universities and colleges implement and customize learning platforms that enhance the teaching and learning experience.",
      keyFeatures: [
        "Custom LMS implementation and configuration",
        "Integration with existing university systems",
        "Student progress tracking and analytics",
        "Course content organization and management",
        "Grade book and assessment management",
        "Mobile-responsive learning interface"
      ]
    },
    {
      id: "curriculum-development",
      title: "Curriculum Development",
      whatWeOffer: "Expert instructional design and content development services for academic courses. We create engaging, pedagogically sound educational materials that align with curriculum standards and learning objectives for higher education institutions.",
      keyFeatures: [
        "Curriculum-aligned course content",
        "Research-based instructional design",
        "Subject matter expert collaboration",
        "Peer-reviewed academic materials",
        "Multi-format content delivery",
        "Regular content updates and revisions"
      ]
    },
    {
      id: "digital-libraries",
      title: "Digital Libraries & Resources",
      whatWeOffer: "Build comprehensive digital library systems with organized educational resources, research materials, and multimedia content. We create searchable, accessible repositories that support academic research and learning.",
      keyFeatures: [
        "Searchable content repositories",
        "Metadata management and tagging",
        "Citation and reference tools",
        "Digital asset management",
        "Multi-format resource support",
        "Access control and permissions"
      ]
    },
    {
      id: "virtual-labs",
      title: "Virtual Labs & Simulations",
      whatWeOffer: "Interactive virtual laboratory environments and simulations that enable students to conduct experiments and practice skills in a safe, accessible digital space. Perfect for STEM education and distance learning.",
      keyFeatures: [
        "3D virtual lab environments",
        "Interactive scientific simulations",
        "Real-time data collection and analysis",
        "Safety protocol training",
        "Equipment and instrument simulations",
        "Collaborative experiment features"
      ]
    },
    {
      id: "student-engagement",
      title: "Student Engagement Tools",
      whatWeOffer: "Innovative tools and platforms to increase student participation, collaboration, and engagement. We create interactive learning experiences that foster active participation and peer-to-peer learning.",
      keyFeatures: [
        "Discussion forums and chat systems",
        "Collaborative project spaces",
        "Live polling and Q&A tools",
        "Peer review systems",
        "Group activity management",
        "Engagement analytics"
      ]
    },
    {
      id: "faculty-training",
      title: "Faculty Training & Support",
      whatWeOffer: "Comprehensive faculty development programs designed to enhance teaching effectiveness with digital tools and modern pedagogical methods. We support educators in adopting technology-enhanced teaching practices.",
      keyFeatures: [
        "Digital tool training workshops",
        "Pedagogical best practices seminars",
        "One-on-one coaching sessions",
        "Teaching resource development",
        "Technology adoption support",
        "Continuous professional development"
      ]
    },
    {
      id: "research-support",
      title: "Research Support Services",
      whatWeOffer: "Specialized services supporting academic research activities, including data visualization, research methodology tools, and collaborative research platforms for faculty and graduate students.",
      keyFeatures: [
        "Research data visualization",
        "Statistical analysis tools",
        "Collaborative research platforms",
        "Research documentation systems",
        "Grant proposal support",
        "Publication preparation assistance"
      ]
    },
    {
      id: "accessibility-compliance",
      title: "Accessibility & Compliance",
      whatWeOffer: "Ensure all educational content meets WCAG standards and institutional accessibility requirements. We help create inclusive learning environments that support students with diverse needs and abilities.",
      keyFeatures: [
        "WCAG 2.1 AA/AAA compliance audits",
        "Accessible document remediation",
        "Screen reader optimization",
        "Closed captioning and transcripts",
        "Accessible assessment formats",
        "Universal design consultation"
      ]
    }
  ],
  publishers: [
    {
      id: "digital-transformation",
      title: "Digital Content Transformation",
      whatWeOffer: "Transform traditional print materials into engaging digital formats. We help publishers modernize their content libraries, creating interactive digital experiences that expand market reach and revenue opportunities.",
      keyFeatures: [
        "Print-to-digital conversion services",
        "Enhanced digital editions",
        "Multi-format output (EPUB, PDF, Web)",
        "Content restructuring and optimization",
        "Metadata and taxonomy development",
        "Quality assurance and validation"
      ]
    },
    {
      id: "epub-production",
      title: "EPUB & eBook Production",
      whatWeOffer: "Professional EPUB and eBook production services that ensure your content meets industry standards and provides exceptional reading experiences across all devices and platforms.",
      keyFeatures: [
        "EPUB 3 compliant production",
        "Fixed and reflowable layouts",
        "Interactive media integration",
        "Cross-platform compatibility testing",
        "DRM implementation",
        "Distribution-ready packaging"
      ]
    },
    {
      id: "interactive-content",
      title: "Interactive Digital Content",
      whatWeOffer: "Create engaging interactive elements that enhance digital publications. From embedded assessments to multimedia experiences, we help publishers add value to their digital offerings.",
      keyFeatures: [
        "Interactive assessments and quizzes",
        "Embedded video and audio content",
        "Interactive diagrams and visualizations",
        "Annotation and note-taking features",
        "Search and navigation enhancements",
        "Social learning integrations"
      ]
    },
    {
      id: "xml-workflow",
      title: "XML Workflow & Automation",
      whatWeOffer: "Implement efficient XML-based workflows that enable single-source publishing across multiple formats. Streamline your production process and reduce time-to-market.",
      keyFeatures: [
        "XML structure design and implementation",
        "DITA and DocBook expertise",
        "Automated format generation",
        "Version control and management",
        "Workflow optimization",
        "Legacy content migration"
      ]
    },
    {
      id: "accessibility-publishing",
      title: "Accessible Publishing Solutions",
      whatWeOffer: "Ensure your publications meet global accessibility standards. We help publishers create inclusive content that reaches all readers, including those with disabilities.",
      keyFeatures: [
        "WCAG and EPUB Accessibility compliance",
        "Accessible PDF creation",
        "Alternative text and descriptions",
        "Semantic structure optimization",
        "Accessibility testing and certification",
        "VPAT documentation"
      ]
    },
    {
      id: "content-enrichment",
      title: "Content Enrichment Services",
      whatWeOffer: "Enhance your publications with supplementary materials, multimedia content, and interactive features that increase engagement and learning outcomes.",
      keyFeatures: [
        "Supplementary resource creation",
        "Video and audio production",
        "Interactive learning objects",
        "Teacher and student resources",
        "Assessment banks",
        "Ancillary materials development"
      ]
    },
    {
      id: "distribution-platforms",
      title: "Distribution & Platform Integration",
      whatWeOffer: "Optimize your content for distribution across major platforms and retailers. We ensure your publications are properly formatted and metadata-enriched for maximum discoverability.",
      keyFeatures: [
        "Platform-specific formatting",
        "Metadata optimization for SEO",
        "Distribution channel preparation",
        "Retailer requirement compliance",
        "Analytics and reporting integration",
        "Update and version management"
      ]
    }
  ],
  corporates: [
    {
      id: "employee-onboarding",
      title: "Employee Onboarding Programs",
      whatWeOffer: "Streamline your employee onboarding process with comprehensive digital training programs. We create engaging onboarding experiences that accelerate new hire productivity and integration.",
      keyFeatures: [
        "Company culture and values training",
        "Role-specific skill development",
        "Interactive policy and procedure guides",
        "Mentor matching and tracking",
        "Progress monitoring dashboards",
        "Mobile-accessible content"
      ]
    },
    {
      id: "compliance-training",
      title: "Compliance & Regulatory Training",
      whatWeOffer: "Ensure your organization meets regulatory requirements with targeted compliance training. We develop content that addresses industry-specific regulations and maintains audit-ready documentation.",
      keyFeatures: [
        "Industry-specific compliance modules",
        "Automated certification tracking",
        "Regular content updates for regulation changes",
        "Assessment and verification systems",
        "Audit trail and reporting",
        "Multi-language support"
      ]
    },
    {
      id: "leadership-development",
      title: "Leadership Development Programs",
      whatWeOffer: "Cultivate your next generation of leaders with comprehensive leadership development programs. We combine best practices in management training with practical, scenario-based learning.",
      keyFeatures: [
        "Executive coaching modules",
        "Team management simulations",
        "Decision-making scenarios",
        "Communication skills training",
        "Change management workshops",
        "360-degree feedback integration"
      ]
    },
    {
      id: "skills-training",
      title: "Technical Skills Training",
      whatWeOffer: "Bridge skill gaps with targeted technical training programs. From software proficiency to industry-specific skills, we create hands-on learning experiences that drive capability development.",
      keyFeatures: [
        "Software and tool training",
        "Industry-specific skill modules",
        "Hands-on practice environments",
        "Certification preparation",
        "Competency assessments",
        "Learning path recommendations"
      ]
    },
    {
      id: "sales-enablement",
      title: "Sales Enablement & Training",
      whatWeOffer: "Empower your sales team with knowledge and tools to succeed. We create engaging sales training that covers product knowledge, sales methodologies, and customer engagement strategies.",
      keyFeatures: [
        "Product knowledge databases",
        "Sales methodology training",
        "Customer interaction simulations",
        "Objection handling scenarios",
        "Performance analytics",
        "Just-in-time sales resources"
      ]
    },
    {
      id: "soft-skills",
      title: "Soft Skills Development",
      whatWeOffer: "Enhance workplace effectiveness with soft skills training. We develop programs focused on communication, collaboration, time management, and other essential interpersonal skills.",
      keyFeatures: [
        "Communication skills workshops",
        "Team collaboration training",
        "Time management techniques",
        "Emotional intelligence development",
        "Conflict resolution strategies",
        "Professional etiquette"
      ]
    },
    {
      id: "performance-management",
      title: "Performance Management Tools",
      whatWeOffer: "Integrate learning with performance management through aligned training programs. We help organizations connect skill development with performance goals and career progression.",
      keyFeatures: [
        "Goal-aligned learning paths",
        "Performance review integration",
        "Skills gap analysis",
        "Career development planning",
        "Competency frameworks",
        "Succession planning support"
      ]
    },
    {
      id: "change-management",
      title: "Change Management Training",
      whatWeOffer: "Support organizational transformation with change management training. We help employees navigate and embrace change through structured learning experiences.",
      keyFeatures: [
        "Change readiness assessments",
        "Transition training modules",
        "Communication strategy support",
        "Resistance management techniques",
        "Change champion programs",
        "Post-implementation support"
      ]
    }
  ],
  edtech: [
    {
      id: "platform-development",
      title: "Platform Development & Integration",
      whatWeOffer: "Custom learning platform development and seamless integration services. We build scalable EdTech solutions that grow with your user base and integrate with existing educational ecosystems.",
      keyFeatures: [
        "Custom LMS development",
        "API development and integration",
        "Third-party system connections",
        "Cloud infrastructure setup",
        "Scalability optimization",
        "Security and compliance"
      ]
    },
    {
      id: "content-libraries",
      title: "Content Libraries & Licensing",
      whatWeOffer: "Access to comprehensive, ready-to-use content libraries or custom content development at scale. We provide EdTech companies with high-quality educational content that powers learning platforms.",
      keyFeatures: [
        "Curriculum-aligned content libraries",
        "Multi-subject coverage",
        "Regular content updates",
        "Licensing and white-labeling options",
        "Customization services",
        "Content API access"
      ]
    },
    {
      id: "adaptive-learning",
      title: "Adaptive Learning Technology",
      whatWeOffer: "Implement intelligent adaptive learning systems that personalize content delivery based on learner performance. We help EdTech platforms provide truly individualized learning experiences.",
      keyFeatures: [
        "Learning path personalization",
        "Performance-based content adaptation",
        "AI-powered recommendations",
        "Real-time difficulty adjustment",
        "Predictive analytics",
        "Learning gap identification"
      ]
    },
    {
      id: "assessment-engine",
      title: "Assessment Engine & Analytics",
      whatWeOffer: "Sophisticated assessment engines with advanced analytics capabilities. We provide EdTech companies with tools to measure learning outcomes and provide actionable insights.",
      keyFeatures: [
        "Question bank management systems",
        "Auto-grading algorithms",
        "Adaptive testing capabilities",
        "Learning analytics dashboards",
        "Performance tracking",
        "Standards alignment tools"
      ]
    },
    {
      id: "mobile-first",
      title: "Mobile-First Solutions",
      whatWeOffer: "Design and develop mobile-optimized learning experiences. We help EdTech companies reach learners on any device with responsive, native-like mobile learning applications.",
      keyFeatures: [
        "Responsive web design",
        "Native mobile app development",
        "Offline learning capabilities",
        "Push notification systems",
        "Mobile assessment tools",
        "Cross-device synchronization"
      ]
    },
    {
      id: "gamification-engine",
      title: "Gamification & Engagement",
      whatWeOffer: "Boost user engagement with sophisticated gamification systems. We implement proven game mechanics that increase motivation, completion rates, and learning retention.",
      keyFeatures: [
        "Points and rewards systems",
        "Achievement and badge engines",
        "Leaderboards and competitions",
        "Progress visualization",
        "Social learning features",
        "Engagement analytics"
      ]
    },
    {
      id: "white-label",
      title: "White-Label Solutions",
      whatWeOffer: "Fully customizable white-label learning solutions that can be branded and tailored to your specifications. We help EdTech companies quickly launch branded learning platforms.",
      keyFeatures: [
        "Complete branding customization",
        "Feature configuration",
        "Multi-tenancy support",
        "Custom domain setup",
        "Branded mobile apps",
        "Ongoing technical support"
      ]
    },
    {
      id: "data-security",
      title: "Data Security & Compliance",
      whatWeOffer: "Ensure your EdTech platform meets all data protection and educational compliance requirements. We provide security audits, implementation, and ongoing compliance management.",
      keyFeatures: [
        "FERPA and COPPA compliance",
        "GDPR compliance implementation",
        "Data encryption and security",
        "Privacy policy development",
        "Security audits and testing",
        "Compliance documentation"
      ]
    }
  ],
  elearning: [
    {
      id: "instructional-design",
      title: "Instructional Design Services",
      whatWeOffer: "Expert instructional design that applies learning science and pedagogical best practices. We create effective learning experiences that achieve measurable outcomes and engage modern learners.",
      keyFeatures: [
        "Learning objective development",
        "Curriculum mapping and design",
        "Storyboard creation",
        "Assessment strategy design",
        "Learner analysis",
        "Evaluation frameworks"
      ]
    },
    {
      id: "custom-course-development",
      title: "Custom Course Development",
      whatWeOffer: "End-to-end custom eLearning course development from concept to completion. We create engaging, interactive courses tailored to your specific learning objectives and audience needs.",
      keyFeatures: [
        "Needs analysis and consultation",
        "Custom content authoring",
        "Interactive activity design",
        "Multimedia integration",
        "Quality assurance testing",
        "SCORM/xAPI packaging"
      ]
    },
    {
      id: "rapid-elearning",
      title: "Rapid eLearning Development",
      whatWeOffer: "Fast-track your training initiatives with rapid eLearning development. We use proven templates and efficient processes to deliver quality courses quickly without sacrificing effectiveness.",
      keyFeatures: [
        "Template-based development",
        "Quick turnaround times",
        "PowerPoint conversion",
        "Cost-effective production",
        "Scalable processes",
        "Flexible revision cycles"
      ]
    },
    {
      id: "microlearning",
      title: "Microlearning Modules",
      whatWeOffer: "Bite-sized learning modules designed for maximum retention and on-demand access. Perfect for busy professionals who need just-in-time learning and performance support.",
      keyFeatures: [
        "3-5 minute learning modules",
        "Mobile-optimized content",
        "Focused learning objectives",
        "Quick knowledge checks",
        "Performance support tools",
        "Easy content updates"
      ]
    },
    {
      id: "video-production",
      title: "Video-Based Learning",
      whatWeOffer: "Professional video production services for eLearning. From talking head videos to complex animations, we create engaging video content that enhances learning experiences.",
      keyFeatures: [
        "Professional video shooting",
        "Animated explainer videos",
        "Screen capture tutorials",
        "Video editing and post-production",
        "Closed captioning",
        "Multi-format delivery"
      ]
    },
    {
      id: "scenario-simulations",
      title: "Scenario-Based Learning",
      whatWeOffer: "Immersive scenario-based learning experiences that let learners practice decision-making in realistic contexts. Ideal for soft skills training and complex problem-solving.",
      keyFeatures: [
        "Branching scenario design",
        "Consequence-based learning",
        "Realistic decision points",
        "Character-driven narratives",
        "Performance feedback",
        "Multiple outcome paths"
      ]
    },
    {
      id: "mobile-learning",
      title: "Mobile Learning Solutions",
      whatWeOffer: "Design and develop mobile-responsive eLearning that works seamlessly across all devices. Enable learners to access training anytime, anywhere, on any device.",
      keyFeatures: [
        "Responsive course design",
        "Touch-friendly interactions",
        "Offline access capability",
        "Mobile-optimized media",
        "Cross-device progress tracking",
        "App-based delivery options"
      ]
    },
    {
      id: "learning-portals",
      title: "Learning Portal Development",
      whatWeOffer: "Custom learning portal development that provides centralized access to all your training resources. We create user-friendly interfaces that make learning management simple.",
      keyFeatures: [
        "Custom portal design",
        "User management systems",
        "Progress tracking dashboards",
        "Certificate generation",
        "Reporting and analytics",
        "Content library management"
      ]
    },
    {
      id: "translation-localization",
      title: "Translation & Localization",
      whatWeOffer: "Expand your reach with professional translation and cultural localization services. We ensure your eLearning content resonates with global audiences while maintaining learning effectiveness.",
      keyFeatures: [
        "Professional translation services",
        "Cultural adaptation",
        "Voice-over recording",
        "Text expansion handling",
        "Regional content customization",
        "Quality assurance testing"
      ]
    }
  ],
  accessibility: [
    {
      id: "wcag-audits",
      title: "WCAG Compliance Audits",
      whatWeOffer: "Comprehensive Web Content Accessibility Guidelines (WCAG) compliance audits for your digital content. We identify barriers and provide detailed remediation recommendations to meet WCAG 2.1 Level AA standards.",
      keyFeatures: [
        "Manual and automated testing",
        "WCAG 2.1 Level A/AA/AAA evaluation",
        "Detailed audit reports",
        "Prioritized remediation plans",
        "Success criteria mapping",
        "Compliance documentation"
      ]
    },
    {
      id: "document-remediation",
      title: "Document Remediation Services",
      whatWeOffer: "Professional remediation of PDF documents, Word files, PowerPoint presentations, and Excel spreadsheets to meet accessibility standards. We ensure your documents are readable by assistive technologies.",
      keyFeatures: [
        "PDF tagging and structure",
        "Reading order correction",
        "Form field accessibility",
        "Table structure remediation",
        "Metadata enhancement",
        "Section 508 compliance"
      ]
    },
    {
      id: "alt-text-services",
      title: "Alt Text & Image Description",
      whatWeOffer: "Expert alt text writing services that provide meaningful descriptions for images, charts, and complex graphics. We create context-appropriate descriptions that convey essential information to screen reader users.",
      keyFeatures: [
        "Contextual alt text writing",
        "Complex image descriptions",
        "Chart and graph descriptions",
        "Decorative image identification",
        "Long description creation",
        "Best practice compliance"
      ]
    },
    {
      id: "video-accessibility",
      title: "Video Captioning & Audio Description",
      whatWeOffer: "Professional closed captioning, subtitles, and audio description services for video content. We ensure your multimedia is accessible to deaf, hard-of-hearing, and blind users.",
      keyFeatures: [
        "Accurate closed captions",
        "Subtitle creation",
        "Audio description scripting",
        "Transcript generation",
        "Time-code synchronization",
        "Multiple language support"
      ]
    },
    {
      id: "assistive-tech-testing",
      title: "Assistive Technology Testing",
      whatWeOffer: "Real-world testing with assistive technologies including screen readers (JAWS, NVDA, VoiceOver), screen magnifiers, and alternative input devices to ensure your content works for users with disabilities.",
      keyFeatures: [
        "Screen reader testing (JAWS, NVDA, VoiceOver)",
        "Keyboard navigation testing",
        "Voice control testing",
        "Screen magnifier testing",
        "High contrast mode testing",
        "User experience evaluation"
      ]
    },
    {
      id: "accessible-epub",
      title: "Accessible EPUB Production",
      whatWeOffer: "Creation of fully accessible EPUB3 publications that meet international accessibility standards. We ensure your digital books are readable by everyone, including users of assistive technologies.",
      keyFeatures: [
        "EPUB 3 with accessibility metadata",
        "Semantic HTML structure",
        "MathML for equations",
        "Image descriptions",
        "Navigation optimization",
        "EPUB Accessibility 1.1 compliance"
      ]
    },
    {
      id: "accessibility-training",
      title: "Accessibility Training Programs",
      whatWeOffer: "Comprehensive accessibility training for content creators, developers, and stakeholders. We build organizational accessibility competence through practical, role-based training programs.",
      keyFeatures: [
        "Role-based training modules",
        "Hands-on workshops",
        "Tool-specific training",
        "Best practices guidance",
        "Certification preparation",
        "Ongoing consultation"
      ]
    },
    {
      id: "compliance-consulting",
      title: "Accessibility Compliance Consulting",
      whatWeOffer: "Strategic accessibility consulting to help organizations develop and implement accessibility policies, processes, and governance frameworks that ensure long-term compliance.",
      keyFeatures: [
        "Accessibility policy development",
        "Process integration",
        "Governance frameworks",
        "Section 508 compliance",
        "ADA compliance guidance",
        "International standards (EN 301 549)"
      ]
    }
  ]
}

// Service navigation items
export const serviceNavItems = [
  { id: "learning-management", label: "Learning Management" },
  { id: "content-development", label: "Content Development" },
  { id: "multimedia-production", label: "Multimedia Production" },
  { id: "elearning-content", label: "eLearning Content Solutions" },
  { id: "interactivities-gamification", label: "Interactivities/Gamification" },
  { id: "audio-books", label: "Audio Books Solutions" },
  { id: "accessibility-solutions", label: "Accessibility Solutions" },
  { id: "assessment-solutions", label: "Assessment Solutions" },
  { id: "powerpoint-content", label: "Powerpoint Content" },
  { id: "read-aloud-videos", label: "Read Aloud Videos" },
  { id: "skilling-mentoring", label: "Skilling & Mentoring" }
]
