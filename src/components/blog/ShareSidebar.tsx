"use client"

import { Facebook, Twitter, Linkedin, Link2, Instagram } from "lucide-react"

interface ShareSidebarProps {
  url: string
  title: string
  className?: string
}

export function ShareSidebar({ url, title, className = "" }: ShareSidebarProps) {
  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/",
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
  }

  return (
    <aside className={`grid grid-cols-3 gap-4 justify-items-center lg:flex lg:flex-col lg:gap-6 lg:sticky lg:top-32 lg:self-start lg:mt-12 ${className}`}>
      {shareLinks.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 lg:w-6 lg:h-6 flex items-center justify-center text-[#2D2926] hover:text-[#666666] transition-colors duration-200"
            aria-label={`Share on ${link.name}`}
          >
            <Icon className="w-5 h-5 lg:w-4 lg:h-4" strokeWidth={1.5} />
          </a>
        )
      })}
      
      <button
        onClick={copyToClipboard}
        className="w-10 h-10 lg:w-6 lg:h-6 flex items-center justify-center text-[#2D2926] hover:text-[#666666] transition-colors duration-200"
        aria-label="Copy link"
      >
        <Link2 className="w-5 h-5 lg:w-4 lg:h-4" strokeWidth={1.5} />
      </button>
    </aside>
  )
}
