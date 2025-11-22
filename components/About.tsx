import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-emerald-700">What is CamPung?</h2>
      </Reveal>

      <Reveal>
      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        CamPung is an EdTech–Travel platform that turns rural exploration into an educational and 
        meaningful journey. Using AI-powered cultural recognition and interactive quests, it helps 
        users discover Malaysia’s hidden villages while supporting local communities through 
        purposeful, impact-driven travel.
      </p>
      </Reveal>
      
    </section>
  );
}
