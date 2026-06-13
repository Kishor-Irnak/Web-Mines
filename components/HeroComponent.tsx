import React from 'react';

export default function HeroComponent() {
    return (
        <section className="w-full max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">
            <div className="relative w-full rounded-[2rem] overflow-hidden min-h-[550px] md:min-h-[650px] flex flex-col justify-center">
                {/* Background Image */}
                <img
                    src="/cta.jpg"
                    alt="Hero background landscape"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left px-6 py-12 md:px-16 lg:px-24 w-full max-w-4xl mx-auto md:mx-0">

                    {/* Trusted By Section */}
                    <div className="flex flex-col md:flex-row items-center gap-3 mb-6 md:mb-8">
                        <span className="text-white/90 text-sm md:text-base font-medium">
                            Trusted over 5,000+
                        </span>
                        <div className="flex -space-x-2">
                            <img
                                src="/test1.jpg"
                                alt="Avatar 1"
                                className="w-8 h-8 rounded-full border-2 border-white/20 object-cover"
                            />
                            <img
                                src="/test2.jpg"
                                alt="Avatar 2"
                                className="w-8 h-8 rounded-full border-2 border-white/20 object-cover"
                            />
                            <img
                                src="/test3.jpg"
                                alt="Avatar 3"
                                className="w-8 h-8 rounded-full border-2 border-white/20 object-cover"
                            />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.15] tracking-tight mb-4 md:mb-6 max-w-2xl">
                        We combine human insight with artificial intelligence
                    </h1>

                    {/* Description Paragraph */}
                    <p className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl md:max-w-2xl font-light">
                        Our consulting team bridges strategic thinking and advanced AI technologies to help companies streamline processes, improve decision-making, and create intelligent digital experiences.
                    </p>

                    {/* CTA Button */}
                    <button className="group inline-flex items-center gap-4 bg-[#d2f34c] text-black rounded-full pl-6 pr-2 py-2 hover:bg-[#c2e143] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] mt-[2px]">
                            Get Started
                        </span>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>
                    </button>

                </div>
            </div>
        </section>
    );
}