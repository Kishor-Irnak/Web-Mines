"use client"

import { useState } from "react"
import { Sparkles, PieChart, BarChart2, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const servicesData = [
  {
    id: "ai-strategy",
    title: "AI Strategy",
    icon: Sparkles,
    desc: "We help you find chances for AI use and put the tools into your business.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    icon: PieChart,
    desc: "We lead your change with smart plans, pushing growth and making work simple.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "data-insights",
    title: "Data & Insights",
    icon: BarChart2,
    desc: "We turn your raw data into clear value using solid rules and great models.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
]

export default function Services() {
  // Default active card index (shows the third card on first paint)
  const [activeCard, setActiveCard] = useState(2)

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans below-fold">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-1 bg-gray-800 rounded-sm" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.15em] text-gray-600 uppercase">
              Services
            </span>
          </div>

          <h2 className="text-[36px] md:text-[52px] leading-[1.1] font-medium text-[#111111] mb-6 max-w-3xl tracking-tight">
            Comprehensive consulting<br className="hidden md:block" /> and intelligent innovation
          </h2>

          <p className="text-[#666666] text-[15px] md:text-[17px] leading-relaxed max-w-2xl mb-8">
            Whether you&apos;re optimizing today or building for<br className="hidden md:block" /> tomorrow we help you move faster with confidence.
          </p>

          <button
            className="bg-[#1A1A1A] rounded-full flex items-center pl-6 pr-2 py-2 gap-4 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Get started with our services"
          >
            <span className="text-[#CEFF00] text-[13px] font-bold tracking-[0.08em] uppercase">
              Get Started
            </span>
            <div className="bg-[#CEFF00] rounded-full w-[34px] h-[34px] flex items-center justify-center" aria-hidden="true">
              <ArrowUpRight className="text-[#1A1A1A]" size={18} strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Cards Wrapper */}
        <div className="bg-[#F6F6F6] p-2 md:p-2.5 rounded-[24px] border border-[#EDEDED]">
          <div className="flex flex-col lg:flex-row gap-2 md:gap-2.5" role="list">
            {servicesData.map((service, index) => {
              const isActive = activeCard === index
              const Icon = service.icon

              return (
                <div
                  key={service.id}
                  role="listitem"
                  onMouseEnter={() => setActiveCard(index)}
                  className={`bg-white rounded-[16px] p-6 lg:p-8 flex flex-col lg:flex-row min-h-[250px] lg:min-h-[280px] cursor-pointer transition-all duration-500 ease-out overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/[0.01]
                    ${isActive ? "lg:flex-[2] gap-6 lg:gap-8" : "lg:flex-1 gap-0"}`}
                >
                  {/* Text Content */}
                  <div className="flex flex-col flex-1 lg:min-w-[200px]">
                    <div className="bg-[#CEFF00] w-12 h-12 rounded-[10px] flex items-center justify-center mb-auto" aria-hidden="true">
                      <Icon className="text-[#1A1A1A]" size={22} strokeWidth={2.5} />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#111111] mb-2 whitespace-nowrap">
                        {service.title}
                      </h3>
                      <p
                        className={`text-[#666666] text-[14px] lg:text-[15px] leading-relaxed transition-all duration-500 ease-out
                          ${isActive ? "max-w-sm" : "pr-4"}`}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Image Content (smoothly unmasks as card expands) */}
                  <div
                    className={`hidden lg:block relative h-full min-h-[180px] transition-all duration-500 ease-out rounded-[12px] overflow-hidden
                      ${isActive ? "flex-1 opacity-100" : "w-0 opacity-0"}`}
                  >
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      quality={75}
                      sizes="(max-width: 1024px) 0px, 400px"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}