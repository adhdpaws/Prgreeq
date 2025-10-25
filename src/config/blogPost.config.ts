export const blogPostStyles = {
  header: {
    container: "w-full px-4 sm:px-6 md:px-12 lg:px-24 pt-16 pb-8 sm:py-20 md:py-24 flex flex-col gap-8 sm:gap-10 md:gap-12",
    
    // Meta Information Section - Shows after content on mobile, before on desktop
    metaSection: "grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 order-2 lg:order-1",
    metaItem: "flex flex-col gap-1.5 sm:gap-3",
    metaLabel: "text-[#666666] text-[0.5rem] sm:text-xs font-medium tracking-wider uppercase",
    metaValue: "text-[#2D2926] text-[0.6rem] sm:text-xs font-normal",
    separator: "w-full bg-[#E5E5E5] h-px",
    
    // Title and Description Section - Shows first on mobile, after meta on desktop
    contentSection: "flex flex-col gap-3 sm:gap-6 max-w-5xl order-1 lg:order-2",
    title: "text-[#2D2926] text-xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight font-sans",
    description: "text-[#666666] text-sm sm:text-lg md:text-xl leading-relaxed font-sans",
    
    // Action Buttons Section - Side by side on all screens
    actionSection: "flex flex-row items-center justify-between gap-3 sm:gap-6 order-3",
    backButton: "text-[#666666] hover:text-[#2D2926] gap-1 sm:gap-2 px-0 hover:bg-transparent text-[0.5rem] sm:text-base font-medium underline decoration-1 underline-offset-4",
    readMoreButton: "bg-transparent hover:bg-transparent text-[#2D2926] px-2 sm:px-4 py-1 sm:py-2 flex items-center gap-2 sm:gap-3 text-[0.5rem] sm:text-base font-medium transition-all duration-200 border-0",
  },
  
  image: {
    container: "w-full px-4 sm:px-6 md:px-12 lg:px-24",
    imageWrapper: "relative w-full aspect-[16/9] sm:aspect-[21/9]",
    image: "object-cover",
  },
  
  content: {
    container: "w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 py-16 sm:py-20 md:py-24 lg:py-28",
    prose: "prose prose-base max-w-none mx-0 prose-headings:font-sans prose-headings:font-semibold prose-headings:text-[#2D2926] prose-headings:mb-6 prose-headings:mt-12 first:prose-headings:mt-0 prose-h2:text-3xl prose-h2:leading-tight prose-h3:text-2xl prose-p:text-[#4A4A4A] prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-base prose-a:text-[#2D2926] prose-a:underline prose-a:decoration-1 prose-a:underline-offset-2 prose-strong:text-[#2D2926] prose-strong:font-semibold prose-ul:my-8 prose-ul:space-y-3 prose-ol:my-8 prose-ol:space-y-3 prose-li:text-[#4A4A4A] prose-li:leading-[1.8] prose-code:text-[#1A1A1A] prose-code:bg-[#E8E8E8] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-pre:bg-[#1A1A1A] prose-pre:text-[#F5F5F5] prose-pre:p-6 prose-pre:rounded-lg prose-blockquote:border-l-2 prose-blockquote:border-[#2D2926] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#4A4A4A] prose-img:rounded-lg prose-img:my-8 prose-del:text-[#4A4A4A] prose-del:line-through",
  },
}

// Helper function to format date
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

// Helper function to calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} Min`
}
