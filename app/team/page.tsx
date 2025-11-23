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
        <section className="grid md:grid-cols-3 gap-12 mb-32">
          
          {/* TEAM MEMBER 1 */}
          <Reveal>
            <div className="bg-[#f5f0e6] p-8 rounded-xl shadow text-center">
              <img 
                src="/team1.jpg"  // Replace with your real photo
                className="w-40 h-40 rounded-full object-cover mx-auto shadow mb-6" 
              />
              <h3 className="text-2xl font-bold text-[#30501e]">Name 1</h3>
              <p className="text-gray-700 font-semibold mb-3">Role</p>
              <p className="text-gray-600 leading-relaxed">
                Short bio goes here. A few lines about who they are and what 
                they contribute to CamPung.
              </p>
            </div>
          </Reveal>

          {/* TEAM MEMBER 2 */}
          <Reveal>
            <div className="bg-[#f5f0e6] p-8 rounded-xl shadow text-center">
              <img 
                src="/team2.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto shadow mb-6" 
              />
              <h3 className="text-2xl font-bold text-[#30501e]">Name 2</h3>
              <p className="text-gray-700 font-semibold mb-3">Role</p>
              <p className="text-gray-600 leading-relaxed">
                Short bio goes here. Describe their interests, expertise or 
                contribution to the project.
              </p>
            </div>
          </Reveal>

          {/* TEAM MEMBER 3 */}
          <Reveal>
            <div className="bg-[#f5f0e6] p-8 rounded-xl shadow text-center">
              <img 
                src="/team3.jpg"
                className="w-40 h-40 rounded-full object-cover mx-auto shadow mb-6" 
              />
              <h3 className="text-2xl font-bold text-[#30501e]">Name 3</h3>
              <p className="text-gray-700 font-semibold mb-3">Role</p>
              <p className="text-gray-600 leading-relaxed">
                Short bio about this team member and their role in CamPung’s development.
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
          src="/journey1.jpg"   // upload image to public folder
          className="rounded-lg shadow mb-6 w-full object-cover h-60"
        />
        <h3 className="text-2xl font-semibold text-[#30501e] mb-3">Project Kickoff</h3>
        <p className="text-gray-700 leading-relaxed">
          The idea of CamPung was formed — reimagining rural exploration 
          through education and technology.
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
          src="/journey2.jpg"
          className="rounded-lg shadow mb-6 w-full object-cover h-60"
        />
        <h3 className="text-2xl font-semibold text-[#30501e] mb-3">Research Phase</h3>
        <p className="text-gray-700 leading-relaxed">
          We studied user needs, rural communities, and local culture 
          to shape the core experience.
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
          src="/journey3.jpg"
          className="rounded-lg shadow mb-6 w-full object-cover h-60"
        />
        <h3 className="text-2xl font-semibold text-[#30501e] mb-3">Prototype Build</h3>
        <p className="text-gray-700 leading-relaxed">
          We started designing UI/UX, building features, and planning 
          the app structure.
        </p>
      </div>
    </div>
  </Reveal>

  {/* ITEM 4 */}
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

  {/* ITEM 5 */}
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

</section>

      </div>

      <Footer />
    </main>
  );
}
