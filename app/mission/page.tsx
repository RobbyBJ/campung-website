import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function MissionPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <Reveal>
          <h1 className="text-5xl font-bold text-[#30501e] text-center mb-16">
            Our Mission
          </h1>
        </Reveal>

        {/* SECTION 1 — MISSION & PURPOSE */}
        <section className="mb-24 bg-[#f5f0e6] p-10 rounded-xl shadow">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#30501e] mb-4">
              Mission & Purpose
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to reconnect people with Malaysia’s cultural heritage by 
              transforming rural exploration into meaningful, educational, and 
              community-driven experiences. CamPung empowers users to learn through 
              real-world stories, traditions, and the wisdom of Malaysia’s kampung communities.
            </p>
          </Reveal>
        </section>

        {/* SECTION 2 — THE PROBLEMS WE SOLVE */}
        <section className="mb-24">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#30501e] mb-4">
              The Problems We Solve
            </h2>
          </Reveal>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <Reveal>
              <p>• Traditional crafts and cultural knowledge are slowly fading over generations.</p>
            </Reveal>

            <Reveal>
              <p>• Younger Malaysians often feel disconnected from their rural roots.</p>
            </Reveal>

            <Reveal>
              <p>• Travelers lack authentic ways to explore kampung life beyond superficial tourism.</p>
            </Reveal>

            <Reveal>
              <p>• Local artisans and communities struggle to reach wider audiences.</p>
            </Reveal>
          </div>
        </section>

        {/* SECTION 3 — WHY WE EXIST */}
        <section className="mb-24 bg-[#f5f0e6] p-10 rounded-xl shadow">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#30501e] mb-4">
              Why We Exist
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-lg text-gray-700 leading-relaxed">
              CamPung exists to preserve cultural heritage, promote meaningful travel, 
              and create bridges between modern society and the wisdom of rural communities. 
              We believe that every village holds stories worth preserving — and every person 
              deserves access to authentic, immersive cultural learning.
            </p>
          </Reveal>
        </section>
      </div>

      <Footer />
    </main>
  );
}
