import { Link, useNavigate } from "react-router-dom";


function LoginPage() {
  return (
    <section className="loginPage">
      <section>
        <div>
          <h1>Login Page</h1>
        </div>
      </section>
      <section className="loginPage__card">
        <form className="loginPage__form">
          <div className="loginPage__email  loginPage__formGroup">
            <label className="loginPage__userEmailLabel">Email:</label>
            <input
              className="loginPage__userEmailInput"
              placeholder="Enter your mingle email"
              type="text"
              name="addEmail"
              id="addEmail"
            />
          </div>
          <div className="loginPage__password">
            <label>Password:</label>
            <input
              className="loginPage__passwordInput"
              placeholder="Enter your mingle Password"
            />
          </div>

          <div>
            <Link to= "/signUpPage">
              <p>Don't have an account, press this mysteious button </p>
              <button>Sign up Page</button>
            </Link>
          </div>
        </form>
      </section>
    </section>
  );
}

export default LoginPage;
