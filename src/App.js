import React, { useState } from "react";

const App = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecords = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };

    setRecords([...records, newRecords]);
    setUserRegistration({
      username: "",
      email: "",
      phone: 0,
      password: "",
    });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Full Name</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.username}
            name="username"
            onChange={handleChange}
            id="username"
            placeholder="Enter Full-Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.email}
            name="email"
            onChange={handleChange}
            id="email"
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.phone}
            name="phone"
            onChange={handleChange}
            id="phone"
            placeholder="Enter Phone number"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            value={userRegistration.password}
            name="password"
            onChange={handleChange}
            id="password"
            placeholder="Enter password"
          />
        </div>
        <button type="submit">Registration</button>
      </form>
      <div>
        {records.map((record) => {
          const { id, username, email, password, phone } = record;
          return (
            <div className="showDataStyles" key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
