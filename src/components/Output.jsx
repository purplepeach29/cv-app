/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Output = React.forwardRef(
  ({ personalData, education, experience }, ref) => {
    return (
      <div className="output" ref={ref}>
        <div className="header">
          <div className="name_title">
            <p className="name">{personalData.name}</p>
            <p className="title">{personalData.title}</p>
          </div>
          <img className="photo" src={personalData.photo} />
        </div>

        <div className="main-content">
          <div className="left-content">
            <div className="content-heading">Contact</div>
            <div className="content">
              <div className="contact">
                <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                <div className="contact-value">{personalData.email}</div>
              </div>
              <div className="contact">
                <FontAwesomeIcon className="contact-icon" icon={faPhone} />
                <div className="contact-value">{personalData.phone}</div>
              </div>
              <div className="contact">
                <FontAwesomeIcon
                  className="contact-icon"
                  icon={faLocationDot}
                />
                <div className="contact-value">{personalData.location}</div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="content-heading">Profile</div>
            <div className="content">
              <p>{personalData.profile}</p>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="left-content">
            {education.length != 0 && (
              <>
                <div className="content-heading">Education</div>
                <div className="content">
                  {education.map((edu) => {
                    return (
                      <div
                        key={edu.id}
                        style={{ paddingLeft: "1.5rem", paddingBottom: "1rem" }}
                      >
                        <div className="degree">{edu.titleOfStudy}</div>
                        <div className="major-grade">
                          | {edu.major} | {edu.grade}{" "}
                        </div>
                        <div className="schoolname">{edu.schoolName}</div>
                        <div className="edu_start-end">
                          {edu.yearStarted} - {edu.yearCompleted}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {personalData.skills !== "" && (
              <>
                <div className="content-heading">Skills</div>
                <div className="content">
                  <ul>
                    {personalData.skills.split(",").map((skill) => {
                      return <li>{skill}</li>;
                    })}
                  </ul>
                </div>
              </>
            )}

            {personalData.interests !== "" && (
              <>
                <div className="content-heading">Interests</div>
                <div className="content">
                  <ul>
                    {personalData.interests.split(",").map((interest) => {
                      return <li>{interest}</li>;
                    })}
                  </ul>
                </div>
              </>
            )}
          </div>
          <div className="right-content">
            <div className="content-heading">Experience</div>
            <div className="content">
              {experience.map((exp) => {
                return (
                  <div key={exp.id} style={{ paddingBottom: "1rem" }}>
                    <div className="positiontitle">{exp.positionTitle}</div>
                    <div className="company-date">
                      {exp.companyName} | {exp.startDate}{" "}
                      {exp.endDate !== "" && <>- {exp.endDate}</>}
                    </div>
                    <div className="summary">{exp.summary}</div>
                    <ul>
                      {exp.description.split(",").map((desc) => {
                        return <li>{desc}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Output;
