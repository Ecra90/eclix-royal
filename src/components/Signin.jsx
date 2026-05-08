import { useState } from "react";

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    console.log(email, password);

  };

  return (

    <div className="form-container">

      <form onSubmit={handleLogin}>

        <h2>Sign In</h2>

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

        <button>Login</button>

      </form>

    </div>

  );

}

export default SignIn;



