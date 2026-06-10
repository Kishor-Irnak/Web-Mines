import React from 'react';

export default function Hero() {
    const cardImages = [
        '/card1.png',
        '/card2.png',
        '/card3.png',
        '/card4.png',
        '/card5.png',
        '/card6.png',
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        .scroller-wrapper {
            width: 100%;
            max-width: 1200px;
            overflow: hidden;
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            padding: 20px 0;
        }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .scroller-track {
            display: flex;
            width: max-content;
            animation: scroll 35s linear infinite;
        }

        .scroller-track:hover {
            animation-play-state: paused;
        }

        .hero-card {
            width: 210px;
            height: 250px;
            flex-shrink: 0;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(247, 248, 247, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 45px rgba(28, 128, 205, 0.2);
        }

        .glass-bg {
            background: rgba(247, 248, 247, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
      `}} />

            {/* Main Background using the new blue palette */}
            <div className="bg-gradient-to-b from-[#1C80CD] via-[#56A5E3] to-[#4BA9E0] antialiased min-h-screen relative overflow-x-hidden font-sans">

                {/* Background Overlay */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay bg-[url('https://images.pexels.com/photos/33090657/pexels-photo-33090657.jpeg')] bg-cover bg-center"></div>

                <div className="relative z-10 flex flex-col min-h-screen pb-12">

                    {/* Navbar */}
                    <nav className="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto w-full">
                        <div className="flex items-center gap-2 text-[#F7F8F7]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F7F8F7">
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
                            <button className="hidden md:block bg-[#CBF857] text-[#141210] px-6 py-2 rounded-full text-[12px] font-bold tracking-[0.1em] hover:bg-[#E8F98A] transition-colors shadow-lg">
                                CONTACT US
                            </button>
                            <button className="md:hidden bg-[#CBF857] p-2 rounded-md hover:bg-[#E8F98A] transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141210" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                            Building the future with AI and strategy
                        </h1>

                        <p className="text-center text-[#F7F8F7]/90 text-[15px] md:text-[18px] mt-6 max-w-[550px] leading-relaxed font-medium">
                            We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 justify-center items-center">
                            <button className="bg-[#1C80CD]/80 backdrop-blur-sm border border-[#F7F8F7]/20 text-[#F7F8F7] px-8 py-3.5 rounded-full font-bold text-[12px] tracking-widest w-full sm:w-auto hover:bg-[#1C80CD] transition-colors shadow-lg">
                                VIEW DEMO
                            </button>
                            <button className="bg-[#CBF857] text-[#141210] px-6 py-3 rounded-full font-bold text-[12px] tracking-widest flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-[#E8F98A] transition-colors shadow-lg">
                                GET STARTED
                                <span className="bg-[#141210] text-[#F7F8F7] rounded-full w-7 h-7 flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="19" x2="19" y2="5" />
                                        <polyline points="9 5 19 5 19 15" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        {/* Scroller Animation */}
                        <div className="scroller-wrapper mt-16">
                            <div className="scroller-track bg-transparent">

                                {/* First set of cards */}
                                <div className="flex gap-6 bg-transparent pr-6">
                                    {cardImages.map((src, index) => (
                                        <div key={`card-1-${index}`} className="hero-card bg-transparent border-0 overflow-hidden">
                                            <img src={src} alt={`Card ${index + 1}`} className="w-full h-full object-cover object-top rounded-[20px]" />
                                        </div>
                                    ))}
                                </div>

                                {/* Duplicated set for continuous loop */}
                                <div className="flex gap-6 pr-6" aria-hidden="true">
                                    {cardImages.map((src, index) => (
                                        <div key={`card-2-${index}`} className="hero-card bg-transparent border-0 overflow-hidden">
                                            <img src={src} alt={`Card ${index + 1} clone`} className="w-full h-full object-cover object-top rounded-[20px]" />
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Social Proof / Reviews */}
                        <div className="mt-8 mb-16 flex flex-col items-center relative z-20">
                            <p className="text-[#F7F8F7] text-sm font-medium">Rated 4.9/5 by 4,900+ clients</p>
                            <div className="flex items-center gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-[#CBF857]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                    </main>

                    {/* Bottom Brand Bar */}
                    <div className="w-full bg-[#F7F8F7] flex items-center justify-center py-6 gap-8 md:gap-16 px-4 flex-wrap mt-auto relative z-20">
                        <div className="text-gray-400 font-bold flex items-center gap-2"><div className="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
                        <div className="text-gray-400 font-bold flex items-center gap-2"><div className="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
                        <div className="text-gray-400 font-bold flex items-center gap-2"><div className="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
                        <div className="text-gray-400 font-bold hidden sm:flex items-center gap-2"><div className="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
                        <div className="text-gray-400 font-bold hidden md:flex items-center gap-2"><div className="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
                    </div>

                </div>
            </div>
        </>
    );
}