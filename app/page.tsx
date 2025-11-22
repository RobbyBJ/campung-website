import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import About from "@/components/About";
import Features from "@/components/Features";
import Discover from "@/components/Discover";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Discover />
      <HowItWorks />
      <Showcase />
      <CTA />
      <Footer />
      <BackToTop /> {/* 👈 Add this */}
    </main>
  );
}
