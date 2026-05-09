import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}
function Login() {
  return (
    <div className="login-container">
      <h1>Login</h1>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
  );
}

export default Login;