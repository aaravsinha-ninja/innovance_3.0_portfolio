import {skills} from "../../../data/data";
import SkillCard from "./SkillCard";

export const MyAdvantage = () => {
    return (
        <div className="flex flex-col items-center">
            <hr className="w-10/12 border-1 border-solid border-gray-400 my-6" />
            <h3 className="text-center text-3xl font-medium my-6 font-imfell">My Advantage</h3>
            <div className="flex flex-wrap justify-center gap-14 my-8 mx-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
            <hr className="w-10/12 border-1 border-solid border-gray-400 my-6" />
        </div>
    );
};
