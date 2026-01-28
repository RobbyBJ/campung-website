import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function TeamPage() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">

        {/* PAGE TITLE */}
        <Reveal>
          <h1 className="text-5xl font-bold text-[#30501e] text-center mb-16">
            Our Team
          </h1>
        </Reveal>

        {/* TEAM GRID */}
        <section className="grid md:grid-cols-2 gap-12 mb-32">

          {/* TEAM MEMBER 1 */}
          <Reveal>
            <div className="bg-[#f5f0e6] p-8 rounded-xl shadow text-center">
              <img
                src="/bj1.jpg"
                className="w-32 h-40 rounded-full object-cover object-[center_60%] mx-auto shadow mb-6"
              />
              <h3 className="text-2xl font-bold text-[#30501e]">Loo Boon Joon</h3>
              <p className="text-gray-700 font-semibold mb-3">Technical & Project Lead</p>
              <p className="text-gray-600 leading-relaxed">
                A Computer Science major and plays the role of CamPung’s Technical and Project Lead, I build the platform behind our educational travel
                experience, focusing on AI, user experience, and community-driven features. My goal is to
                use technology to connect urban users with rural culture and help them rediscover the calm
                of kampung life.
              </p>
            </div>
          </Reveal>

          {/* TEAM MEMBER 2 */}
          <Reveal>
            <div className="bg-[#f5f0e6] p-8 rounded-xl shadow text-center">
              <img
                src="/lisyn.jpg"
                className="w-32 h-40 rounded-full object-cover object-[center_10%] mx-auto shadow mb-6"
              />
              <h3 className="text-2xl font-bold text-[#30501e]">Cheong Lih Sin</h3>
              <p className="text-gray-700 font-semibold mb-3">Business Development & Customer Engagement Lead</p>
              <p className="text-gray-600 leading-relaxed">
                A Financial Analysis major who brings strategy to our programmes. I focus on
                building partnerships, engaging our community, and ensuring our business model runs
                smoothly. My goal is to help rural areas gain more exposure and opportunities while
                creating meaningful outdoor experiences for everyone.                                          
              </p>
            </div>
          </Reveal>
        </section>

        {/* TIMELINE SECTION */}
        <Reveal>
          <h2 className="text-4xl font-bold text-[#30501e] text-center mb-16">
            Our Journey
          </h2>
        </Reveal>

        <section className="relative max-w-3xl mx-auto">

          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-1 bg-[#30501e]/30"></div>

          {/* --- TIMELINE ITEM TEMPLATE ---
      Each item now has a LARGE card for image + text 
      and generous spacing
    */}

          {/* ITEM 1 */}
          <Reveal>
            <div className="relative flex flex-col items-center mb-32">

              {/* Node */}
              <div className="w-10 h-10 bg-[#30501e] rounded-full border-4 border-white shadow absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

              {/* Card */}
              <div className="bg-[#f5f0e6] p-8 rounded-xl shadow-lg w-full mt-8">
                <img
                  src="/gp1.jpg"   // upload image to public folder
                  className="rounded-lg shadow mb-6 w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"
                />
                <h3 className="text-2xl font-semibold text-[#30501e] mb-3">Project Kickoff - October 2025</h3>
                <p className="text-gray-700 leading-relaxed">
                  The idea of CamPung was formed from a desire to reimagine rural exploration by blending education with
                  technology. Instead of simply visiting villages, CamPung transforms every journey into an opportunity
                  to learn, discover cultural heritage, and engage meaningfully with local communities.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ITEM 2 */}
          <Reveal>
            <div className="relative flex flex-col items-center mb-32">

              <div className="w-10 h-10 bg-[#30501e] rounded-full border-4 border-white shadow absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

              <div className="bg-[#f5f0e6] p-8 rounded-xl shadow-lg w-full mt-8">
                <img
                  src="/prototype.png"
                  className="rounded-lg shadow mb-6 w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"
                />
                <h3 className="text-2xl font-semibold text-[#30501e] mb-3">Research & Prototype - October 2025</h3>
                <p className="text-gray-700 leading-relaxed">
                  We kicked off by diving into user research and market analysis to identify real needs within rural
                  travel. With those insights, we developed early prototypes to validate our concept and refine
                  our approach.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ITEM 3 */}
          <Reveal>
            <div className="relative flex flex-col items-center mb-32">

              <div className="w-10 h-10 bg-[#30501e] rounded-full border-4 border-white shadow absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

              <div className="bg-[#f5f0e6] p-8 rounded-xl shadow-lg w-full mt-8">
                <img
                  src="/launchx.jpg"
                  className="rounded-lg shadow mb-6 w-full object-cover h-64 sm:h-72 md:h-80 lg:h-96"
                />
                <h3 className="text-2xl font-semibold text-[#30501e] mb-3">LaunchX Kickstarter - November 2025</h3>
                <p className="text-gray-700 leading-relaxed">
                  The team was selected as one of the Top 45 out of 300+ applicants in LaunchX, Malaysia’s Startup
                  Accelerator Program. This achievement earned us an invitation to the Kickstarter phase,
                  where we presented a mock pitch to real-world investors and received valuable industry feedback.
                </p>
              </div>
            </div>
          </Reveal>

          {/*
  <Reveal>
    <div className="relative flex flex-col items-center mb-32">

      <div className="w-10 h-10 bg-[#30501e] rounded-full border-4 border-white shadow absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="bg-[#f5f0e6] p-8 rounded-xl shadow-lg w-full mt-8">
        <img 
          src="/journey4.jpg"
          className="rounded-lg shadow mb-6 w-full object-cover h-60"
        />
        <h3 className="text-2xl font-semibold text-[#30501e] mb-3">Development</h3>
        <p className="text-gray-700 leading-relaxed">
          Core features like cultural scanning, quests, and user flow 
          were implemented.
        </p>
      </div>
    </div>
  </Reveal>


  <Reveal>
    <div className="relative flex flex-col items-center mb-32">

      <div className="w-10 h-10 bg-[#30501e] rounded-full border-4 border-white shadow absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="bg-[#f5f0e6] p-8 rounded-xl shadow-lg w-full mt-8">
        <img 
          src="/journey5.jpg"
          className="rounded-lg shadow mb-6 w-full object-cover h-60"
        />
        <h3 className="text-2xl font-semibold text-[#30501e] mb-3">Today</h3>
        <p className="text-gray-700 leading-relaxed">
          CamPung continues to grow as a meaningful platform that connects 
          people with Malaysia’s heritage.
        </p>
      </div>
    </div>
  </Reveal>
  */}

        </section>

      </div>

      <Footer />
    </main>
  );
}
