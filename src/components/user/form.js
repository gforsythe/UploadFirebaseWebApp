import React, { useState } from "react";
import { auth, createNewUser, signIn } from "../../Utils/firebase";

function LoginForm() {
  const [userInfo, setUser] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(true);

  function handleForm(e) {
    e.preventDefault();
    let email = userInfo.email;
    let password = userInfo.password;

    if (register) {
      createNewUser(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("reg ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signIn(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("sign in ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }
  function changeHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
