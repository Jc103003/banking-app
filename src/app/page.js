export default function SignInPage() {
  return (
    <main>
      {/* TODO: add where the output of the form should be sent */}
      <div className="login">
        <div className="login__intro">
          <h1>Welcome back</h1>
          <p>Sign in to your account</p>
        </div>
        <div className="login__form-container">
          <form className="login__form">
            <input
              required
              type="email"
              className="login__input"
              id="email"
              name="email"
              placeholder="Email"
            />
            <input
              required
              type="password"
              className="login__input"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button className="login__submit" type="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
