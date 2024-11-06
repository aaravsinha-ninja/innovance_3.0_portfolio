import React from "react";
import { socials } from "../../data/data";

const SocialMediaLinks = () => {
  return (
    <div className="flex gap-9">
      {socials &&
        socials.map((social) => (
          <div key={social.name}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                src={social.icon}
                alt={social.name}
                className="aspect-square w-5"
              />
            </a>
          </div>
        ))}
    </div>
  );
};

export default SocialMediaLinks;
