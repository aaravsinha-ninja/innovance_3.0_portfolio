import React from "react";
import { StatsPlaceholderProps } from "../../../types/types";



const StatsPlaceholder: React.FC<StatsPlaceholderProps> = ({title, stat}) => {
    return (
        <div>
            <h3 className="text-sm font-normal text-gray-500 mb-4 font-montserrat">{title}</h3>
            <p className="text-4xl font-montserratBold font-semibold text-gray-900">{stat}</p>
        </div>
    );
};

export default StatsPlaceholder;
