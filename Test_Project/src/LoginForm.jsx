import './App.css'

export default function LoginForm() {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

