import Reveal from "./Reveal";

const features = [
  {
    title: "1. Urban Burnout & Mental Fatigue",
    desc: "People living in cities lack meaningful, low-cost ways to disconnect, recharge, and reconnect with nature and culture.",

  },
  {
    title: "2. Underexposure of Rural “Hidden Gems",
    desc: "Many culturally rich villages remain unknown because they are not digitally represented or accessible through mainstream travel platforms.",
  },
  {
    title: "3. Declining Cultural Preservation",
    desc: "Traditional crafts, heritage stories, and local knowledge are fading as younger generations disconnect from rural roots. CamPung helps preserve these through digital storytelling and AI-powered cultural recognition.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 px-6">

      <Reveal>
      <h2 className="text-4xl font-bold text-center text-emerald-700">
        Problems We Solve
      </h2> 
      </Reveal>

      <Reveal>
      <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-xl font-semibold text-emerald-700">{f.title}</h3>
            <p className="mt-3 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
      </Reveal> 
    </section>
  );
}
