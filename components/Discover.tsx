import Reveal from "./Reveal";

export default function Discover() {
  return (
    <section id="discover" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <Reveal>  
      <h2 className="text-4xl font-bold text-emerald-700">Discover Hidden Gems</h2>
      </Reveal> 

      <Reveal>
      <p className="mt-6 text-lg text-gray-600">
        Scenic landscapes, rivers, forests, heritage sites, and authentic kampung life.
      </p>
      </Reveal> 


      <Reveal>  
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <img src="/discover1.jpg" className="rounded-xl shadow" />
        <img src="/discover2.jpg" className="rounded-xl shadow" />
        <img src="/discover3.jpg" className="rounded-xl shadow" />
      </div>
      </Reveal> 
    </section>
  );
}
