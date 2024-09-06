import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";
import Image from "next/image";

export default function LatestPostDown() {
  return (
    <section className="bg-white py-10 px-4 md:px-16 lg:px-5">
    

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left Section - Image */}
        <div className="lg:w-1/2">
          <Card className="w-full sm:w-[600px] sm:h-[400px] rounded-none bg-black h-full">
            <CardBody className="w-full sm:w-[600px] sm:h-[400px] rounded-none h-full">
              <Image
                height={1000}
                width={1000}
                src={`${process.env.BASE_URL}/images/latest2.jpg`}
                alt="Luxury Watch"
                className="w-full h-full object-cover hover:scale-105 grayscale transition-transform duration-300 ease-in-out"
              />
            </CardBody>
          </Card>
        </div>

        {/* Right Section - Text */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <Typography
            variant="small"
            color="gray"
            className="text-gray-500 text-sm"
          >
       November 21, 2019
          </Typography>
          <Typography variant="h3" color="black" className="font-bold">
          The Hills of the City
          </Typography>
          <Typography
            variant="paragraph"
            color="gray"
            className="text-lg leading-relaxed"
          >
        This post is sponsored by Hill City and ShopStyle. ’Tis the season to show the people you love how much you truly care. That…
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
      </div>
    </section>
  );
}
