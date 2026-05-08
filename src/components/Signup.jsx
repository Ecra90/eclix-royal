import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [home_address, setHomeAddress] = useState("");

    const [loading, setLoading] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    const [show_password, setShowPassword] = useState(false);
    const [loader, setLoader] = useState(false);
    
    const handleSubmit = async (e) => {
      // prevent default behaviour
      e.preventDefault();

      // notifying user to wait
      setError("");
      setSuccess("");
      setLoader(true);
      setLoading("Submitting data! Please wait ...");

      // confirm user input
      console.log(username, email, phone, password, location, home_address);

      // try send data to server
      try {
        // create form data
        const user_data = new FormData();
        user_data.append("username", username);
        user_data.append("email", email);
        user_data.append("phone", phone);
        user_data.append("password", password);
        user_data.append("location", location);
        user_data.append("home_address", home_address);

        // use axios to send data to server
        const response = await axios.post(
          "",
          user_data,
        );
        console.log(response);
        if (response.status === 200) {
          setSuccess(response.data.message);
          setLoading("");
          setLoader(false);
          setUsername("");
          setEmail("");
          setPhone("");
          setPassword("");
          setLocation("");
          setHomeAddress("");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading("");
        setLoader(false);
      }
    };
  return (
    <div className="row justify-content-center mt-4">
      <Navbar />
      <div className="col-md-6 card shadow p-4">
        <h2>Sign up</h2>
        <h5 className="text-warning">{loading}</h5>
        <h5 className="text-danger">{error}</h5>
        <h5 className="text-success">{success}</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your name"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <br />
          <input
            type="tel"
            className="form-control"
            placeholder="Enter Phone Number"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
          <br />
          <div className="input-group">
            <input
              type={show_password ? "text" : "password"}
              className="form-control"
              placeholder="Enter your Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button
              className={
                show_password ? "btn bi bi-eye-slash" : "btn bi bi-eye"
              }
              onClick={() => {
                setShowPassword(!show_password);
              }}
            ></button>
          </div>
          <br />
          {loader ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button className="btn btn-dark">Sign up</button>
          )}
          <br />
          <Link to="/signin"> Already have an account? Sign in</Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;