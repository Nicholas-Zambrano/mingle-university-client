import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.scss";
function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    const loginData = {
      email: event.target.addEmail.value,
      password: event.target.password.value,
    };

    // sending the data to backend
    axios
      .post("http://localhost:8080/auth/login", loginData)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        console.log(token);
        localStorage.setItem("token", token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data);
      });
  }

  return (
    <section className="loginPage">
      <section>
        <div className="loginPage__title">
          <h1>Login Page</h1>
        </div>
      </section>
      <section className="loginPage__card">
        <form className="loginPage__form" onSubmit={handleSubmit}>
          <div className="loginPage__email  loginPage__formGroup">
            <label className="loginPage__userEmailLabel">Email:</label>
            <input
              className="loginPage__userEmailInput   loginPage__input"
              placeholder="Enter your mingle email"
              type="text"
              name="addEmail"
              id="addEmail"
            />
          </div>
          <div className="loginPage__password loginPage__formGroup">
            <label className="loginPage__label">Password:</label>
            <input
              className="loginPage__passwordInput loginPage__input"
              placeholder="Enter your mingle Password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button className="loginPage__button">Log in</button>

          {error && <div className="login__message">{error}</div>}

          <div className="loginPage__linkSignUp">
            <p className="loginPage__linkMessage">
              Don't have an account, press the sign up button{" "}
            </p>
            <Link to="/signUpPage">
              {/* <p className="loginPage__linkMessage">Don't have an account, press this mysteious button </p> */}
              <button className="loginPage__linkButton">Sign up Page</button>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
}

export default LoginPage;
