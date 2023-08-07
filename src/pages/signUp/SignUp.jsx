import React from "react";
import "./signUp.css";
import { useState } from "react";

const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = () => {
    // Pass the name and photo to the parent component
    onSignUp({ name, photo });
  };

  return (
    <div className="signUp">
      <div className="container">
        <div className="left">
          <img src="./images/SignUp.jpg" alt="" />
        </div>
        <div className="right">
          <form action="" className="suForm">
            <h1>Sign up</h1>
            <div className="name">
              <label htmlFor="">Full Name</label>
              <input
                type="fullName"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="name">
              <label htmlFor="">Add Photo</label>
              <input
                type="file"
                alt=""
                className="photo"
                onChange={handlePhotoChange}
              />
            </div>
            <div className="name">
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="name">
              <label htmlFor="">Username</label>
              <input type="userName" placeholder="Username" />
            </div>
            <div className="name">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="name">
              <label htmlFor="">Re-Password</label>
              <input type="re-password" placeholder="Re-Password" />
            </div>
            <div className="check">
              <input type="checkbox" />
              <p>Agree to the Terms of user</p>
            </div>
            <div className="btn">
              <button onClick={handleSubmit}>Sign up</button>
              <p>Sign in</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
