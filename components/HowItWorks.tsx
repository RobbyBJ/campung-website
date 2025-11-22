import Reveal from "./Reveal";

const steps = [
  "Search for unique hidden gems across Malaysia and uncover the stories, culture, and beauty tucked within its villages.",
  "Visit these destinations and experience the rich tales, traditions, and special moments that make each one stand out.",
  "Use your camera to unlock an educational travel experience, uncovering local crafts, stories, and heritage along the way.",
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-gray-50 px-6">
      <Reveal>  
      <h2 className="text-4xl font-bold text-center text-emerald-700">
        How It Works
      </h2>
      </Reveal> 

      <Reveal>  
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
          >
            <div className="text-emerald-600 text-5xl font-bold">{i + 1}</div>
            <p className="mt-4 text-gray-600">{s}</p>
          </div>
        ))}
      </div>
      </Reveal>   
    </section>
  );
}
