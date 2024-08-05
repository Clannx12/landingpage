"use client";

import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

type dataMembers = {
  name: string;
  proffesion: string;
  avatarUrl: string;
};

interface MyComponentProps {
  propsData: dataMembers[];
}

const Slider: React.FC<MyComponentProps> = ({ propsData }) => {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 3,
      focus: "center",
      autoScroll: {
        speed: 1,
      },
      gap: "1rem",
    }).mount();

    const updateBubbles = () => {
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble, index) => {
        bubble.classList.toggle("active", index === splide.index);
      });
    };

    splide.on("move", updateBubbles);
    updateBubbles(); // Initial call

    return () => {
      splide.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {propsData.map((data, id) => (
            <li key={id} className="splide__slide">
              <div className="">
                <img
                  className="rounded-full w-28 py-3"
                  src={
                    "https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png"
                  }
                  alt={data.name}
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">{data.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {data.proffesion}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
