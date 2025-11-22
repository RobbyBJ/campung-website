import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <Reveal>
        <h2 className="text-4xl font-bold text-emerald-700">What is CamPung?</h2>
      </Reveal>

      <Reveal>
      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        CamPung is a digital travel platform dedicated to reconnecting people with 
        Malaysia’s rural heritage — from serene landscapes and cultural traditions 
        to authentic food, stories, and hidden attractions worth exploring.
      </p>
      </Reveal>
      
    </section>
  );
}
