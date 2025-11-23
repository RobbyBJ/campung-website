import { Beth_Ellen } from "next/font/google";

  const bethEllen = Beth_Ellen({
  subsets: ["latin"],
  weight: "400",
  });

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e6] text-gray-800 pt-16 pb-8 mt-20 border-t border-[#30501e]/20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          {/* LOGO + TITLE */}
        <div className="flex items-center">
          <img
            src="logo.png"  // 👈 your logo file
            alt="CamPung Logo"
            width={120}
            height={120}
            className="object-contain"
          />
          <span className={`${bethEllen.className} ml-[-36px] text-xl font-bold`}
          style={{ color: "#30501e" }}
          >
            CamPung
          </span>
        </div>
          <p className="ml-[26px] text-gray-700 leading-relaxed">
            Your camera, your guide — uncover the stories behind Malaysia’s villages.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#30501e] mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">

          <li>
            <a href="/" className="relative group">
            Home
          <span className="absolute left-0 bottom-0 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>

          <li>
            <a href="/mission" className="relative group">
            Our Mission
          <span className="absolute left-0 bottom-0 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>

          <li>
            <a href="/features" className="relative group">
            Features
          <span className="absolute left-0 bottom-0 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>

          <li>
            <a href="/team" className="relative group">
            Our Team
          <span className="absolute left-0 bottom-0 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
    
          </ul>

        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold text-[#30501e] mb-4">Contact</h3>
          <p className="text-gray-700">
            Email: 
              <a href="mailto:hello@campung.com" className="relative group ml-1">
                hello@campung.com
                <span className="absolute left-0 bottom-0 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
          </p>
          <p className="text-gray-700 mt-2">
            Phone: <span className="hover:text-[#30501e]">+60 12-3172916</span>
          </p>
          <p className="text-gray-700 mt-2">
            Address:<br />
            No. 5, Jalan Universiti,<br />
            Bandar Sunway,<br />
            47500 Selangor Darul Ehsan.<br />
            Malaysia
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-lg font-semibold text-[#30501e] mb-4">Follow Us</h3>
          <div className="flex space-x-4">

            {/* Facebook */}
            <a href="#" className="hover:opacity-70">
              <svg width="28" height="28" fill="#30501e" viewBox="0 0 24 24">
                <path d="M22 12.07C22 6.49 17.52 2 11.93 2S2 6.49 2 12.07c0 5 3.66 9.13 8.44 9.93v-7.03H8.1v-2.9h2.34V9.75c0-2.3 1.37-3.56 3.47-3.56.99 0 2.02.18 2.02.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42v1.72h2.5l-.4 2.9h-2.1v7.03C18.34 21.2 22 17.08 22 12.07z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:opacity-70">
              <svg width="28" height="28" fill="#30501e" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.66-1.35 3-3 3H7c-1.65 0-3-1.34-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 107 12a4.5 4.5 0 005-4.5zm0 7A2.5 2.5 0 119.5 12 2.5 2.5 0 0112 14.5zM17.5 7A1.5 1.5 0 1116 5.5 1.5 1.5 0 0117.5 7z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="hover:opacity-70">
              <svg width="28" height="28" fill="#30501e" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.36 8.36 8.36 0 01-2.7 1.05 4.21 4.21 0 00-7.37 2.88c0 .33.03.65.1.96A11.97 11.97 0 013 4.79a4.21 4.21 0 001.3 5.62 4.1 4.1 0 01-1.9-.52v.05a4.22 4.22 0 003.38 4.13 4.24 4.24 0 01-1.89.07 4.22 4.22 0 003.94 2.93A8.47 8.47 0 012 19.54a11.93 11.93 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022.46 6z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-600 mt-12">
        © {new Date().getFullYear()} CamPung — All Rights Reserved.
      </div>
    </footer>
  );
}
