import PersonalData from "./PersonalData.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

function Sidebar({
  personalData,
  setPersonalData,
  education,
  setEducation,
  experience,
  setExperience,
}) {
  return (
    <div className="sidebar">
      <PersonalData
        personalData={personalData}
        setPersonalData={setPersonalData}
      ></PersonalData>
      <Education education={education} setEducation={setEducation}></Education>
      <Experience
        experience={experience}
        setExperience={setExperience}
      ></Experience>
    </div>
  );
}

export default Sidebar;
