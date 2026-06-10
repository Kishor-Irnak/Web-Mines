<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webmines - AI & Strategy</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    },
                    colors: {
                        brandYellow: '#d6fb41',
                        brandBlue: {
                            dark: '#135fa8',
                            button: '#2565a8'
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background: linear-gradient(180deg, #2A83D5 0%, #4FA3E9 50%, #89CBF6 100%);
        }

        /* Container that applies the fade/blur effect on both ends */
        .scroller-wrapper {
            width: 100%;
            max-width: 1200px;
            overflow: hidden;
            /* Masks the edges to transparent, creating the smooth fade-in/out */
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            padding: 20px 0;
        }

        /* The continuous animation */
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .scroller-track {
            display: flex;
            width: max-content;
            /* Adjust the time (35s) to make it faster or slower */
            animation: scroll 35s linear infinite;
        }

        /* Optional: Pause the animation when a user hovers over the cards */
        .scroller-track:hover {
            animation-play-state: paused;
        }

        /* Fixed size for all cards */
        .hero-card {
            width: 210px;
            height: 250px;
            flex-shrink: 0;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 45px rgba(0, 50, 150, 0.2);
        }

        .glass-bg {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }
    </style>
</head>
<body class="antialiased min-h-screen relative overflow-x-hidden font-sans">
    
    <div class="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-overlay bg-[url('https://images.pexels.com/photos/33090657/pexels-photo-33090657.jpeg')] bg-cover bg-center"></div>

    <div class="relative z-10 flex flex-col min-h-screen pb-12">
        
        <nav class="flex items-center justify-between px-8 py-6 max-w-[1400px] mx-auto w-full">
            <div class="flex items-center gap-2 text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M4 16L12 4L16 10L12 16H4Z" opacity="0.8"/>
                    <path d="M14 13L18 7L22 13H14Z"/>
                </svg>
                <span class="font-semibold text-xl tracking-tight">Webmines</span>
            </div>

            <div class="hidden md:flex items-center gap-10 text-[12px] font-bold tracking-[0.1em] text-white">
                <a href="#" class="hover:text-brandYellow transition-colors">HOME</a>
                <a href="#" class="hover:text-brandYellow transition-colors">ABOUT US</a>
                <a href="#" class="hover:text-brandYellow transition-colors">SERVICES</a>
                <a href="#" class="hover:text-brandYellow transition-colors">BLOG</a>
            </div>

            <div>
                <button class="hidden md:block bg-brandYellow text-black px-6 py-2 rounded-full text-[12px] font-bold tracking-[0.1em] hover:bg-[#c4ec31] transition-colors shadow-lg">
                    CONTACT US
                </button>
                <button class="md:hidden bg-brandYellow p-2 rounded-md">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>

        <main class="flex-1 flex flex-col items-center justify-start mt-6 md:mt-12 px-4">
            
            <h1 class="text-center text-white text-[42px] md:text-[64px] leading-[1.1] font-semibold tracking-tight max-w-[700px]">
                Websites That Turn Visitors Into Customers
            </h1>
            
            <p class="text-center text-white/90 text-[15px] md:text-[18px] mt-6 max-w-[550px] leading-relaxed font-medium">
                We create high-converting landing pages for SaaS, clinics, salons, real estate businesses, and startups that want more leads and sales.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4 justify-center items-center">
                <button class="bg-[#1c558e]/80 backdrop-blur-sm border border-white/10 text-white px-8 py-3.5 rounded-full font-bold text-[12px] tracking-widest w-full sm:w-auto hover:bg-[#1c558e] transition-colors shadow-lg">
                    VIEW WORK
                </button>
                <button class="bg-brandYellow text-black px-6 py-3 rounded-full font-bold text-[12px] tracking-widest flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-[#c4ec31] transition-colors shadow-lg">
                    GET STARTED
                    <span class="bg-black text-white rounded-full w-7 h-7 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="19" x2="19" y2="5"></line>
                            <polyline points="9 5 19 5 19 15"></polyline>
                        </svg>
                    </span>
                </button>
            </div>

            <div class="scroller-wrapper mt-16">
                <div class="scroller-track bg-transparent">
                    
                    <div class="flex gap-6 bg-transparent pr-6">
                       
    

                        <div class="hero-card bg-white p-4">
                            <div class="flex justify-between items-center mb-4">
                                <div class="w-6 h-6 bg-black rounded-full text-white flex items-center justify-center text-xs">~</div>
                                <div class="text-xs font-bold bg-gray-100 px-2 py-1 rounded">Performance</div>
                            </div>
                            <div class="text-3xl font-bold mb-1">49%</div>
                            <div class="w-full h-[1px] bg-gray-200 my-3"></div>
                            <div class="grid grid-cols-2 gap-2 text-[10px] text-gray-500 font-semibold">
                                <div class="bg-gray-50 p-2 rounded">Strategy</div>
                                <div class="bg-gray-50 p-2 rounded">AI Focused</div>
                                <div class="bg-gray-50 p-2 rounded">Grow Faster</div>
                                <div class="bg-gray-50 p-2 rounded">Build Smart</div>
                            </div>
                        </div>

                        <div class="hero-card bg-white p-4 flex flex-col justify-between">
                            <div>
                                <div class="flex gap-2 mb-3">
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Ional</span>
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Strategic</span>
                                </div>
                                <div class="flex gap-2 mb-4">
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Smarter</span>
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Grow Faster</span>
                                </div>
                            </div>
                            <div>
                                <div class="text-xs text-gray-500 font-semibold mb-1">Data Points</div>
                                <div class="text-4xl font-bold tracking-tight">520k+</div>
                            </div>
                        </div>

                        <div class="hero-card bg-gradient-to-br from-[#6cb0f9] to-[#2576da] p-6 flex flex-col items-center justify-center text-center text-white relative overflow-hidden border-2 border-white/60">
                            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md mb-4 border border-white/30 shadow-lg">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-1">Data training</h3>
                            <p class="text-xs text-blue-100 font-medium">Upload your content</p>
                        </div>

                        <div class="hero-card bg-[#1a1a1a] p-5 text-white flex flex-col justify-center border border-gray-800">
                            <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <h3 class="text-lg font-semibold leading-tight text-gray-100">
                                Expertise that Combines Strategy, Data, and Artificial Intelligence
                            </h3>
                        </div>

                        <div class="hero-card bg-white p-4">
                            <div class="text-xs font-bold mb-1">Intelligence</div>
                            <div class="text-[10px] text-gray-400 mb-6">Daily Devices</div>
                            <div class="relative w-full h-24 flex items-end gap-1">
                                <div class="w-1/6 bg-blue-100 h-[30%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-200 h-[50%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-300 h-[40%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-400 h-[70%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-500 h-[60%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-600 h-[90%] rounded-t-sm"></div>
                                <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <polyline fill="none" stroke="#2565a8" stroke-width="3" points="0,70 20,50 40,60 60,30 80,40 100,10"/>
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div class="flex gap-6 pr-6" aria-hidden="true">
                        <div class="hero-card glass-bg p-4 flex flex-col gap-2 opacity-80">
                            <div class="w-full h-8 bg-white/20 rounded-md"></div>
                            <div class="w-full h-24 bg-white/10 rounded-md mt-2"></div>
                        </div>
                        <div class="hero-card bg-white p-4">
                            <div class="flex justify-between items-center mb-4">
                                <div class="w-6 h-6 bg-black rounded-full text-white flex items-center justify-center text-xs">~</div>
                                <div class="text-xs font-bold bg-gray-100 px-2 py-1 rounded">Performance</div>
                            </div>
                            <div class="text-3xl font-bold mb-1">49%</div>
                            <div class="w-full h-[1px] bg-gray-200 my-3"></div>
                            <div class="grid grid-cols-2 gap-2 text-[10px] text-gray-500 font-semibold">
                                <div class="bg-gray-50 p-2 rounded">Strategy</div>
                                <div class="bg-gray-50 p-2 rounded">AI Focused</div>
                                <div class="bg-gray-50 p-2 rounded">Grow Faster</div>
                                <div class="bg-gray-50 p-2 rounded">Build Smart</div>
                            </div>
                        </div>
                        <div class="hero-card bg-white p-4 flex flex-col justify-between">
                            <div>
                                <div class="flex gap-2 mb-3">
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Ional</span>
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Strategic</span>
                                </div>
                                <div class="flex gap-2 mb-4">
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Smarter</span>
                                    <span class="text-[10px] font-bold px-2 py-1 bg-gray-100 rounded">Grow Faster</span>
                                </div>
                            </div>
                            <div>
                                <div class="text-xs text-gray-500 font-semibold mb-1">Data Points</div>
                                <div class="text-4xl font-bold tracking-tight">520k+</div>
                            </div>
                        </div>
                        <div class="hero-card bg-gradient-to-br from-[#6cb0f9] to-[#2576da] p-6 flex flex-col items-center justify-center text-center text-white relative overflow-hidden border-2 border-white/60">
                            <div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md mb-4 border border-white/30 shadow-lg">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold mb-1">Data training</h3>
                            <p class="text-xs text-blue-100 font-medium">Upload your content</p>
                        </div>
                        <div class="hero-card bg-[#1a1a1a] p-5 text-white flex flex-col justify-center border border-gray-800">
                            <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <h3 class="text-lg font-semibold leading-tight text-gray-100">
                                Expertise that Combines Strategy, Data, and Artificial Intelligence
                            </h3>
                        </div>
                        <div class="hero-card bg-white p-4">
                            <div class="text-xs font-bold mb-1">Intelligence</div>
                            <div class="text-[10px] text-gray-400 mb-6">Daily Devices</div>
                            <div class="relative w-full h-24 flex items-end gap-1">
                                <div class="w-1/6 bg-blue-100 h-[30%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-200 h-[50%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-300 h-[40%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-400 h-[70%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-500 h-[60%] rounded-t-sm"></div>
                                <div class="w-1/6 bg-blue-600 h-[90%] rounded-t-sm"></div>
                                <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <polyline fill="none" stroke="#2565a8" stroke-width="3" points="0,70 20,50 40,60 60,30 80,40 100,10"/>
                                </svg>
                            </div>
                        </div>
                        <div class="hero-card glass-bg p-4 flex flex-col justify-end opacity-80">
                            <div class="w-full h-32 bg-white/10 rounded-md"></div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div class="mt-8 mb-16 flex flex-col items-center relative z-20">
                <p class="text-white text-sm font-medium">Rated 4.9/5 by 4,900+ clients</p>
                <div class="flex items-center gap-1 mt-2">
                    <svg class="w-4 h-4 text-brandYellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <svg class="w-4 h-4 text-brandYellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <svg class="w-4 h-4 text-brandYellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <svg class="w-4 h-4 text-brandYellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    <svg class="w-4 h-4 text-brandYellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
            </div>

        </main>

        <div class="w-full bg-white flex items-center justify-center py-6 gap-8 md:gap-16 px-4 flex-wrap mt-auto relative z-20">
            <div class="text-gray-400 font-bold flex items-center gap-2"><div class="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
            <div class="text-gray-400 font-bold flex items-center gap-2"><div class="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
            <div class="text-gray-400 font-bold flex items-center gap-2"><div class="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
            <div class="text-gray-400 font-bold hidden sm:flex items-center gap-2"><div class="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
            <div class="text-gray-400 font-bold hidden md:flex items-center gap-2"><div class="w-4 h-4 bg-gray-400 rotate-45"></div>Logoipsum</div>
        </div>

    </div>
</body>
</html>