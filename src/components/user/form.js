import React, { useRef, useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

 function handleForm(e) {
    e.preventDefault();
   if (register) {
       console.log("register");
   } else {
       console.log("sign in");
   }
    
  };
 function changeHandler(e)  {
     let name = e.target.name;
     let value = e.target.value;


 };

  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <div className="form-group">
          <label>Email</label>
          <input
          ref={emailRef}
            type="email"
            className="form-control"
            name="Email"
            onChange={(e) => changeHandler(e)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
          ref={passwordRef}
            type="password"
            className="form-control"
            name="Password"
            onChange={(e) => changeHandler(e)}
          ></input>
        </div>
      <button type="submit" className="btn btn-success" >
        {register ? "register" : "sign in"}
      </button>
      </form>
    </div>
  );
}

export default LoginForm;
