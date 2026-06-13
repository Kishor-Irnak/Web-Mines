"use client"

import { useRef } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  companyName: string
  logo: React.ReactNode
  quote: string
  author: string
  companyRole: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    companyName: "NorthPeak Digital",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    quote:
      "Working with Webmines was one of the best decisions for our business. They transformed our outdated website into a modern platform that loads fast, looks incredible, and converts visitors into customers.",
    author: "Michael Carter",
    companyRole: "Founder, NorthPeak Digital",
    image: "/test1.jpg",
  },
  {
    id: 2,
    companyName: "Umbrella Systems",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12a10.06 10.06 0 0 0-20 0Z" />
        <path d="M12 12v8a2 2 0 0 0 4 0" />
        <path d="M12 2v1" />
      </svg>
    ),
    quote:
      "The team delivered exactly what they promised. Their attention to detail, responsiveness, and technical expertise made the entire development process smooth from start to finish.",
    author: "Kevin Huang",
    companyRole: "Product Manager, Umbrella Systems",
    image: "/test2.jpg",
  },
  {
    id: 3,
    companyName: "Vision Labs",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    quote:
      "Webmines didn't just build our website—they solved business problems with thoughtful design and scalable engineering. Their communication and execution exceeded expectations.",
    author: "Daniel Brooks",
    companyRole: "CTO, Vision Labs",
    image: "/test3.jpg",
  },
  {
    id: 4,
    companyName: "Cactus Global",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20" />
        <path d="M5 8v4a7 7 0 0 0 7 7" />
        <path d="M19 8v4a7 7 0 0 1-7 7" />
      </svg>
    ),
    quote:
      "From UI/UX to performance optimization, every aspect of the project was handled professionally. We've seen a noticeable increase in engagement and lead generation after launch.",
    author: "Sarah Patel",
    companyRole: "Marketing Lead, Cactus Global",
    image: "/test4.jpg",
  },
  {
    id: 5,
    companyName: "Stellar Works",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    quote:
      "Their developers understood our vision immediately and delivered a polished product ahead of schedule. The final result feels premium and performs flawlessly across devices.",
    author: "Ryan Mitchell",
    companyRole: "Founder, Stellar Works",
    image: "/test5.jpg",
  },
  {
    id: 6,
    companyName: "BrightCore Technologies",
    logo: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
    quote:
      "The Webmines team combines creativity with technical excellence. They built a website that perfectly represents our brand while maintaining exceptional speed and usability.",
    author: "James Wilson",
    companyRole: "Director, BrightCore Technologies",
    image: "/test6.jpg",
  },
]

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.firstElementChild?.clientWidth || 350
      const gap = 24
      carouselRef.current.scrollBy({
        left: direction === "left" ? -(scrollAmount + gap) : scrollAmount + gap,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white font-sans below-fold">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14">
          <div className="text-center md:text-left flex-1 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-gray-900/60 mb-4 md:mb-5">
              <span className="w-1 h-1 bg-gray-900/60 rounded-full" aria-hidden="true" />
              Testimonials
            </span>
            <h2 className="text-[32px] sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.1] font-medium text-gray-900 mb-4 tracking-tight">
              What they say about us?
            </h2>
            <p className="text-[15px] md:text-base text-gray-500 max-w-[280px] sm:max-w-sm md:max-w-md mx-auto md:mx-0 leading-relaxed">
              Here&apos;s what they shared about their experience working with our team.
            </p>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex gap-3 mb-2" role="group" aria-label="Carousel navigation">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-600 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-gray-100/80 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-600 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div
          ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Client testimonials carousel"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative flex-shrink-0 snap-center md:snap-start w-[85vw] sm:w-[320px] md:w-[350px] lg:w-[380px] h-[460px] md:h-[500px] lg:h-[520px] rounded-[1.5rem] overflow-hidden group shadow-sm"
            >
              {/* Background Image */}
              <Image
                src={testimonial.image}
                alt={`${testimonial.author} — ${testimonial.companyRole}`}
                fill
                className="object-cover bg-gray-200"
                loading="lazy"
                quality={80}
                sizes="(max-width: 640px) 85vw, (max-width: 768px) 320px, (max-width: 1024px) 350px, 380px"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/95 via-[#1a0f0a]/40 to-transparent" aria-hidden="true" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                {/* Logo Area */}
                <div className="flex items-center gap-2 text-white/95 font-medium text-[17px] tracking-wide">
                  {testimonial.logo}
                  <span>{testimonial.companyName}</span>
                </div>

                {/* Bottom Text Area */}
                <div className="flex flex-col gap-3 md:gap-4 mt-auto">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white opacity-90 mb-1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M10 11L8 15H10V19H4V15L6 11H4V7H10V11ZM20 11L18 15H20V19H14V15L16 11H14V7H20V11Z" fill="currentColor" />
                  </svg>

                  <blockquote className="text-white/95 text-[15px] md:text-[16px] leading-[1.6] font-light">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <p className="text-right mt-1 md:mt-2 text-white/70 text-[13px] md:text-sm font-light">
                    — {testimonial.author}, {testimonial.companyRole}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-3 mt-4" role="group" aria-label="Carousel navigation">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center text-gray-600"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}