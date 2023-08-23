function SignUpPage() {
  return (
    <section className="signUpPage">
      <section>
        <div>
          <h1>Sign up Page</h1>
        </div>
      </section>
      <section className="signUp__card">
        <form className="signUp__form">
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
              name="addEmail"
              id="addEmail"
            />
          </div>
          <div className="loginPage__password">
            <label>Enter your Password</label>
            <input
              className="loginPage__passwordInput"
              placeholder="Enter your mingle Password"
            />
          </div>
        </form>
      </section>
    </section>
  );
}

export default SignUpPage;
