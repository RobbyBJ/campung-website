import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />

      {/* FEATURES SECTION */}
      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <Reveal>
          <h1 className="text-5xl font-bold text-[#30501e] mb-10 text-center">
            Features
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#30501e]">
                AI Cultural Recognition
              </h2>
              <p className="text-gray-600 mt-2">
                Point your camera at crafts, artifacts, or heritage sites, and
                our AI will explain their background, cultural value, and the
                stories passed down through generations.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#30501e]">
                Interactive Quest System
              </h2>
              <p className="text-gray-600 mt-2">
                Take on guided quests that lead you to local traditions,
                heritage spots, and hidden gems — earn points and rewards as you
                learn along the way.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#30501e]">
                Support Local Communities
              </h2>
              <p className="text-gray-600 mt-2">
                Explore village homestays, meet traditional artisans, and join
                cultural workshops that support and sustain the livelihoods of
                local communities.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS — TIMELINE */}
      <section className="mt-32 mb-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#30501e] text-center mb-12">
            How It Works
          </h2>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#30501e]/30 rounded"></div>

          {/* STEP 1 */}
          <Reveal>
            <div className="mb-16 flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-semibold text-[#30501e]">
                  Discover
                </h3>
                <p className="text-gray-600 mt-2">
                  Find hidden villages, cultural gems, and meaningful rural
                  destinations through the app.
                </p>
              </div>

              <div className="w-10 h-10 bg-[#30501e] rounded-full mx-auto"></div>

              <div className="w-1/2"></div>
            </div>
          </Reveal>

          {/* STEP 2 */}
          <Reveal>
            <div className="mb-16 flex items-center">
              <div className="w-1/2"></div>

              <div className="w-10 h-10 bg-[#30501e] rounded-full mx-auto"></div>

              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-semibold text-[#30501e]">
                  Travel
                </h3>
                <p className="text-gray-600 mt-2">
                  Visit the places you’ve discovered and enjoy peaceful,
                  culture-rich experiences.
                </p>
              </div>
            </div>
          </Reveal>

          {/* STEP 3 */}
          <Reveal>
            <div className="mb-16 flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-2xl font-semibold text-[#30501e]">
                  Explore
                </h3>
                <p className="text-gray-600 mt-2">
                  Use your camera to scan crafts, artifacts, and landmarks —
                  instantly learning their stories through AI.
                </p>
              </div>

              <div className="w-10 h-10 bg-[#30501e] rounded-full mx-auto"></div>

              <div className="w-1/2"></div>
            </div>
          </Reveal>

          {/* STEP 4 */}
          <Reveal>
            <div className="mb-16 flex items-center">
              <div className="w-1/2"></div>

              <div className="w-10 h-10 bg-[#30501e] rounded-full mx-auto"></div>

              <div className="w-1/2 pl-8">
                <h3 className="text-2xl font-semibold text-[#30501e]">
                  Support
                </h3>
                <p className="text-gray-600 mt-2">
                  Purchase local crafts, book homestays, and join workshops that
                  empower rural communities.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APP SHOWCASE SECTION */}
      <section className="py-24 bg-[#f5f0e6] mt-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT — SCREENSHOTS */}
          <Reveal>
            <div className="flex justify-center gap-6">
              <img
                src="/figma1.png"
                className="w-64 h-auto rounded-2xl shadow-xl object-cover"
              />
              <img
                src="/figma2.png"
                className="w-60 h-auto rounded-2xl shadow-xl object-cover mt-10 hidden sm:block"
              />
            </div>
          </Reveal>

          {/* RIGHT — TEXT */}
          <Reveal>
            <div>
              <h2 className="text-4xl font-bold text-[#30501e] mb-4">
                A Smarter Way to Explore Culture
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                The CamPung app brings heritage discovery to life — from
                AI-powered recognition to interactive journeys that connect you
                deeper with Malaysia’s roots.
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#30501e] text-xl">✔</span>
                  AI-powered cultural insights
                </li>

                <li className="flex gap-3">
                  <span className="text-[#30501e] text-xl">✔</span>
                  Guided quests and immersive learning
                </li>

                <li className="flex gap-3">
                  <span className="text-[#30501e] text-xl">✔</span>
                  Scan-and-learn cultural experience
                </li>

                <li className="flex gap-3">
                  <span className="text-[#30501e] text-xl">✔</span>
                  Travel routes curated for discovery & education
                </li>
              </ul>
            </div>
          </Reveal>

        </div>
      </section>

      <Footer />
    </main>
  );
}
