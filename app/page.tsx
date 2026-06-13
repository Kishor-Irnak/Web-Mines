import type { Metadata } from "next"
import Hero from "@/components/hero"
import AboutUs from "@/components/AboutUs"
import Services from "@/components/Services"
import ExpertiseSection from "@/components/ExpertiseSection"
import Testimonials from "@/components/Testimonials"
import InsightsSection from "@/components/InsightsSection"
import HeroComponent from "@/components/HeroComponent"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Webmines — High-Converting Websites for Businesses",
  description:
    "Webmines builds high-converting landing pages and websites for SaaS, clinics, salons, real estate businesses, and startups. Get more leads and sales with our expert web development team.",
}

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <ExpertiseSection />
      <Testimonials />
      <InsightsSection />
      <HeroComponent />
      <Footer />
    </main>
  )
}
