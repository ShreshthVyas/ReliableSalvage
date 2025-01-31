"use client";

import Link from "next/link";

const CardGrid = () => {
  const categories = [
    {
      name: "Plastic / Rubber / Paper",
      slug: "plastic-rubber",
      images: ["/images/categories/pp1.jpg", "/images/categories/pp2.jpg","/images/categories/pp3.jpg","/images/categories/pp4.jpg"],
      description: "Recycle plastic and rubber materials for various industries.",
    },
    {
      name: "Plywood and Furniture",
      slug: "plywood-furniture",
      images: ["/images/categories/ww1.jpg"],
      description: "Recycling and upcycling of plywood and furniture materials.",
    },
    {
      name: "Yarn / Fiber / Garment / Cloth",
      slug: "yarn-fiber-garment-cloth",
      images: ["/images/categories/cc1.jpg", "/images/categories/cc2.jpg"],
      description: "Recycling fabrics, fibers, and garments for reuse.",
    },
    {
      name: "Electronics and Electricals",
      slug: "electronics-electricals",
      images: ["/images/categories/ee1.jpg", "/images/categories/ee3.jpg","/images/categories/ee4.jpg"],
      description: "Recover valuable materials from discarded electronics and electricals.",
    },
    {
      name: "Metal / Metal Scraps",
      slug: "metal-metal-scraps",
      images: ["/images/categories/mm1.jpg", "/images/categories/mm2.jpg"],
      description: "Recycle metal scraps from various industries.",
    },
    {
      name: "Edible Items / Cattle Feeds",
      slug: "edible-items-cattle-feeds",
      images: ["/images/categories/ff1.jpg", "/images/categories/ff2.jpg","/images/categories/ff3.jpg","/images/categories/ff4.jpg"],
      description: "Recycling edible items and processing for cattle feeds.",
    },
  ];

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore our wide range of reliable salvage services, tailored to meet all your recovery and recycling needs.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/categories/${category.slug}`}
              passHref
            >
              <div
                className="flex items-center justify-center h-52 w-full rounded-xl text-center
                  transition transform hover:scale-105
                  bg-[#dadff4] text-gray-800
                  dark:bg-gradient-to-br dark:from-blue-600 dark:to-blue-900 dark:text-white
                  shadow-lg
                  border-2
                  border-blue-900 dark:border-blue-300 cursor-pointer"
              >
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
