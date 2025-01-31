"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const { slug } = useParams(); // Use useParams to access the slug

  const [category, setCategory] = useState<any>(null);

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

  useEffect(() => {
    if (slug) {
      const selectedCategory = categories.find((cat) => cat.slug === slug);
      setCategory(selectedCategory);
    }
  }, [slug]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            {category.name}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{category.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${category.name} ${index + 1}`}
            className="w-full h-96 object-cover rounded-xl"
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default CategoryPage;
