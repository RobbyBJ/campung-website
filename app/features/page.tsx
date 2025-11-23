import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-20 max-w-5xl mx-auto px-6">
        <Reveal>
          <h1 className="text-4xl font-bold text-[#30501e] mb-10">Features</h1>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#30501e]">AI Cultural Recognition</h2>
              <p className="text-gray-600 mt-2">
                Learn the stories behind traditional items using your camera.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#30501e]">Interactive Quest System</h2>
              <p className="text-gray-600 mt-2">
                Earn points while exploring local traditions and landmarks.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-6 bg-white rounded-xl shadow">
              <h2 className="text-xl font-semibold text-[#30501e]">Support Local Communities</h2>
              <p className="text-gray-600 mt-2">
                Discover homestays, artisans, and cultural workshops.
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
          <h3 className="text-2xl font-semibold text-[#30501e]">Discover</h3>
          <p className="text-gray-600 mt-2">
            Explore hidden villages and cultural gems around Malaysia.
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
          <h3 className="text-2xl font-semibold text-[#30501e]">Scan</h3>
          <p className="text-gray-600 mt-2">
            Use your camera to scan cultural objects, crafts, or landmarks.
          </p>
        </div>
      </div>
    </Reveal>

    {/* STEP 3 */}
    <Reveal>
      <div className="mb-16 flex items-center">
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-2xl font-semibold text-[#30501e]">Learn</h3>
          <p className="text-gray-600 mt-2">
            Gain meaningful knowledge through AI-powered cultural recognition.
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
          <h3 className="text-2xl font-semibold text-[#30501e]">Travel</h3>
          <p className="text-gray-600 mt-2">
            Experience the kampung lifestyle through curated travel guides.
          </p>
        </div>
      </div>
    </Reveal>

    {/* STEP 5 */}
    <Reveal>
      <div className="mb-16 flex items-center">
        <div className="w-1/2 pr-8 text-right">
          <h3 className="text-2xl font-semibold text-[#30501e]">Support Locals</h3>
          <p className="text-gray-600 mt-2">
            Purchase crafts, book homestays, and uplift rural communities.
          </p>
        </div>

        <div className="w-10 h-10 bg-[#30501e] rounded-full mx-auto"></div>

        <div className="w-1/2"></div>
      </div>
    </Reveal>

  </div>
</section>

                

      

      <Footer />
    </main>
  );
}
