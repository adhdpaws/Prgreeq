"use client"

import { useState, useRef } from "react"
import type { ServiceContent } from "@/config/solutionServices.config"

interface SolutionContentProps {
  services: ServiceContent[]
}

export function SolutionContent({ services }: SolutionContentProps) {
  const [activeService, setActiveService] = useState(services[0]?.id || "")
  const contentRef = useRef<HTMLDivElement>(null)

  const currentService = services.find(s => s.id === activeService) || services[0]

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId)
    
    // Scroll to content on small screens
    if (window.innerWidth < 1024 && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }, 100)
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Left Sidebar - Service Navigation */}
        <aside className="w-full lg:w-64 lg:sticky lg:top-24 lg:self-start mx-auto lg:mx-0">
          <h2 className="text-[#2D2926] text-xl font-semibold mb-4 text-center lg:text-left">Our Services</h2>
          <nav className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeService === service.id
                    ? "bg-[#2D2926] text-white"
                    : "bg-[#F5F5F3] text-[#666666] hover:bg-[#E5E5E3]"
                }`}
              >
                <span className="text-sm font-medium">{service.title}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Right Content - Service Details */}
        <div ref={contentRef} className="flex-1 scroll-mt-6 mx-auto">
          <div className="max-w-5xl mx-auto">
            {/* Service Title - Compact */}
            <div className="mb-6 text-center lg:text-left">
              <h1 className="text-[#2D2926] text-2xl sm:text-3xl font-bold">
                {currentService.title}
              </h1>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid gap-4 md:gap-5">
              {/* What We Offer - Featured Card */}
              <div className="bg-gradient-to-br from-[#2D2926] to-[#4A4744] rounded-2xl p-6 sm:p-8 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-semibold">What We Offer</h2>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {currentService.whatWeOffer}
                </p>
              </div>

              {/* Key Features - Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {currentService.keyFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-[#E5E5E3] rounded-xl p-4 hover:shadow-md hover:border-[#2D2926]/30 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-md bg-[#2D2926] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg 
                          className="w-3 h-3 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={3} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <span className="text-[#666666] text-sm leading-relaxed flex-1">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
