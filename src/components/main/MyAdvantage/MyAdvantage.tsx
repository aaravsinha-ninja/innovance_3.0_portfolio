import React, { useState, useEffect } from "react";
import figma from "./Images/figma.png";
import sketch from "./Images/sktech.png";
import adobe from "./Images/adobe.png";
import js from "./Images/js.png";
import bootstrap from "./Images/bootstrap.png";
import html from "./Images/html.png";
import testimonials from "../../../data/advantage.json";

interface MyAdv {
  name: string;
  proficiency: string;
  image: string;
}

export const MyAdvantage = () => {
  const [myadv, setMyadv] = useState<MyAdv[]>([]);

  useEffect(() => {
    setMyadv(
      testimonials.skills.map((skill) => ({
        ...skill,
        image:
          skill.name === "Figma"
            ? figma
            : skill.name === "Sketch"
            ? sketch
            : skill.name === "Adobe XD"
            ? adobe
            : skill.name === "Javascript"
            ? js
            : skill.name === "Bootstrap"
            ? bootstrap
            : html,
      }))
    );
  }, []);

  return (
    <div className="flex flex-col items-center">
      <hr className="w-10/12 border-1 border-solid border-gray-400 my-6" />
      <h3 className="text-center text-2xl font-medium my-2 md:my-6 font-imfell">
        My Advantage
      </h3>
      <div className="flex flex-wrap justify-center gap-4 md:gap-14 sm:my-4 md:my-8 mx-4">
        {myadv.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:text-blue-500"
          >
            <div className="rounded-full w-32 h-40 flex flex-col items-center justify-center bg-gray-100 shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-100">
              <img
                src={skill.image}
                className="w-20 h-20 mb-2 grayscale hover:grayscale-0"
                alt={`${skill.name} icon`}
              />
              <div className="text-xl font-semibold">{skill.proficiency}</div>
            </div>
            <span className="mt-2 text-sm font-semibold text-gray-700 hover:text-blue-500">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      <hr className="w-10/12 border-1 border-solid border-gray-400 my-6" />
    </div>
  );
};