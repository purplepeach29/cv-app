function PersonalData({ personalData, setPersonalData }) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    console.log(reader.result);
    setPersonalData({ ...personalData, photo: reader.result });
  });
  function handleChange(evt, prop) {
    setPersonalData({ ...personalData, [prop]: evt.target.value });
  }

  function handlePhotoChange(evt) {
    console.log("photo change");
    reader.readAsDataURL(evt.target.files[0]);
  }

  return (
    <div>
      <h2>Personal Information</h2>
      <div className="listItem">
        <form>
          <label>
            Name
            <input type="text" onChange={(evt) => handleChange(evt, "name")} />
          </label>
          <label>
            Title
            <input type="text" onChange={(evt) => handleChange(evt, "title")} />
          </label>
          <label>
            Photo
            <input type="file" onChange={(evt) => handlePhotoChange(evt)} />
          </label>
          <label>
            E-mail
            <input
              type="email"
              onChange={(evt) => handleChange(evt, "email")}
            />
          </label>
          <label>
            Phone Number
            <input type="tel" onChange={(evt) => handleChange(evt, "phone")} />
          </label>
          <label>
            Location
            <textarea onChange={(evt) => handleChange(evt, "location")} />
          </label>
          <label>
            Profile
            <textarea onChange={(evt) => handleChange(evt, "profile")} />
          </label>
          <label>
            Skills (comma separated)
            <textarea onChange={(evt) => handleChange(evt, "skills")} />
          </label>
          <label>
            Interests (comma separated)
            <textarea onChange={(evt) => handleChange(evt, "interests")} />
          </label>
        </form>
      </div>
    </div>
  );
}

export default PersonalData;
