import React from "react";
import { Button, Card, CardBody, CardFooter } from "@material-tailwind/react";
import Image from "next/image";

const ArchivePage = () => {
  const posts = [
    {
      id: 1,
      title: "Winter Fashion 2024",
      excerpt:
        "Explore the latest trends in winter fashion, from cozy layers to chic accessories...",
      imageUrl:`${process.env.BASE_URL}/images/hero1.jpg`,
    },
    {
      id: 2,
      title: "Top Streetwear Brands of the Year",
      excerpt:
        "Discover the leading streetwear brands dominating the fashion scene this year...",
      imageUrl: `${process.env.BASE_URL}/images/hero1.jpg`,
    },
    {
      id: 3,
      title: "Sustainable Fashion Picks",
      excerpt:
        "Check out these eco-friendly and stylish choices for a more sustainable wardrobe...",
      imageUrl: `${process.env.BASE_URL}/images/hero1.jpg`,
    },
    // more posts...
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Archive</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg rounded-none transition-shadow">
            <Image
              height={1000}
              width={1000}
              src={post.imageUrl}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <CardBody>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.excerpt}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
