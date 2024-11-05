import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";

import { details, navlinks } from "../../data/data";

export const Navbar = () => {
  return (
    <div className="text-sm font-montserratBold font-black flex justify-between items-center py-6 px-28">
      <div className="flex gap-7">
        {navlinks &&
          navlinks.map((navlink) => (
            <div>
              <a href={navlink.link}>{navlink.name}</a>
            </div>
          ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div>
          <img src={details.logo} alt="logo" className="w-20" />
        </div>
        <div>{details.name}</div>
      </div>
      <SocialMediaLinks />
    </div>
  );
};
