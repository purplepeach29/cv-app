import { v4 as uuidv4 } from "uuid";

function Experience({ experience, setExperience }) {
  function handleNew(evt) {
    setExperience([
      ...experience,
      {
        companyName: "",
        positionTitle: "",
        summary: "",
        description: "",
        startDate: "",
        endDate: "",

        id: uuidv4(),
      },
    ]);
  }

  function handleChangeById(evt, prop, id) {
    let newExperience = [];
    for (let exp of experience) {
      if (exp.id === id) {
        newExperience.push({ ...exp, [prop]: evt.target.value });
      } else {
        newExperience.push(exp);
      }
    }
    setExperience(newExperience);
  }

  function deleteById(id) {
    setExperience((old) => {
      return old.filter((edu) => edu.id !== id);
    });
  }

  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp, idx) => {
        return (
          <div key={exp.id} className="listItem">
            <button className="delete" onClick={() => deleteById(exp.id)}>
              X
            </button>
            <h3>Experience {idx + 1} </h3>
            <form>
              <label>
                Company Name
                <input
                  type="text"
                  onChange={(evt) =>
                    handleChangeById(evt, "companyName", exp.id)
                  }
                />
              </label>
              <label>
                Position Title
                <input
                  type="text"
                  onChange={(evt) =>
                    handleChangeById(evt, "positionTitle", exp.id)
                  }
                />
              </label>
              <label>
                Summary
                <textarea
                  onChange={(evt) => handleChangeById(evt, "summary", exp.id)}
                />
              </label>
              <label>
                Description (comma separated)
                <textarea
                  onChange={(evt) =>
                    handleChangeById(evt, "description", exp.id)
                  }
                />
              </label>
              <label>
                Start Date
                <input
                  placeholder="MM/YY"
                  type="text"
                  onChange={(evt) => handleChangeById(evt, "startDate", exp.id)}
                />
              </label>
              <label>
                End Date
                <input
                  placeholder="MM/YY"
                  type="text"
                  onChange={(evt) => handleChangeById(evt, "endDate", exp.id)}
                />
              </label>
            </form>
          </div>
        );
      })}
      <button onClick={handleNew}>Add Experience</button>
    </div>
  );
}

export default Experience;
