import React from "react";
import { Card, CardBody, Button } from "@material-tailwind/react";

const AboutPage = () => {
  return (
    <div className="px-6 py-10">
      <Card className="max-w-4xl mx-auto rounded-none p-6">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <CardBody>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Anyclothing! Our blog is dedicated to providing you with the latest fashion trends, style inspiration, and insights into sustainable clothing. We believe fashion is not just about looking good but feeling good about the choices you make for yourself and the environment.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you’re here for our exclusive takes on seasonal fashion or our deep dives into sustainable materials and brands, we’re excited to have you on this journey. We aim to inspire and empower our readers to make thoughtful choices when it comes to their wardrobe.
          </p>
          <Button
            variant="filled"
            color="white"
            className="w-full  rounded-none border-2 border-black hover:border-gray-500"
            onClick={() => alert('Navigate to the blog')}
          >
            Explore Our Blog
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutPage;
