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
      steps: [
        {
          title: "Course Development",
          description: "We create tailored learning experiences designed to meet your specific educational goals and learner needs. Our instructional designers work closely with subject matter experts to develop engaging content. Each course is carefully structured to ensure optimal learning outcomes. We focus on creating meaningful interactions that drive knowledge retention."
        },
        {
          title: "Assessments",
          description: "Our interactive assessments and quizzes provide engaging evaluation tools that measure learning outcomes effectively. We design questions that test both knowledge recall and practical application. Instant feedback mechanisms help learners understand their progress in real-time. Our assessment strategies are aligned with learning objectives to ensure valid measurement of competencies."
        },
        {
          title: "Gamification",
          description: "We implement motivational elements and game mechanics that enhance learner participation and knowledge retention. Points, badges, and leaderboards create friendly competition and achievement recognition. Our gamification strategies are research-backed and proven to increase engagement. We carefully balance challenge and reward to maintain learner motivation throughout the course."
        },
        {
          title: "Standards Compliance",
          description: "Our solutions follow industry-standard SCORM and xAPI specifications for seamless tracking and compatibility. We ensure your content works flawlessly with all major learning management systems. Full data portability means your learning records can move between platforms easily. We stay updated with the latest e-learning standards to future-proof your investment."
        },
        {
          title: "Responsive Design",
          description: "We create seamless learning experiences that work perfectly across all devices and screen sizes. Whether on desktop, tablet, or smartphone, learners get a consistent, optimized experience. Our mobile-first approach ensures touch-friendly interfaces and appropriate content scaling. Offline capabilities allow learning to continue even without internet connectivity."
        },
        {
          title: "Analytics",
          description: "Comprehensive learning analytics provide deep insights into learner progress and course effectiveness. Our dashboards visualize key metrics including completion rates, time spent, and assessment scores. Detailed reports help identify struggling learners who may need additional support. Data-driven insights enable continuous improvement of your training programs."
        },
      ],
    },
    {
      id: "accessibility",
      title: "Accessibility",
      subtitle: "Inclusive Design for All Learners",
      description:
        "We ensure your educational content is accessible to all learners by implementing WCAG standards and inclusive design practices. Our accessibility services make learning materials usable for people with diverse abilities and needs.",
      steps: [
        {
          title: "WCAG Compliance",
          description: "We ensure full adherence to international WCAG 2.1 AA and AAA web accessibility standards. Our implementation guarantees legal compliance and demonstrates your commitment to inclusivity. Regular audits and testing verify continued conformance with evolving standards. We provide detailed documentation of accessibility features for stakeholders and regulators."
        },
        {
          title: "Screen Readers",
          description: "Our content is optimized for enhanced compatibility with all major assistive technologies. We test extensively with JAWS, NVDA, and VoiceOver to ensure flawless navigation. Proper semantic markup and ARIA labels provide visually impaired users with rich, contextual information. Our designs ensure every user can access all features and content independently."
        },
        {
          title: "Captions",
          description: "We provide comprehensive text alternatives for all images, videos, and multimedia content. Accurate, synchronized captions make video content accessible to deaf and hard-of-hearing learners. Audio descriptions narrate visual elements for those who cannot see the screen. Our transcripts ensure content is searchable and available in multiple formats."
        },
        {
          title: "Keyboard Navigation",
          description: "Every interactive element is fully accessible without requiring mouse or touch input. Logical tab order and clear focus indicators guide users through your content efficiently. Keyboard shortcuts provide power users with quick access to common functions. We ensure consistent navigation patterns that users can learn and rely upon."
        },
        {
          title: "Color Contrast",
          description: "Our carefully designed color schemes meet or exceed WCAG contrast requirements for readability. We test all text and graphical elements against various backgrounds to ensure visibility. Color is never the only method used to convey important information. Our palettes work for users with color vision deficiencies and in different lighting conditions."
        },
        {
          title: "Audits",
          description: "We conduct thorough evaluations to identify and fix accessibility barriers in existing content. Our accessibility experts use both automated tools and manual testing for comprehensive coverage. Detailed reports prioritize issues and provide specific remediation guidance. We partner with you to develop sustainable accessibility practices for ongoing compliance."
        },
      ],
    },
    {
      id: "localisation",
      title: "Localisation",
      subtitle: "Global Content Adaptation",
      description:
        "We adapt your educational content for global audiences with professional translation and cultural localization services. Our team ensures your content resonates with learners across different regions and cultures.",
      steps: [
        {
          title: "Translation",
          description: "Our expert linguists provide accurate, contextually appropriate translations that maintain educational integrity. We work with native speakers who understand both the source and target languages deeply. Each translation preserves the instructional intent while adapting idioms and cultural references. Quality assurance processes ensure consistency across all translated materials."
        },
        {
          title: "Cultural Adaptation",
          description: "We make contextual modifications to ensure your content is culturally appropriate and relevant for each market. Our localization experts understand regional customs, values, and learning preferences. Examples, case studies, and scenarios are adapted to reflect local contexts and experiences. We ensure visual elements, colors, and symbols align with cultural expectations."
        },
        {
          title: "Content Management",
          description: "Our efficient systems manage and update multilingual content across all your platforms seamlessly. Version control ensures changes propagate correctly to all language variants. Workflow tools coordinate translators, reviewers, and subject matter experts efficiently. We maintain translation memories to ensure consistency and reduce costs over time."
        },
        {
          title: "RTL Support",
          description: "We provide full implementation for right-to-left languages like Arabic and Hebrew with proper formatting. Interface elements are mirrored appropriately while maintaining logical information flow. Text rendering, alignment, and directionality are handled correctly throughout the experience. Our designs accommodate mixed-direction content when needed."
        },
        {
          title: "Compliance",
          description: "We ensure adherence to local educational regulations, data privacy laws, and cultural sensitivities. Our team stays current with regional requirements for educational content and certification. We verify that terminology, credentials, and references are appropriate for each locale. Risk assessment identifies potential cultural or legal issues before launch."
        },
        {
          title: "Quality Assurance",
          description: "Native speakers provide final verification ensuring natural, effective communication in each language. Linguistic testing catches errors that automated tools miss. Cultural reviewers confirm appropriateness and relevance for the target audience. User testing with representative learners validates the localized experience before release."
        },
      ],
    },
    {
      id: "multimedia",
      title: "Multimedia",
      subtitle: "Rich Media Content Production",
      description:
        "We produce high-quality multimedia content including videos, animations, and interactive media for engaging learning experiences. Our creative team brings your educational content to life with professional production values.",
      steps: [
        {
          title: "Video Production",
          description: "We deliver professional filming and post-production that creates compelling educational videos. Our cinematographers and editors craft visually engaging content that maintains learner attention. From scripting through final delivery, we manage every aspect of video production. Multiple formats and resolutions ensure compatibility with all platforms and devices."
        },
        {
          title: "Animation",
          description: "Our talented animators create dynamic 2D and 3D content that simplifies complex concepts. Character animation, motion graphics, and visual effects make abstract ideas concrete and memorable. We match animation style to your brand identity and audience preferences. Technical animations accurately represent processes, systems, and spatial relationships."
        },
        {
          title: "Simulations",
          description: "We develop immersive interactive scenarios that allow learners to practice skills in safe environments. Realistic branching scenarios present authentic challenges and meaningful consequences. Learners develop decision-making abilities through repeated practice without real-world risks. Detailed feedback helps learners understand the impact of their choices."
        },
        {
          title: "Voiceover",
          description: "Professional voice talent provides clear, engaging audio narration that enhances learning. We match voice characteristics to your content tone and audience demographics. Multi-language voiceover services support global rollouts with consistent quality. Audio engineering ensures optimal clarity, pacing, and emphasis throughout."
        },
        {
          title: "Graphics",
          description: "Custom visuals enhance understanding while maintaining brand consistency across all materials. Our designers create infographics, diagrams, and illustrations that clarify complex information. Visual metaphors and storytelling elements make content more engaging and memorable. All graphics are optimized for both digital display and print if needed."
        },
        {
          title: "Motion Graphics",
          description: "Eye-catching animations emphasize key points and maintain learner attention throughout courses. Kinetic typography, data visualizations, and transitions guide attention strategically. We balance visual interest with cognitive load to support rather than distract from learning. Consistent motion design language creates a polished, professional feel."
        },
      ],
    },
    {
      id: "software",
      title: "Software",
      subtitle: "Custom Educational Technology",
      description:
        "We develop custom educational software solutions and learning management systems tailored to your specific needs. Our development team creates scalable, secure, and user-friendly platforms that power modern learning.",
      steps: [
        {
          title: "LMS Platforms",
          description: "We build robust learning management systems for delivering, tracking, and managing educational content at scale. Our platforms support diverse content types, learner populations, and organizational structures. Advanced reporting and analytics provide insights into learner progress and program effectiveness. Integration with existing enterprise systems ensures seamless data flow across your organization."
        },
        {
          title: "Custom Applications",
          description: "Our bespoke software solutions are designed specifically to address your unique requirements and workflows. We take time to understand your processes, challenges, and goals before writing code. Agile development practices ensure you see progress regularly and can provide feedback. The result is software that fits your needs perfectly rather than forcing you to adapt."
        },
        {
          title: "API Integration",
          description: "We create seamless connections between your systems enabling efficient data flow and extended functionality. RESTful and GraphQL APIs allow different platforms to communicate and share information securely. Single sign-on integration provides users with convenient access across multiple applications. Our middleware solutions orchestrate complex workflows spanning multiple systems."
        },
        {
          title: "Cloud Solutions",
          description: "Scalable, accessible platforms hosted on reliable cloud infrastructure grow with your needs. We leverage AWS, Azure, and Google Cloud to provide enterprise-grade reliability and performance. Automatic scaling handles traffic spikes without manual intervention or downtime. Global content delivery networks ensure fast access regardless of learner location."
        },
        {
          title: "Mobile Apps",
          description: "We develop native and cross-platform applications that provide excellent experiences on iOS and Android devices. Touch-optimized interfaces make learning natural and intuitive on smartphones and tablets. Offline capabilities allow learning to continue even without connectivity. Push notifications keep learners engaged with timely reminders and updates."
        },
        {
          title: "Support",
          description: "Ongoing technical assistance ensures optimal performance, security, and uptime for your platforms. Our support team monitors systems proactively to identify and resolve issues before users notice. Regular updates add new features and maintain compatibility with evolving technologies. Comprehensive documentation and training enable your team to manage day-to-day operations confidently."
        },
      ],
    },
    {
      id: "mentoring",
      title: "Mentoring",
      subtitle: "Expert Guidance and Support",
      description:
        "We provide expert mentoring programs to guide educators and learners in achieving their professional development goals. Our experienced mentors offer personalized guidance and support for career growth.",
      steps: [
        {
          title: "Mentoring",
          description: "Our one-on-one mentoring sessions provide personalized guidance tailored to individual goals and career aspirations. Experienced mentors share insights from their own professional journeys and industry experience. Regular sessions build accountability and momentum toward achieving your objectives. We match mentors and mentees carefully based on experience, personality, and learning style."
        },
        {
          title: "Development Plans",
          description: "We create strategic roadmaps for achieving career milestones and acquiring essential skills. Detailed plans break down long-term goals into manageable, measurable steps. Regular checkpoints track progress and allow for course corrections as needed. Our frameworks balance immediate needs with long-term career advancement."
        },
        {
          title: "Gap Analysis",
          description: "Comprehensive assessments identify specific areas for improvement and professional growth. We evaluate current competencies against role requirements and career aspirations. Honest, constructive feedback highlights both strengths to leverage and areas needing development. Prioritized recommendations focus efforts on changes that will have the greatest impact."
        },
        {
          title: "Career Coaching",
          description: "Expert advisors provide guidance for navigating career transitions and advancement opportunities successfully. We help you understand organizational dynamics and unwritten rules that affect advancement. Interview preparation, negotiation strategies, and networking guidance increase your competitive advantage. Our coaches serve as sounding boards for important career decisions."
        },
        {
          title: "Best Practices",
          description: "Knowledge transfer from experienced professionals accelerates your development and helps you avoid common pitfalls. Mentors share proven strategies, techniques, and approaches from their successful careers. Learning from others' mistakes saves time and reduces the trial-and-error period. Community connections provide ongoing resources beyond formal mentoring relationships."
        },
        {
          title: "Ongoing Support",
          description: "Continuous encouragement and constructive feedback sustain motivation throughout your learning journey. Regular check-ins provide opportunities to celebrate wins and address challenges. Access to your mentor between scheduled sessions ensures support when you need it most. Our long-term relationships evolve as your career progresses and needs change."
        },
      ],
    },
    {
      id: "skilling",
      title: "Skilling",
      subtitle: "Comprehensive Skill Development",
      description:
        "We offer comprehensive skill development programs designed to empower individuals with in-demand competencies. Our training programs combine theory with practical application for effective skill acquisition.",
      steps: [
        {
          title: "Technical Training",
          description: "We provide hands-on instruction in software, tools, and technologies relevant to your industry and role. Our curriculum stays current with rapidly evolving technology landscapes and employer demands. Lab environments allow safe practice with real tools before applying skills on the job. Certification preparation is integrated to maximize your credentials alongside practical ability."
        },
        {
          title: "Soft Skills",
          description: "We develop communication, leadership, and teamwork abilities essential for career success in any field. Role-playing exercises provide practice with challenging interpersonal situations in a supportive environment. Feedback from peers and facilitators highlights blind spots and reinforces effective behaviors. These foundational skills amplify your technical expertise and accelerate advancement."
        },
        {
          title: "Certifications",
          description: "Industry-recognized credentials validate your expertise and significantly enhance career prospects and earning potential. Our programs align with certification exam objectives and include practice tests. Study groups and expert instructors increase first-time pass rates. We guide you in selecting certifications that offer the best return on your time investment."
        },
        {
          title: "Workshops",
          description: "Practical, interactive sessions provide real-world experience and immediate application of new knowledge. Small group sizes ensure personalized attention and hands-on practice with tools and techniques. Collaborative projects mirror actual workplace dynamics and deliverables. You leave with artifacts and work samples to add to your portfolio."
        },
        {
          title: "Assessments",
          description: "Our competency-based evaluations measure actual ability rather than just theoretical knowledge recall. Performance tasks require you to demonstrate skills in realistic scenarios and challenges. Detailed rubrics provide clear expectations and specific feedback on your work. Results identify mastery levels and guide personalized development recommendations."
        },
        {
          title: "Learning Pathways",
          description: "Structured progression routes support ongoing professional development and continuous growth throughout your career. Modular design allows you to build skills incrementally while applying new knowledge immediately. Clear prerequisites and learning objectives help you plan your journey strategically. Advanced pathways keep you engaged and growing even after initial skill acquisition."
        },
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
    container: "w-full border-b border-border flex justify-start items-center py-3 sm:py-4 md:py-5 lg:py-6 sticky top-0 bg-white z-10 overflow-x-auto",
    wrapper: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-nowrap sm:flex-wrap justify-start items-center gap-2 sm:gap-3 min-w-max sm:min-w-0",
    button: "px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 text-[#2D2926] text-xs sm:text-sm md:text-base font-medium border border-[#2D2926] hover:bg-[#2D2926] hover:text-white transition-all duration-200 rounded-none whitespace-nowrap flex-shrink-0",
    activeButton: "px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 bg-[#2D2926] text-white text-xs sm:text-sm md:text-base font-medium border border-[#2D2926] transition-all duration-200 rounded-none whitespace-nowrap flex-shrink-0",
  },

  serviceSection: {
    container: "w-full border-b border-border flex justify-start items-start py-16 sm:py-20 md:py-24 lg:py-28 scroll-mt-20",
    content: "w-full px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-12 sm:gap-16 md:gap-20 lg:gap-24 items-start",
    
    // Left Card - Sticky on large screens
    leftCard: "w-full lg:w-[380px] xl:w-[420px] bg-[#F5F5F3] p-8 sm:p-10 md:p-12 flex flex-col justify-between gap-6 sm:gap-8 flex-shrink-0 lg:sticky lg:top-32 lg:self-start",
    cardHeader: "flex flex-col gap-3",
    cardTitle: "text-[#2D2926] text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight font-sans",
    cardSubtitle: "text-[#666666] text-base sm:text-lg font-normal leading-relaxed font-sans pb-4",
    cardDescription: "text-[#666666] text-sm sm:text-base leading-relaxed font-sans",
    cardButton: "bg-[#2D2926] text-white px-7 py-3 text-sm sm:text-base font-medium hover:bg-[#1D1916] transition-colors duration-200 rounded-full w-fit",
    
    // Right Features
    rightFeatures: "flex-1 flex flex-col pt-4",
    featuresTitle: "text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight font-sans mb-10",
    featuresList: "flex flex-col",
    featureItem: "flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-10 py-6 border-b border-[#E5E5E5] last:border-b-0",
    featureTitle: "text-[#2D2926] text-sm sm:text-base pt-1 font-semibold leading-tight font-sans w-full sm:w-[200px] md:w-[220px] lg:w-[240px] flex-shrink-0 uppercase",
    featureDescription: "text-[#666666] text-sm sm:text-base leading-relaxed font-sans flex-1",
  },
}
