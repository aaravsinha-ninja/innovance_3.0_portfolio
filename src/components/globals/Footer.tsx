import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { footer } from "../../data/data";

export const Footer = () => {
  return (
    <div className="text-sm font-montserrat flex flex-col md:flex-row-reverse gap-4 md:gap-0 justify-between items-center py-3 md:py-6 px-10 md:px-28">
      <div>&copy;&nbsp;{footer.copyRightText}</div>
      <div>
        <a href={`mailto:${footer.email}`}>{footer.email}</a>
      </div>
      <SocialMediaLinks />
    </div>
  );
};
