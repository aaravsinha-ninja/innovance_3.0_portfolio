import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { footer } from "../../data/data";

export const Footer = () => {
  return (
    <div className="text-sm font-montserrat flex justify-between items-center py-6 px-28">
      <div>&copy;&nbsp;{footer.copyRightText}</div>
      <div>
        <a href={`mailto:${footer.email}`}>{footer.email}</a>
      </div>
      <SocialMediaLinks />
    </div>
  );
};
