import { sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import {
  auth,
  createNewUser,
  signIn,
  signOutBaby,
  updateEmailBaby,
  updateProfileBaby,
  googleAuthPro,
  googlePopUp,
} from "../../Utils/firebase";

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
          sendEmailVerification(auth.currentUser).then(() => {
            alert("Email Link Sent");
          });
          const user = userCredential.user;
          console.log("reg ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("this is the error", errorCode, errorMessage);
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
          console.log("this is the error", errorCode, errorMessage);
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
  function handleLogout() {
    signOutBaby(auth)
      .then(() => {
        console.log("You're Out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  function handleGetUserInfo() {
    let getUser = auth.currentUser;
    if (getUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // ...
      getUser.getIdTokenResult().then((res) => {
        console.log(res);
      });
    } else {
      // No user is signed in.
      console.log("Nope NO INFO FOR YOU");
    }
  }

  function handleUpdateEmail() {
    let getUser = auth.currentUser;
    updateEmailBaby(getUser, "steve@gmail.com")
      .then(() => {
        // Email updated!
        // ...
        console.log("email Updated!");
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        // ...
      });
  }

  function handleUpdateProfile() {
    let getUser = auth.currentUser;
    updateProfileBaby(getUser, {
      displayName: "Bianca",
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log("Updated Profile", getUser);
      })
      .catch((error) => {
        // An error occurred
        console.log(error);
        // ...
      });
  }

  function handleGoogleSignIn(){
const provider = new googleAuthPro()
    googlePopUp(auth, provider)
    .then((result)=>{
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log(result);
    const credential = googleAuthPro.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("This is a google pop up!",user);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = googleAuthPro.credentialFromError(error);
    // ...
    console.log("this is the error",errorCode, errorMessage, email);
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
      <hr />
      <button className="btn btn-danger" onClick={handleLogout}>
        Log Out
      </button>
      <hr />
      <button className="btn btn-primary" onClick={handleGetUserInfo}>
        Get User Info
      </button>
      <hr />
      <button className="btn btn-warning" onClick={handleUpdateEmail}>
        Update Email
      </button>
      <hr />
      <button className="btn btn-info" onClick={handleUpdateProfile}>
        Update Profile
      </button>
      <hr />
        <button className="btn btn-lg btn-google btn-block text-uppercase btn-outline" onClick={handleGoogleSignIn}>
          <p className="google-text">
            <img  className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
          Signup Using Google</p>
        </button>
    </div>
  );
}

export default LoginForm;
