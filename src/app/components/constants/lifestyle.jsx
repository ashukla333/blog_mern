import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

const LifestylePage = () => {
  const lifestylePosts = [
    {
      id: 1,
      title: "How to Build a Capsule Wardrobe",
      content: "A capsule wardrobe is the foundation of timeless style. Learn how to create one with minimal pieces that you can mix and match effortlessly...",
      imageUrl: `${process.env.BASE_URL}/images/hero1.jpg`,
    },
    {
      id: 2,
      title: "Traveling Light: Fashion Tips for Packing",
      content: "Discover how to pack fashionably for your next trip, without overpacking, and how to look your best with minimal luggage...",
      imageUrl:  `${process.env.BASE_URL}/images/hero1.jpg`,
    },
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Lifestyle</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {lifestylePosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg rounded-none transition-shadow">
            <Image
              height={1000}
              width={1000}
              src={post.imageUrl}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <CardBody>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LifestylePage;
