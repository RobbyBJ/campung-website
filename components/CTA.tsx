import Reveal from "./Reveal";
export default function CTA() {
  return (
    <section
      id="cta"
      className="py-24 text-center bg-emerald-600 text-white"
    >
      <Reveal>
      <h2 className="text-4xl font-bold">Join the CamPung Journey</h2>
      <p className="mt-4 text-lg text-white/90">
        Sign up now and be the first to try our beta release.
      </p>
      </Reveal>

      <Reveal>  
      <a
        href="#"
        className="mt-8 inline-block bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Join Beta
      </a>
      </Reveal>   
    </section>
  );
}
