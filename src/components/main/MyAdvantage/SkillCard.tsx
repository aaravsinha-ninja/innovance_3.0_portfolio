import React from "react";
import {MyAdv} from "../../../types/types";

const SkillCard: React.FC<{skill: MyAdv}> = ({skill}) => (
    <div className={`flex flex-col items-center hover:text-blue-500 `}>
        <div className="rounded-full w-32 h-40 flex flex-col items-center justify-center bg-gray-100 shadow-md transition-all duration-300 transform hover:scale-105 hover:bg-blue-100">
            <img src={skill.image} className="w-20 h-20 mb-2" alt={`${skill.name} icon`} />
            <div className="text-xl font-semibold">{skill.proficiency}</div>
        </div>
        <span className="mt-2 text-sm font-semibold text-gray-700 hover:text-blue-500">{skill.name}</span>
    </div>
);

export default SkillCard;
