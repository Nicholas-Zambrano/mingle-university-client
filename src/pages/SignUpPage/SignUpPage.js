import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react";

function SignUpPage() {
  // const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const signUpData = {
      first_name: event.target.firstName.value,
      last_name: event.target.lastName.value,
      phone: event.target.phoneNumber.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    // sending a post request to backend to register a new users
    axios
      .post("http://localhost:8080/auth/register", signUpData)
      .then((response) => {
        console.log(response);
        window.location.href = "./loginPage";
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Invalid email or phone number");
      });
  }

  return (
    <section className="signUpPage">
      <section>
        <div>
          <h1>Sign up Page</h1>
        </div>
      </section>
      <section className="signUp__card">
        <form className="signUp__form" onSubmit={handleSubmit}>
          <div className="signUp__name signUp__formGroup">
            <label>First Name:</label>
            <input
              className="signUp__firstNameInput"
              placeholder="Enter your first name"
              type="text"
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="signUp__name signUp__formGroup">
            <label>Last Name:</label>
            <input
              className="signUp__lastNameInput"
              placeholder="Enter your last name"
              type="text"
              name="lastName"
              id="lastName"
            />
          </div>
          <div className="signUp__phone signUp__formGroup">
            <label>Phone Number:</label>
            <input
              className="signUp__phoneNumberInput"
              placeholder="Enter your phone number"
              type="text"
              name="phoneNumber"
              id="phoneNumber"
            />
          </div>
          <div className="signUp__email  lsignUp__formGroup">
            <label className="signUp__userEmailLabel">Email: </label>
            <input
              className="signUp__userEmailInput"
              placeholder="Enter your email"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="signUpPage__password">
            <label>Enter your Password</label>
            <input
              className="signUpPage__passwordInput"
              placeholder="Enter your mingle Password"
              name="password"
              id="password"
            />
          </div>

          <div className="signUp__error">{errorMessage}</div>
          <button> Sign Up</button>
        </form>
      </section>
    </section>
  );
}

export default SignUpPage;
