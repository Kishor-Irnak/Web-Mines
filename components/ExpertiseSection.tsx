import React from 'react';

interface FeatureCard {
    title: string;
    description: string;
    imageAlt: string;
    imageUrl: string;
}

const features: FeatureCard[] = [
    {
        title: 'Custom Website Development',
        description: 'Tailor-made business websites with clean code, scalability, and responsive design.',
        imageAlt: 'Custom Website Development Graphic',
        imageUrl: '/exp1.png'
    },
    {
        title: 'High-Converting Landing Pages',
        description: 'Landing pages optimized for lead generation, product launches, advertising campaigns, and conversions.',
        imageAlt: 'High-Converting Landing Pages Graphic',
        imageUrl: '/exp2.png'
    },
    {
        title: 'SEO & Performance Optimization',
        description: 'Fast loading speeds, Core Web Vitals optimization, technical SEO, and search engine visibility.',
        imageAlt: 'SEO & Performance Optimization Graphic',
        imageUrl: '/exp3.png'
    },
    {
        title: 'Modern UI/UX Design',
        description: 'Beautiful, user-friendly interfaces with mobile-first design and seamless user experiences.',
        imageAlt: 'Modern UI/UX Design Graphic',
        imageUrl: '/exp4.png'
    }
];

export default function ExpertiseSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24 lg:py-32">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    {/* Badge with dots on both sides */}
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-[4px] h-[4px] rounded-full bg-gray-400"></div>
                        <span className="text-[11px] font-semibold tracking-[0.22em] text-gray-500 uppercase">
                            Expertise
                        </span>
                        <div className="w-[4px] h-[4px] rounded-full bg-gray-400"></div>
                    </div>

                    <h2 className="text-[2.25rem] md:text-[3.25rem] leading-[1.1] font-medium text-[#1a1a1a] mb-5 max-w-[700px] tracking-[-0.02em]">
                        Building websites that drive growth and inspire trust
                    </h2>

                    <p className="text-[15px] md:text-[16px] leading-[1.65] text-gray-500 max-w-[580px]">
                        We craft fast, modern, and conversion-focused websites that help businesses stand out online, attract more customers, and turn visitors into loyal clients.
                    </p>
                </div>

                {/* Gray Outer Container wrapping all 4 cards */}
                <div className="bg-[#EBEBEB] rounded-[40px] p-[10px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[28px] px-8 pt-10 pb-10 sm:px-12 sm:pt-12 sm:pb-12 flex flex-col items-center text-center"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-[210px] sm:h-[250px] mb-8 flex items-center justify-center">
                                    <img
                                        src={feature.imageUrl}
                                        alt={feature.imageAlt}
                                        className="w-[80%] h-[80%] object-contain"
                                    />
                                </div>

                                {/* Text Content */}
                                <h3 className="text-[18px] font-semibold text-[#1a1a1a] mb-2.5 tracking-[-0.01em]">
                                    {feature.title}
                                </h3>

                                <p className="text-[14px] leading-[1.65] text-gray-500 max-w-[320px]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}