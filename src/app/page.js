export default function SignInPage() {
  return (
    <main>
      {/* TODO: add where the output of the form should be sent */}
      <form>
        <label htmlFor="email">Email: </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Example@gmail.com"
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button type="button">Submit</button>
      </form>
    </main>
  );
}
