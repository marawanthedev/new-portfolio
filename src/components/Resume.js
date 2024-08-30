import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Software Engineering",
    academy: "University Teknologi Malaysia",
    dec: "Software Engineering Bachelor Degree",
    startYear: "2019",
    endYear: "2023",
  },
  {
    id: 2,
    title: "HighSchool",
    academy: "Manara American International School",
    dec: "American Diploma",
    startYear: "2015",
    endYear: "2018",
  },
  
];

const experienceData = [
  {
    id: 1,
    title: "React Developer (Remote)",
    company: "tigerlab",
    dec: "I've been focused on building insurance policy user sales journeys for companies like Sportscover Europe, UKG UK courier, and Complectus UK. Additionally, I've developed automation scripts to streamline repetitive tasks and worked on customizing Git using hooks to better align with our company's needs.",
    startYear: "Feb 2023",
    endYear: false,
  },
  {
    id: 2,
    title: "React Developer (Hybrid)",
    company: "Quick Desk",
    dec: "At QuickDesk Academy, I developed JS widgets that could be seamlessly integrated into any React, Angular, or Vue app via CDN. I also contributed to a chat application that unified messages from platforms like WhatsApp, Facebook, and Telegram into a single interface. This system ensured efficient communication by forwarding all incoming messages to the chat app and sending responses back to the respective channels.",
    startYear: "Aug 2022",
    endYear: "Feb 2023",
  },
  {
    id: 3,
    title: "React Developer (Remote)",
    company: "Recrave",
    dec: "At ReCrave, I worked on developing an admin dashboard designed to streamline and enhance internal operations. The dashboard provides a centralized interface for managing various aspects of the business, including order tracking, vendor management, and product listings. By building this tool, I helped improve operational efficiency, enabling the team to handle daily tasks more effectively and with greater accuracy.",
    startYear: "Apr 2022",
    endYear: "Feb 2023",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
