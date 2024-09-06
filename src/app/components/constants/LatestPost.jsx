import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

export default function LatestPost() {
  return (
    <section className="bg-white py-10 px-4 md:px-16 lg:px-24">
      {/* Heading */}
      <Typography
        variant="h2"
        color="black"
        className="text-center text-4xl font-bold mb-10"
      >
        LATEST POSTS
      </Typography>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <Typography
            variant="small"
            color="gray"
            className="text-gray-500 text-sm"
          >
            SEPTEMBER 24, 2020
          </Typography>
          <Typography variant="h3" color="black" className="font-bold">
            LUXURY WATCH SHOPPING ON EBAY
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="text-lg leading-relaxed"
          >
            The concept of time has always intrigued me. It s the very reason
            every single moment of our life has meaning. If we all lived…
          </Typography>

          <Button
            variant="outlined"
            color="black"
            className="px-6 py-2 rounded-none border-4 transition duration-300 ease-in-out"
            ripple={true}
          >
            READ MORE
          </Button>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2">
          <Card className="w-full sm:w-full sm:h-[400px] rounded-none bg-black h-full">
            <CardBody className="w-full sm:w-full sm:h-[400px] rounded-none h-full">
              <Image
                height={1000}
                width={1000}
                src={`${process.env.BASE_URL}/images/latest1.jpg`}
                alt="Luxury Watch"
                className=" w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
