import Image from "next/image"

const insights = [
  {
    id: "landing-page",
    title: "High-Converting Landing Pages:\nTurning Visitors into Leads",
    image: "/insight_landing_page.png",
  },
  {
    id: "portfolio",
    title: "Building a Portfolio Site:\nShowcase Your True Value",
    image: "/insight_portfolio.png",
  },
  {
    id: "saas",
    title: "SaaS Landing Pages:\nDesigning for Software Growth",
    image: "/insight_saas.png",
  },
]

export default function InsightsSection() {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 font-sans below-fold">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 lg:mb-14 gap-8">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-gray-500 mb-4 sm:mb-5 uppercase">
            <span className="text-[10px] leading-none" aria-hidden="true">&bull;</span>
            Blog and articles
          </div>

          <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-5 leading-[1.1]">
            Web Development Insights
          </h2>

          <p className="text-gray-500 text-sm sm:text-base max-w-[280px] sm:max-w-md lg:max-w-[420px] leading-relaxed">
            Explore our latest articles on building high-converting landing pages,
            portfolio sites, and SaaS web applications.
          </p>
        </div>

        <button className="w-full lg:w-auto bg-[#1a1a1a] text-[#ccff00] px-8 py-3.5 sm:py-4 rounded-full text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase hover:bg-black transition-colors shrink-0">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {insights.map((item) => (
          <article
            key={item.id}
            className="relative rounded-3xl overflow-hidden group w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] lg:h-[460px]"
          >
            {/* Placeholder background while image loads */}
            <div className="absolute inset-0 bg-gray-200" aria-hidden="true" />

            {/*
              Insight images are ~300KB PNGs. Next.js will serve them as
              WebP at the appropriate viewport size (~30–60KB each).
            */}
            <Image
              src={item.image}
              alt={item.title.replace("\n", " ")}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              quality={80}
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" aria-hidden="true" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 pointer-events-none">
              <h3 className="text-white text-lg sm:text-xl font-medium leading-snug whitespace-pre-line">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}