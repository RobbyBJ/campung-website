import Reveal from "./Reveal";

const features = [
  {
    title: "Handpicked Destinations",
    desc: "Discover kampung gems curated for authenticity and real cultural value.",
  },
  {
    title: "Local Stories",
    desc: "Get to know the history and traditions behind every unique place.",
  },
  {
    title: "Smart Recommendations",
    desc: "Personalized suggestions based on your interests and travel preferences.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 px-6">

      <Reveal>
      <h2 className="text-4xl font-bold text-center text-emerald-700">
        Features
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
