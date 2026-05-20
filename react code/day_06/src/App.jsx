import React, { useState } from 'react'
const App = () => {
  const [data, setFormData] = useState({ username: "", email: "", password: "" });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!data.username)
      formErrors.username = "Username is required";
    if (!data.email.includes("@"))
      formErrors.email = "Email is not valid";
    if (data.password.length < 6)
      formErrors.password = "Password must be at least 6 characters long";
    setError(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setUsers([...users, data]);
      setFormData({ username: "", email: "", password: "" });
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...data, [name]: value });
  }
  const errorStyle = { color: "red", fontSize: "14px" };
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <p style={errorStyle}>{error.username}</p>
        <input type="text" name="username" id="username"
          placeholder='Enter your username' value={data.username}
          onChange={handleChange} /><br />
        <p>{error.email}</p>
        <input type="email" name="email" id="email"
          placeholder='Enter your Email' value={data.email}
          onChange={handleChange} /><br />
        <p>{error.password}</p>
        <input type="password" name="password" id="password"
          placeholder='Enter your password' value={data.password}
          onChange={handleChange} /><br />
        <button type="submit">Register</button>
      </form>
      <div>
        <h2>Registered Users</h2>
        {users.map((user, index) => (
          <div key={index}>{user.username}:{user.email}</div>
        ))}
      </div>
    </div>
  )
}

export default App