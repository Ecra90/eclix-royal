import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Mpesapayment = () => {
  const { property } = useLocation().state || {};
  console.log(property);

  const img_url = "";
  let [phone, setPhone] = useState("");
  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading("Please wait ...");

    try {
      const data = new FormData();

      data.append("amount", property.property_price);
      data.append("phone", phone);

      const response = await axios.post(
        "",
        data,
      );
      console.log(response);
      if (response.status === 200) {
        setLoading("");
        setSuccess(response.data.message);
        setPhone("");
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <h2>M-pesa xpress</h2>

      <div className="col-md-3">
        <img
          src={img_url + property.property_photo}
          alt=""
          className="rounded img-thumbnail"
        />
      </div>

      <div className="col-md-3 p-4">
        <h2 className="text-dark">{property.property_name}</h2>
        <h4 className="text-primary">{property.property_location}</h4>
        <p className="text-muted">{property.property_description}</p>
        <h4 className="text-warning">{property.property_price}</h4>

        <hr />

        <h6 className="text-warning">{loading}</h6>
        <h6 className="text-danger">{error}</h6>
        <h6 className="text-success">{success}</h6>

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            className="form-control"
            required
            placeholder="Enter Amount"
            readOnly
            value={property.property_price}
          />
          <br />

          <input
            type="tel"
            className="form-control"
            required
            placeholder="Enter MPESA NO 2547XXXXXXXXX"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
          />
          <br />
          <button className="btn btn-dark">Pay Now</button>
        </form>
      </div>
    </div>
  );
};
export default Mpesapayment;