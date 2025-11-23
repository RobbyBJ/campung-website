import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { Camera, Trees, Users, HandMetal } from "lucide-react"; // icons

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
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* TEXT */}
              <div>
                <h2 className="text-3xl font-bold text-[#30501e] mb-4">
                  Mission & Purpose
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to reconnect people with Malaysia’s cultural heritage by 
                  transforming rural exploration into meaningful, educational, and 
                  community-driven experiences. CamPung empowers users to learn through 
                  real-world stories, traditions, and the wisdom of Malaysia’s kampung communities.
                </p>
              </div>

              {/* IMAGE */}
              <img
                src="/mission1.png"
                className="rounded-xl shadow object-cover w-full h-64"
              />
            </div>
          </Reveal>
        </section>

        {/* SECTION 2 — THE PROBLEMS WE SOLVE */}
        <section className="mb-24">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#30501e] mb-6">
              The Problems We Solve
            </h2>
          </Reveal>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">

            <Reveal>
              <div className="flex items-start gap-4">
                <HandMetal className="text-[#30501e] mt-1" size={28} />
                <p>Traditional crafts and cultural knowledge are fading over generations.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-4">
                <Users className="text-[#30501e] mt-1" size={28} />
                <p>Younger Malaysians often feel disconnected from their rural roots.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-4">
                <Camera className="text-[#30501e] mt-1" size={28} />
                <p>Travelers lack authentic ways to explore kampung life beyond superficial tourism.</p>
              </div>
            </Reveal>

            <Reveal>
              <div className="flex items-start gap-4">
                <Trees className="text-[#30501e] mt-1" size={28} />
                <p>Local artisans and communities struggle to reach wider audiences.</p>
              </div>
            </Reveal>

          </div>

          {/* IMAGE UNDER PROBLEMS */}
          <Reveal>
            <img
              src="/mission2.png"
              className="rounded-xl shadow object-cover w-full h-72 mt-10"
            />
          </Reveal>
        </section>

        {/* SECTION 3 — WHY WE EXIST */}
        <section className="mb-24 bg-[#f5f0e6] p-10 rounded-xl shadow">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* IMAGE */}
              <img
                src="/mission3.jpg"
                className="rounded-xl shadow object-cover w-full h-64"
              />

              {/* TEXT */}
              <div>
                <h2 className="text-3xl font-bold text-[#30501e] mb-4">
                  Why We Exist
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  CamPung exists to preserve cultural heritage, promote meaningful travel, 
                  and create bridges between modern society and the wisdom of rural communities. 
                  We believe that every village holds stories worth preserving — and every person 
                  deserves access to authentic, immersive cultural learning.
                </p>
              </div>

            </div>
          </Reveal>
        </section>

      </div>

      <Footer />
    </main>
  );
}
