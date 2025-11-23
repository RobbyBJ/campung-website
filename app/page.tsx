import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* HERO SECTION */}
        <section
            className="relative pt-40 pb-40 px-6 text-center text-white"
            style={{
                backgroundImage: "url('/natural1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
            <Reveal>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-xl">
                Explore Hidden Gems,
                <br /> Enrich Your Mind
            </h1>
            </Reveal>

            <Reveal>
            <p className="mt-6 text-lg text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
            Discover Malaysia’s cultural villages through immersive, meaningful 
            and educational travel experiences.
            </p>
            </Reveal>

            <Reveal>
            <div className="flex justify-center gap-4 mt-10">
            <a 
                href="/features"
                className="px-6 py-3 bg-[#30501e] text-white rounded-xl font-semibold shadow hover:bg-[#284419] transition"
            >
            Try the App
            </a>

            <a 
            href="/mission"
            className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#30501e] transition"
            >
            Discover Villages
            </a>
            </div>
            </Reveal>

            </div>
        </section>


      {/* QUICK INTRO SECTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#30501e] text-center mb-4">
            What is CamPung?
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-lg text-gray-700 dark:text-gray-900 text-center max-w-3xl mx-auto leading-relaxed">
            CamPung is an EdTech x Travel platform that uses AI-powered cultural 
            recognition, interactive quests and storytelling to turn rural exploration 
            into an impactful and educational journey — all while helping preserve our 
            cultural heritage and empowering local communities.
          </p>
        </Reveal>
      </section>

      {/* GALLERY SECTION */}
<section className="py-24 px-6 max-w-6xl mx-auto">
  <Reveal>
    <h2 className="text-4xl font-bold text-[#30501e] text-center mb-8">
      Explore Malaysia’s Rural Beauty
    </h2>
  </Reveal>

  <Reveal>
    <p className="text-center text-gray-700 dark:text-gray-900 max-w-3xl mx-auto mb-12">
      Get a glimpse of the authentic kampung experience — from tranquil landscapes 
      to traditional homes and timeless cultural treasures.
    </p>
  </Reveal>

  {/* GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    <Reveal>
      <img 
        src="/discover1.jpg" 
        className="rounded-xl shadow-border-2 object-cover w-full h-64 border-2 border-[#30501e]/20 hover:scale-[1.02] transition"
      />
    </Reveal>

    <Reveal>
      <img 
        src="/discover2.jpg" 
        className="rounded-xl shadow-border-2 object-cover w-full h-64 border-2 border-[#30501e]/20 hover:scale-[1.02] transition"
      />
    </Reveal>

    <Reveal>
      <img 
        src="/discover3.jpg" 
        className="rounded-xl shadow-border-2 object-cover w-full h-64 border-2 border-[#30501e]/20 hover:scale-[1.02] transition"
      />
    </Reveal>

  </div>
</section>


      <Footer />
    </main>
  );
}
