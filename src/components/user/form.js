import React, { useRef, useState } from "react";

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(true);

  function handleForm(e) {
    e.preventDefault();
    if (register) {
      console.log(user );
    } else {
      console.log(user );
    }
  }
  function changeHandler(e) {
    let name = e.target.name;
    let value = e.target.value
    setUser((prevState) => ({
      ...prevState, [name]: value}));
  }

  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <div className="form-group">
          <label>Email</label>
          <input
            placeholder="email"
            type="email"
            className="form-control"
            name="email"
            onChange={changeHandler}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            placeholder="password"
            type="password"
            className="form-control"
            name="password"
            onChange={changeHandler}
          ></input>
        </div>
        <button type="submit" className="btn btn-success">
          {register ? "register" : "sign in"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
