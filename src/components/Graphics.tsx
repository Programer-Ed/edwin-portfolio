import React from "react";
import Image from "next/image";

const graphics = [
  {
    title: "Social Media Creative",
    image: "/images/social-cre.jpg",
  },
  {
    title: "Promotional Poster",
    image: "/images/promo.jpg",
  },
  {
    title: "Brand Design",
    image: "/images/brand.jpg",
  },
  {
    title: "Digital Advertisement",
    image: "/images/digital_ad.jpg",
  },
    {
    title: "Lashes and Brows",
    image: "/images/lashes.jpg",
  },
    {
    title: "live art",
    image: "/images/live_art.jpg",
  },
    {
    title: "honey",
    image: "/images/honey.jpg",
  },
    {
    title: "oven",
    image: "/images/oven.jpg",
  },
];

function Graphics() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
                <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-cyan-400">
            Graphic Design
          </h1>

          <p className="mt-2 text-gray-400">
            A selection of visual designs, digital creatives, and branding work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {graphics.map((graphic, index) => (
            <div
              key={index}
              className="bg-[#27272a] rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 transition duration-300"
            >
              <Image
                src={graphic.image}
                alt={graphic.title}
                width={600}
                height={400}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Graphics;