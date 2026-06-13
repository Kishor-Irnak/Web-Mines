import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans antialiased text-[#141210] below-fold">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1 h-1 rounded-full bg-gray-400" aria-hidden="true" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#141210]/60 uppercase">
              About Us
            </span>
          </div>

          <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.1] tracking-tight max-w-4xl">
            A technical development partner<br className="hidden md:block" /> dedicated to building{" "}
            <span className="inline-flex items-center align-middle mx-1">
              {/* Pie Chart Icon */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="18" cy="18" r="16" fill="#4BA9E0" />
                <path d="M18 18L28.5 7.5C31.5 10.5 33 14 33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3C22 3 25.5 4.5 28.5 7.5L18 18Z" fill="#56A5E3" />
                <path d="M18 18L28.5 7.5C25.5 4.5 22 3 18 3V18Z" fill="white" />
              </svg>
            </span>
            high-converting<br className="hidden md:block" />
            <span className="text-[#141210]/40 font-normal">
              websites and{" "}
              <span className="inline-flex items-center align-middle mx-1">
                {/* Lightbulb Icon */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="18" cy="18" r="16" fill="#CBF857" />
                  <path d="M18 24C16.8954 24 16 23.1046 16 22H20C20 23.1046 19.1046 24 18 24ZM14.5 19.5C14.5 16.5 12 15 12 12C12 8.68629 14.6863 6 18 6C21.3137 6 24 8.68629 24 12C24 15 21.5 16.5 21.5 19.5H14.5ZM15 21H21V20H15V21Z" fill="#141210" />
                </svg>
              </span>
              smarter systems
            </span>
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:h-[340px]">

          {/* Card 1: Image & Stats */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#56A5E3] to-[#1C80CD] p-4 flex flex-col justify-between h-[340px] md:h-full group">
            {/* Background Image — next/image with fill for object-cover behaviour */}
            <div className="absolute inset-0 mix-blend-overlay opacity-80">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600"
                alt=""
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Top Bar inside Card */}
            <div className="relative z-10 flex justify-between items-start w-full">
              <div className="text-white font-extrabold text-2xl tracking-tighter pl-2 pt-1">
                DEV<span className="text-xl align-super">&deg;</span>
              </div>
              <button
                className="bg-white/90 backdrop-blur-sm w-9 h-9 rounded-xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                aria-label="View performance stats"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="5" y="14" width="3" height="6" rx="1" fill="#141210" />
                  <rect x="10.5" y="8" width="3" height="12" rx="1" fill="#141210" />
                  <rect x="16" y="4" width="3" height="16" rx="1" fill="#141210" />
                </svg>
              </button>
            </div>

            {/* Bottom White Overlay */}
            <div className="relative z-10 bg-white rounded-xl p-5 shadow-xl transform transition-transform group-hover:-translate-y-1">
              <h3 className="text-5xl font-semibold tracking-tight mb-2">42%</h3>
              <p className="text-sm font-medium text-[#141210]/80 leading-relaxed pr-2">
                Average reduction in Return to Origin (RTO) rates through our optimized e-commerce architecture.
              </p>
            </div>
          </div>

          {/* Card 2: Quote & Metrics */}
          <div className="bg-[#F7F8F7] rounded-2xl p-7 flex flex-col justify-between h-[340px] md:h-full">
            <div>
              <p className="text-sm font-medium text-[#141210]/60 mb-2">Commitment to conversion</p>
              <h3 className="text-5xl font-medium tracking-tight">100%</h3>
            </div>

            <div>
              {/* Avatars Stack — pravatar.cc remote images via next/image */}
              <div className="flex -space-x-3 mb-4" aria-label="Client avatars">
                <Image
                  src="https://i.pravatar.cc/100?img=11"
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full border-[3px] border-[#F7F8F7] object-cover"
                  loading="lazy"
                  quality={70}
                />
                <Image
                  src="https://i.pravatar.cc/100?img=47"
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full border-[3px] border-[#F7F8F7] object-cover"
                  loading="lazy"
                  quality={70}
                />
                <Image
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full border-[3px] border-[#F7F8F7] object-cover"
                  loading="lazy"
                  quality={70}
                />
                <Image
                  src="https://i.pravatar.cc/100?img=32"
                  alt="Client"
                  width={40}
                  height={40}
                  className="rounded-full border-[3px] border-[#F7F8F7] object-cover"
                  loading="lazy"
                  quality={70}
                />
              </div>

              <p className="text-[14px] font-medium leading-relaxed text-[#141210]/90">
                &ldquo;They didn&apos;t just build us a website; they engineered a complete
                conversion system. Our brand practically sells itself now.&rdquo;
              </p>
            </div>
          </div>

          {/* Column 3: Split Cards */}
          <div className="flex flex-col gap-4 h-[340px] md:h-full">

            {/* Top Green Card */}
            <div className="bg-[#CBF857] rounded-2xl p-7 flex-1 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#141210]/70 mb-2">Performance</p>
              <h3 className="text-5xl font-medium tracking-tight mb-3">99+</h3>
              <p className="text-sm font-medium leading-relaxed max-w-[220px]">
                Average Lighthouse score achieved across our modern web application builds.
              </p>
            </div>

            {/* Bottom Black Card */}
            <div className="bg-[#141210] rounded-2xl px-7 flex items-center justify-between text-[#F7F8F7] h-[90px] shrink-0">
              <span className="text-sm text-[#F7F8F7]/70 font-medium">Projects Launched</span>
              <span className="text-4xl font-medium tracking-tight">50+</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}