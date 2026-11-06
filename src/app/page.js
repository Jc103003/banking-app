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
            <div className="login__field">
              <label className="login__label" htmlFor="email">
                Email address
              </label>
              <input
                required
                type="email"
                className="login__input"
                id="email"
                name="email"
                placeholder="Example@gmail.com"
              />
            </div>
            <div className="login__field">
              <label className="login__label" htmlFor="password">
                Password
              </label>
              <input
                required
                type="password"
                className="login__input"
                id="password"
                name="password"
                placeholder="***************"
              />
            </div>
            <div className="login__help">
              <label className="login__remember" htmlFor="remember_me">
                <input
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  value="yes"
                />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button className="login__submit" type="button">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
