import "../../../styles/hero.css";

const EducationExperience = () => {
  const education = [
    {
      year: "2014",
      title: "Bachelor Degree of Design",
      institution: "RMIT University",
    },
    {
      title: "UI/UX Design Certificate",
      institution: "University of Houston, US",
    },
  ];

  const experience = [
    {
      period: "2015 - 2019",
      items: [
        { title: "Design Internship", institution: "CMC Corporation, UK" },
        { title: "Graphic Designer", institution: "Tripadvisor Ltd, UK" },
        {
          title: "Leader Graphic Design",
          institution: "New Centery Media JSC, UK",
        },
        { title: "Web Designer", institution: "Freelancer" },
        { title: "Web Designer/ Author", institution: "Envato Market" },
      ],
    },
    {
      period: "2020 - PRESENT",
      items: [
        { title: "Product Design Management", institution: "Dribbble LLC, US" },
        { title: "Art Director / Co-Founder", institution: "Spotify" },
        { title: "Founder", institution: "iDesign Magazine" },
        {
          title: "Author of The Book",
          institution: "Work for Money, Design for Love",
        },
      ],
    },
  ];

  return (
    <section
      className="p-8 mb-20
     bg-white"
    >
      <h2 className="text-2xl md:text-3xl font-medium font-imfell mb-8 md:mb-12 text-center">
        Education & Experience
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-[4rem] md:gap-[8rem] lg:mx-[8rem]"
        id="heroid"
      >
        <div className="">
          {education.map((edu, index) => (
            <div key={index} className="mb-2 ">
              <p className="text-xs font-semibold text-gray-400 mb-2 md:mb-4">
                {edu.year}
              </p>
              <h3 className="text-base md:text-lg mt-8 font-imfell">
                {edu.title}
              </h3>
              <p className="text-gray-400 text-xs  font-semibold ">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
        {experience.map((exp, index) => (
          <div key={index} className="">
            <p className="text-xs font-semibold text-gray-400 mb-2 lg:mb-4">
              {exp.period}
            </p>
            {exp.items.map((item, i) => (
              <div key={i} className="mb-1 mt-8 lg:mb-2">
                <h3 className="text-base lg:text-lg font-imfell">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs  font-semibold">
                  {item.institution}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationExperience;
