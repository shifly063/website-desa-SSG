import React from "react";
import Image from "next/image";
import { Carousel } from "antd";
import gambar1 from "../public/IMG_6453.JPG";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const App = () => (
  <Carousel autoplay>
    <div className="w-full h-[200px]">
      <Image
        src={gambar1}
        alt="My Image"
        // height={200}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div classname="w-full h-[200px]">
      <Image
        src={gambar1}
        alt="My Image"
        // height={200}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div classname="w-full h-[200px]">
      <Image
        src={gambar1}
        alt="My Image"
        // height={200}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div classname="w-full h-[200px]">
      <Image
        src={gambar1}
        alt="My Image"
        // height={200}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <div classname="w-full h-[200px]">
      <Image
        src={gambar1}
        alt="My Image"
        // height={200}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  </Carousel>
);
export default App;
