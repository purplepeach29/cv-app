import { v4 as uuidv4 } from "uuid";

function Education({ education, setEducation }) {
  function handleNew(evt) {
    setEducation([
      ...education,
      {
        schoolName: "",
        titleOfStudy: "",
        yearStarted: "",
        yearCompleted: "",
        major: "",
        grade: "",
        id: uuidv4(),
      },
    ]);
  }

  function handleChangeById(evt, prop, id) {
    let newEducation = [];
    for (let edu of education) {
      if (edu.id === id) {
        newEducation.push({ ...edu, [prop]: evt.target.value });
      } else {
        newEducation.push(edu);
      }
    }
    setEducation(newEducation);
  }
  function deleteById(id) {
    setEducation((old) => {
      return old.filter((edu) => edu.id !== id);
    });
  }

  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, idx) => {
        return (
          <div key={edu.id} className="listItem">
            <button className="delete" onClick={() => deleteById(edu.id)}>
              X
            </button>
            <h3>Education {idx + 1} </h3>
            <form>
              <label>
                School Name
                <input
                  type="text"
                  onChange={(evt) =>
                    handleChangeById(evt, "schoolName", edu.id)
                  }
                />
              </label>
              <label>
                Degree / Diploma Name
                <input
                  type="text"
                  onChange={(evt) =>
                    handleChangeById(evt, "titleOfStudy", edu.id)
                  }
                />
              </label>
              <label>
                Year Started
                <input
                  placeholder="YYYY"
                  type="text"
                  onChange={(evt) =>
                    handleChangeById(evt, "yearStarted", edu.id)
                  }
                />
              </label>
              <label>
                Year Completed
                <input
                  placeholder="YYYY"
                  type="text"
                  onChange={(evt) =>
                    handleChangeById(evt, "yearCompleted", edu.id)
                  }
                />
              </label>
              <label>
                Major
                <input
                  type="text"
                  onChange={(evt) => handleChangeById(evt, "major", edu.id)}
                />
              </label>
              <label>
                Grade
                <input
                  type="text"
                  onChange={(evt) => handleChangeById(evt, "grade", edu.id)}
                />
              </label>
            </form>
          </div>
        );
      })}
      <button onClick={handleNew}>Add Education</button>
    </div>
  );
}

export default Education;
