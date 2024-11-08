import "../../../styles/hero.css";
import {education, experience} from "../../../data/data";

const EducationExperience = () => {
    return (
        <section className="p-8 bg-white">
            <h2 className="text-2xl md:text-3xl font-thin font-imfell mb-8 md:mb-12 text-center">Education & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem] lg:mx-[8rem]" id="heroid">
                <div>
                    {education.map((edu, index) => (
                        <div key={index} className="mb-2 leading-relaxed sm:leading-normal">
                            <p className="text-sm font-semibold text-gray-400 mb-2 md:mb-4">{edu.year}</p>
                            <h3 className="text-base md:text-xl font-imfell">{edu.title}</h3>
                            <p className="text-gray-500 font-semibold ">{edu.institution}</p>
                        </div>
                    ))}
                </div>
                {experience.map((exp, index) => (
                    <div key={index}>
                        <p className="text-sm font-semibold text-gray-400 mb-2 lg:mb-4">{exp.period}</p>
                        {exp.items.map((item, i) => (
                            <div key={i} className="mb-1 lg:mb-2 leading-relaxed sm:leading-normal">
                                <h3 className="text-lg lg:text-xl font-imfell">{item.title}</h3>
                                <p className="text-gray-500 font-semibold">{item.institution}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EducationExperience;
