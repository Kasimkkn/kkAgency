import React from "react";
import heroBg from './assets/img/herobg.png'
import img1 from './assets/img/img1.png'
import project1 from './assets/img/p1.jpg'
import project2 from './assets/img/p2.jpeg'
import project3 from './assets/img/p2.jpg'
import project4 from './assets/img/p3.jpg'
import project5 from './assets/img/p4.jpg'
import project6 from './assets/img/p5.png'
import rings from './assets/img/rings.png'
import v1 from './assets/img/v1.png'
import TeamSection from "./components/TeamSection";
const App = () => {
  const items = [
    { text: 'Marketing', color: 'text-white' },
    { text: 'Illustrations', color: 'text-white' },
    { text: 'UI/UX Design', color: 'text-orange-500' },
    { text: 'Artworks', color: 'text-white' },
    { text: 'Animation', color: 'text-white' },
    { text: 'Graphic Design', color: 'text-white' },
  ];

  return (
    <div className="bg-[#fdfcf8] text-gray-800 font-serif">
      {/* Header Section */}
      <nav className="flex items-center justify-between py-4 px-6 w-full fixed z-50 
         bg-purple-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 ">
        <a href="/" className="text-xl font-bold">
          CREATIVE
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-sm">
            Home
          </a>
          <a href="/about" className="text-sm">
            About
          </a>
          <a href="/services" className="text-sm">
            Services
          </a>
          <a href="/portfolio" className="text-sm">
            Portfolio
          </a>
          <a href="/contact" className="text-sm">
            Contact
          </a>
        </div>
        <button className="border-black text-black border py-1 px-4 font-bold rounded-full">
          Get Quote →
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pb-12 md:py-20 pt-28 h-full">
        <div className="flex flex-col items-center w-full relative font-sans">
          {/* Row 1 */}
          <div className="flex justify-between w-full md:w-[40%] max-md:px-10">
            <span className="text-black font-bold tracking-tight md:leading-[110px] text-[clamp(2rem,6vw,10rem)]">
              WE
            </span>
            <span className="text-black font-bold tracking-tight md:leading-[110px] text-[clamp(2rem,6vw,10rem)]">
              MAKE
            </span>
          </div>
          {/* Row 2 */}
          <div className="flex justify-between w-full md:w-[45%] max-md:px-8 ">
            <span className="text-black font-bold tracking-tight md:leading-[110px] text-[clamp(2rem,6vw,10rem)]">
              CRE
            </span>
            <span className="text-black font-bold tracking-tight md:leading-[110px] text-[clamp(2rem,6vw,10rem)]">
              ATIVE
            </span>
          </div>
          {/* Row 3 */}
          <div className="flex justify-between w-full md:w-[60%] max-md:px-10 ">
            <span className="text-black font-bold tracking-tight md:leading-[110px] text-[clamp(2rem,6vw,10rem)]">
              THINGS
            </span>
            <span className="text-black font-bold tracking-tight md:leading-[110px] text-[clamp(2rem,6vw,10rem)]">
              EVERYDAY
            </span>
          </div>
          {/* Image */}
          <div className="absolute top-1/2 left-[48%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={heroBg}
              alt="creative image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-20 md:mt-20 mt-12 max-md:gap-10">
          <div className="flex flex-col gap-4 md:w-[30%]">
            <p className="text-gray-700 text-xl  font-serif">
              We are constantly rethinking the future by creating the next generation of products, brands and services from a hybrid perspective.
            </p>
          </div>
          <div className="flex relative items-center justify-center md:w-[30%]">
            <div className="absolute left-0 flex items-center justify-center border-r-2 border-orange-600 bg-black text-white rounded-full w-24 h-24 z-10">
              <span className="w-10 h-10 bg-orange-600 rounded-full"></span>
            </div>
            <img
              src={v1}
              alt="Decorative abstract"
              className="rounded-full w-[300px] h-[100px] object-cover"
            />
          </div>
          <div className="flex justify-center gap-8 md:w-[30%]">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-black">420</h2>
              <span className="text-gray-700 text-base">Completed Projects</span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-bold text-black">10+</h2>
              <span className="text-gray-700 text-base">Years of experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Maquee Section */}
      <div className="bg-black py-8 overflow-hidden">
        <div className="flex items-center animate-marquee space-x-8 whitespace-nowrap">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-white text-3xl font-bold ${item.color}`}
              >
                {item.text}
              </span>
              {index !== items.length - 1 && (
                <span className="text-white text-3xl">&bull;</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 space-y-8 md:space-y-0 bg-gray-50">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={img1}
            alt="Model Poses"
            className=""
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 flex flex-col text-left gap-4">
          <h1 className="text-4xl font-bold text-black">
            UI/UX Design
          </h1>
          <h4 className="text-2xl font-medium text-black">
            Build, streamline and evolve together with solution
          </h4>
          <p className="text-black/60 text-lg">
            Always ready to push the boundaries, especially when it comes to our
            own platform. Our analytical eye creates a site that is visually
            engaging and optimized for maximum performance. It perfectly reflects
            the journey to help tell a story, increase understanding, and drive
            action. The goal is to create a site that is visually engaging for
            maximum performance.
          </p>

          {/* Features List */}
          {/* Features List */}
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 text-gray-700 text-sm md:text-base mb-4">
            <li className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800">
              User Research
            </li>
            <li className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-green-700 to-pink-800">
              Visual Design
            </li>
            <li className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-teal-700 to-green-600">
              Information Architecture
            </li>
            <li className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-orange-600 to-blue-600">
              Usability Testing & Iteration
            </li>
            <li className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-blue-800 to-lime-700">
              Wireframing & Prototyping
            </li>
            <li className="text-white px-4 py-2 rounded-full bg-gradient-to-r from-purple-800 to-pink-700">
              Implementation
            </li>
          </ul>


        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 ">
        <h2 className="text-center text-black text-5xl font-bold mb-12">
          Features are more helpful to create <br /> creative shapes as well.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-6 max-w-6xl mx-auto">
          <div className="bg-black p-6 flex justify-center items-center rounded-md">
            <img src={rings} alt="Rings" className="w-full h-auto rounded-md" />
          </div>

          {/* Text cards */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="p-6 bg-[#e2dfd2] flex flex-col justify-between items-start rounded-md"
            >
              <h3 className="text-2xl font-bold mb-2">0{index + 1}</h3>
              <div className="flex flex-col gap-1">
                <h6 className="text-base font-semibold">
                  {index === 0 && "Research"}
                  {index === 1 && "Plan & Sketch"}
                  {index === 2 && "Customize"}
                  {index === 3 && "User Testing"}
                </h6>
                <p className="text-black/400 text-sm">
                  {index === 0 && "Having these the marketplace to your business"}
                  {index === 1 && "Delicate and long-lasting with vitamins and nutritions"}
                  {index === 2 && "Creating brand identities for the digital experiences"}
                  {index === 3 && "We look forward to engage with beyond the conventional"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <div className="bg-black text-white p-16">
        {/* Header */}
        <div className="mb-8 flex justify-between items-end">
          <h1 className="text-5xl font-bold mb-4">Take a look at ur most <br /> successful projects</h1>
          <button className="border border-orange-500 text-orange-500 w-56 h-16 rounded-full hover:bg-orange-500 hover:text-black transition">
            View All Projects
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Row 1 */}
          <div className="grid grid-cols-12 space-x-4">
            <div className="col-span-5 rounded-md overflow-hidden">
              <img src={project1} alt="Illustration" className="object-cover w-full h-[350px]" />
            </div>
            <div className="col-span-7 rounded-md overflow-hidden">
              <img src={project6} alt="Contemporary Art" className="object-cover w-full h-[350px]" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 space-x-4">
            <div className="col-span-7 rounded-md overflow-hidden">
              <img src={project5} alt="Fashion" className="object-cover w-full h-[350px]" />
            </div>
            <div className="col-span-5 bg-gray-800 rounded-md overflow-hidden">
              <img src={project2} alt="Vintage Design" className="object-cover w-full h-[350px]" />
            </div>
          </div>

          {/* row 3 */}
          <div className="grid grid-cols-12 space-x-4">
            <div className="col-span-5 rounded-md overflow-hidden">
              <img src={project3} alt="Illustration" className="object-cover w-full h-[350px]" />
            </div>
            <div className="col-span-7 rounded-md overflow-hidden">
              <img src={project4} alt="Contemporary Art" className="object-cover w-full h-[350px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />
    </div>
  );
};

export default App;
