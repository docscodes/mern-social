import { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media App</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social Media App.
          </span>
        </div>
        <div className="loginRight">
          <form
            className="loginBox"
            onSubmit={handleClick}
          >
            <input
              required
              ref={email}
              type="email"
              placeholder="Email"
              className="loginInput"
            />
            <input
              required
              minLength="6"
              ref={password}
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
