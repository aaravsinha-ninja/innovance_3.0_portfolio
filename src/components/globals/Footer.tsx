import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { footer } from "../../data/data";
import Divider from "../main/Divider";

export const Footer = () => {
  return (
    <div className="w-[70vw] m-auto">
      <div className="mt-16 md:mt-28"></div>
      <Divider />
      <div className="text-sm font-montserrat flex flex-col md:flex-row-reverse gap-4 md:gap-0 justify-between items-center py-3 md:py-6 px-10 md:px-0 mt-10 md:mt-10">
        <div>&copy;&nbsp;{footer.copyRightText}</div>
        <div>
          <a href={`mailto:${footer.email}`}>{footer.email}</a>
        </div>
        <SocialMediaLinks />
      </div>
    </div>
  );
};
