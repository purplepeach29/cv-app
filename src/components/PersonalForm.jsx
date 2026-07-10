import { useState } from "react";

function PersonalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !phone) {
      setMessage("All fields are required");
      return;
    }

    setMessage("Saved Successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Details</h2>

      <div>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button type="submit">Save</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default PersonalForm;