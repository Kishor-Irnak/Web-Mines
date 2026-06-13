'use client';

import React from 'react';

export default function Footer() {
    return (
        <section className="w-full max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 font-sans bg-white">
            <footer className="bg-[#121212] text-white rounded-[2rem] p-8 md:p-14 lg:p-16 w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-col max-w-[380px]">
                        <div className="flex items-center gap-3">
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 17.5L10 8.5C10.5 7.5 11.5 7.5 12 8.5L14 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 7.5L19.5 17.5" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-[22px] font-medium tracking-tight">Aeline</span>
                        </div>
                        <p className="mt-5 text-[#999999] text-[15px] leading-relaxed">
                            Easily adapt to changes and scale your operations with our flexible infrastructure, designed to support your business growth.
                        </p>
                    </div>

                    <div className="flex gap-20 lg:gap-32 mt-12 md:mt-2">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[#E0E0E0] hover:text-white transition-colors text-[15px]">Home</a>
                            <a href="#" className="text-[#E0E0E0] hover:text-white transition-colors text-[15px]">About us</a>
                            <a href="#" className="text-[#E0E0E0] hover:text-white transition-colors text-[15px]">Services</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[#E0E0E0] hover:text-white transition-colors text-[15px]">Pricing</a>
                            <a href="#" className="text-[#E0E0E0] hover:text-white transition-colors text-[15px]">Blog</a>
                            <a href="#" className="text-[#E0E0E0] hover:text-white transition-colors text-[15px]">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 md:mt-24 w-full max-w-[400px]">
                    <h4 className="text-[16px] text-[#E5E5E5] mb-5">Subscribe our newsletter</h4>
                    <form className="flex items-center bg-[#242424] rounded-full p-[6px] border border-[#333333] focus-within:border-[#555555] transition-colors" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border-none outline-none text-white px-5 w-full text-[15px] placeholder:text-[#666666]"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#D4FF4D] hover:bg-[#c6f03d] text-black rounded-full px-5 py-[10px] flex items-center gap-3 transition-colors shrink-0 group"
                        >
                            <span className="text-[11px] font-bold tracking-[0.1em] uppercase mt-[1px]">Submit</span>
                            <div className="bg-[#121212] rounded-full w-[26px] h-[26px] flex items-center justify-center transition-transform group-hover:scale-105">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#D4FF4D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[12px] h-[12px]">
                                    <path d="M7 17L17 7" />
                                    <path d="M7 7H17V17" />
                                </svg>
                            </div>
                        </button>
                    </form>
                </div>

                <div className="mt-16 md:mt-20">
                    <p className="text-[#666666] text-[13px]">
                        © 2025 Aeline Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </section>
    );
}