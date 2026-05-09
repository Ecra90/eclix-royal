import { useState } from "react";

function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {

    e.preventDefault();

    console.log(name, email, password);

  };

  return (

    <div className="form-container">

      <form onSubmit={handleSignup}>

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button type="submit">Create Account</button>

      </form>

    </div>

  );

}

export default SignUp;
