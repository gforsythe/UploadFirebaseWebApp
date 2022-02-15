import React, { useState } from "react";
import { auth, createNewUser,  signIn, signOutBaby,updateEmailBaby,emailCreds } from "../../Utils/firebase";

function LoginForm() {
  const [userInfo, setUser] = useState({
    email: "",
    password: "",
  });
  const [register, setRegister] = useState(false);

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
function handleLogout(){
  signOutBaby(auth).then(() => {
    console.log("You're Out");
  }).catch((error) => {
    // An error happened.
  });
}

function handleGetUserInfo(){
  let getUser = auth.currentUser;
  if (getUser) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
     getUser.getIdTokenResult().then(res =>{
      console.log(res);
    });
  } else {
    // No user is signed in.
    console.log("Nope NO INFO FOR YOU");
  }
}

function handleUpdateEmail(){
  let creds = emailCreds.credential("test@example.com", "123456");
  updateEmailBaby(auth.currentUser, "test@exampleBABY2.com").then(() => {
    // Email updated!
    // ...
    console.log("email Updated!");
  }).catch((error) => {
    // An error occurred
    console.log(error);
    // ...
  });
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
      <hr/>
      <button onClick={handleLogout}>Log Out</button>
      <hr/>
      <button onClick={handleGetUserInfo}>Get User Info</button>
      <hr/>
      <button onClick={handleUpdateEmail}>Update Email</button>
    </div>
  );
}

export default LoginForm;
