import Image from "next/image"

const cardImages = [
  "/card1.png",
  "/card2.png",
  "/card3.png",
  "/card4.png",
  "/card5.png",
  "/card6.png",
]

export default function Hero() {
  return (
    <>
      {/* Outer White Background */}
      <div className="bg-white antialiased min-h-screen flex flex-col font-sans p-2 md:p-3 overflow-x-hidden">

        {/* Main Hero Container using the blue palette with rounded corners */}
        <div className="bg-gradient-to-b from-[#1C80CD] via-[#56A5E3] to-[#4BA9E0] relative overflow-hidden rounded-[24px] md:rounded-[32px] flex-1 flex flex-col">

          {/* Background Overlay — CSS gradient noise replaces the external Pexels request */}
          <div
            className="absolute inset-0 z-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 flex flex-col flex-1 pb-12">

            {/* Navbar */}
            <nav
              className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto w-full"
              aria-label="Main navigation"
            >
              <div className="flex items-center gap-2 text-[#F7F8F7]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#F7F8F7"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4 16L12 4L16 10L12 16H4Z" opacity="0.8" />
                  <path d="M14 13L18 7L22 13H14Z" />
                </svg>
                <span className="font-semibold text-xl tracking-tight">Webmines</span>
              </div>

              <div className="hidden md:flex items-center gap-10 text-[12px] font-bold tracking-[0.1em] text-[#F7F8F7]">
                <a href="#" className="hover:text-[#CBF857] transition-colors">HOME</a>
                <a href="#" className="hover:text-[#CBF857] transition-colors">ABOUT US</a>
                <a href="#" className="hover:text-[#CBF857] transition-colors">SERVICES</a>
                <a href="#" className="hover:text-[#CBF857] transition-colors">BLOG</a>
              </div>

              <div>
                <button
                  className="hidden md:block bg-[#CBF857] text-[#141210] px-6 py-2 rounded-full text-[12px] font-bold tracking-[0.1em] hover:bg-[#E8F98A] transition-colors shadow-lg"
                  aria-label="Contact us"
                >
                  CONTACT US
                </button>
                <button
                  className="md:hidden bg-[#CBF857] p-2 rounded-md hover:bg-[#E8F98A] transition-colors"
                  aria-label="Open menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#141210"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                </button>
              </div>
            </nav>

            {/* Main Hero Content */}
            <main className="flex-1 flex flex-col items-center justify-start mt-6 md:mt-12 px-4">

              <h1 className="text-center text-[#F7F8F7] text-[42px] md:text-[64px] leading-[1.1] font-semibold tracking-tight max-w-[700px]">
                Websites That Turn Visitors Into Customers
              </h1>

              <p className="text-center text-[#F7F8F7]/90 text-[15px] md:text-[18px] mt-6 max-w-[550px] leading-relaxed font-medium">
                We create high-converting landing pages for SaaS, clinics, salons, real
                estate businesses, and startups that want more leads and sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 justify-center items-center">
                <button className="bg-[#1C80CD]/80 backdrop-blur-sm border border-[#F7F8F7]/20 text-[#F7F8F7] px-8 py-3.5 rounded-full font-bold text-[12px] tracking-widest w-full sm:w-auto hover:bg-[#1C80CD] transition-colors shadow-lg">
                  VIEW WORK
                </button>
                <button className="bg-[#CBF857] text-[#141210] px-6 py-3 rounded-full font-bold text-[12px] tracking-widest flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-[#E8F98A] transition-colors shadow-lg">
                  GET STARTED
                  <span className="bg-[#141210] text-[#F7F8F7] rounded-full w-7 h-7 flex items-center justify-center" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="19" x2="19" y2="5" />
                      <polyline points="9 5 19 5 19 15" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Scroller Animation — CSS classes defined in globals.css */}
              <div className="scroller-wrapper mt-16">
                <div className="scroller-track bg-transparent">

                  {/* First set of cards */}
                  <div className="flex gap-6 bg-transparent pr-6">
                    {cardImages.map((src, index) => (
                      <div key={`card-1-${index}`} className="hero-card bg-transparent border-0 overflow-hidden">
                        <Image
                          src={src}
                          alt={`Portfolio example ${index + 1}`}
                          width={210}
                          height={250}
                          className="w-full h-full object-cover object-top rounded-[20px]"
                          loading="lazy"
                          quality={80}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Duplicated set for continuous loop */}
                  <div className="flex gap-6 pr-6" aria-hidden="true">
                    {cardImages.map((src, index) => (
                      <div key={`card-2-${index}`} className="hero-card bg-transparent border-0 overflow-hidden">
                        <Image
                          src={src}
                          alt=""
                          width={210}
                          height={250}
                          className="w-full h-full object-cover object-top rounded-[20px]"
                          loading="lazy"
                          quality={80}
                        />
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Social Proof / Reviews */}
              <div className="mt-8 mb-16 flex flex-col items-center relative z-20">
                <p className="text-[#F7F8F7] text-sm font-medium">Rated 4.9/5 by 4,900+ clients</p>
                <div className="flex items-center gap-1 mt-2" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#CBF857]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

            </main>

          </div>
        </div>

        {/* Bottom Categories Bar */}
        <div
          className="w-full bg-white flex items-center justify-center py-6 gap-6 md:gap-10 px-4 flex-wrap relative z-20 mt-4 md:mt-6"
          role="list"
          aria-label="Service categories"
        >
          {[
            {
              label: "FASHION",
              path: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
            },
            {
              label: "SAAS LANDING PAGE",
              path: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
            },
            {
              label: "CLINIC LANDING PAGE",
              path: "M9 12h6m-3-3v6m8-3a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              label: "REAL ESTATE WEBSITE",
              path: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            },
            {
              label: "E-COMMERCE STORE",
              path: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
            },
          ].map(({ label, path }) => (
            <div
              key={label}
              role="listitem"
              className="text-gray-600 hover:text-[#1C80CD] transition-colors font-semibold text-[11px] md:text-[12px] tracking-widest flex items-center gap-2"
            >
              <svg
                className="w-4 h-4 text-[#1C80CD]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={path} />
              </svg>
              {label}
            </div>
          ))}
        </div>

      </div>
    </>
  )
}