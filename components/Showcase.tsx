import Reveal from "./Reveal";
export default function Showcase() {
  return (
    <section id="showcase" className="py-24 px-6 text-center">
      <Reveal>  
      <h2 className="text-4xl font-bold text-emerald-700">App Showcase</h2>
      </Reveal> 

      <Reveal>  
      <p className="mt-4 text-gray-600">A simple preview of what CamPung looks like.</p>
      </Reveal> 

      <Reveal> 
      <img
        src="/appmockup.png"
        className="w-72 mx-auto mt-12 drop-shadow-2xl"
        alt="CamPung App Mockup"
      />
      </Reveal> 
    </section>
  );
}
