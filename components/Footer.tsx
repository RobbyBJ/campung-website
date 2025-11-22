import Reveal from "./Reveal";

export default function Footer() {
  return (

    <Reveal>  
    <footer className="py-8 text-center text-gray-600 bg-gray-100">
      <p>© {new Date().getFullYear()} CamPung — All Rights Reserved.</p>
    </footer>
    </Reveal> 
  );
}
