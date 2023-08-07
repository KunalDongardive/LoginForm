import React from "react";
import "./signIn.css";

const SignIn = ({ user }) => {
  return (
    <div className="signIn">
      <div className="container">
        <div className="left">
          <div className="background">
            <img src="./images/sign.webp" alt="" />
          </div>
          <div className="cName">
            <h4>AimToz Technologies</h4>
          </div>
          <div className="summary">
            <p>Nice to meet you again</p>
            <h2>WELCOME</h2>
            <h1>{user.name}!</h1>
            <img
              src={user.photo}
              alt="User"
              style={{ height: "200px", width: "150px" }}
            />
          </div>
        </div>
        <div className="right">
          <div className="rForm">
            <div className="top">
              <h2>Login to Your Account</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit.
                Fuga reiciendis possimus ratione <br /> placeat repudiandae, rem
                esse ut
                <br /> dolores officiis in.
              </p>
            </div>
            <div className="user">
              <label htmlFor="">Usernme or Email Address</label>
              <input type="username" placeholder="Username" />
            </div>
            <div className="user">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="keep">
              <div className="check">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <p>Already a member?</p>
            </div>
            <div className="buttn">
             <button>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
