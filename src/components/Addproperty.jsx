import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

const AddProperty= () => {
  let [property_name, setPropertyName] = useState("");
  let [property_description, setPropertyDescription] = useState("");
  let [property_price, setPropertyPrice] = useState("");
  let [property_location, setPropertyLocation] = useState("");
  let [property_photo, setPropertyPhoto] = useState("");
  let [property_size, setPropertySize] = useState("");
  let [property_bath, setPropertyBath] = useState("");
  let [property_bed, setPropertyBed] = useState("");
  let [property_featured, setPropertyFeatured] = useState("");
  let [property_forsale, setPropertyForSale] = useState("");

  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading("Please wait...");

    try {
      // box /envelope to put product data in for transmission
      const property_data = new FormData();

      //   add end product inforamtion needed to the box
      property_data.append("property_name", property_name);
      property_data.append("property_description", property_description);
      property_data.append("property_cost", property_price);
      property_data.append("property_location", property_location);
      property_data.append("property_size", property_size);
      property_data.append("property_bath", property_bath);
      property_data.append("property_bed", property_bed);
      property_data.append("property_featured", property_featured);
      property_data.append("property_forsale", property_forsale);
      property_data.append("property_photo", property_photo);

      //   use axios (messeger) to send the data to server

      const response = await axios.post(
        "",
        property_data,
      );
      console.log(response);

      if (response.status === 200) {
        setLoading("");
        setSuccess(response.data.message);

        // clear the form
        setPropertyName("");
        setPropertyDescription("");
        setPropertyPrice("");
        setPropertyLocation("");
        setPropertySize("");
        setPropertyBath("");
        setPropertyBed("");
        setPropertyFeatured("");
        setPropertyForSale("");
      }
    } catch (error) {
      setError(error.message);
      setLoading("");
    }
  };
  return (
    <div className="row justify-content-center mt-4">
      <Navbar />
      <div className="col-md-6 card shadow p-4">
        <h2>Add Property</h2>

        <h5 className="text-danger">{error}</h5>
        <h5 className="text-warning">{loading}</h5>
        <h5 className="text-success">{success}</h5>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter Product Name"
            onChange={(e) => {
              setPropertyName(e.target.value);
            }}
            value={property_name}
          />
          <br />

          <textarea
            className="form-control"
            rows="7"
            required
            placeholder="Enter Product Description"
            onChange={(e) => {
              setPropertyDescription(e.target.value);
            }}
            value={property_description}
          ></textarea>
          <br />

          <input
            type="number"
            className="form-control"
            required
            placeholder="Enter Property Price"
            onChange={(e) => {
              setPropertyPrice(e.target.value);
            }}
          />
          <br />

          <label htmlFor="" className="form-label">
            Property location
          </label>
          <select
            className="form-select"
            required
            onChange={(e) => {
              setPropertyLocation(e.target.value);
            }}
          >
            <option value="">Select Location</option>
            <option value="All Types">All Types</option>
            <option value="Apartments">Apartments</option>
            <option value="Villas">Villas</option>
            <option value="Air BnB'S">Air BnB'S</option>
          </select>
          <br />

          <label htmlFor="" className="form-label">
            Property photo
          </label>
          <input
            type="file"
            className="form-control"
            required
            accept="image/*"
            onChange={(e) => {
              setPropertyPhoto(e.target.files[0]);
            }}
          />
          <br />

          <button className="btn btn-dark">Add Property</button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
