import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const GetProperty = () => {
  let [properties, setProperties] = useState([]);
  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");
  let [house, setHouse] = useState([]);

  //   base url for image location
  const img_url = "";

  let navigator = useNavigate();

  // function to fetch properties from the server
  const getProperties = async () => {
    setError("");
    setLoading("Fetching Properties. Please wait...");

    try {
      const response = await axios.get(
        "",
      );
      console.log(response);
      if (response.status === 200) {
        setLoading("");
        setProperties(response.data.properties);
        let house_properties = response.data.properties.filter(
          (property) => property.property_location === "house",
        );

        setHouse(house_properties);
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);
  console.log("properties: ", properties);

  return (
    <div className="row justify-conten-center">
      <Navbar />
      <h3>Available Properties</h3>
      <h5 className="text-warning">{loading}</h5>
      <h5 className="text-danger">{error}</h5>

      <div className="input-group m-3">
        <input
          type="text"
          placeholder="Search property by name"
          className="form-control"
        />
      </div>
      <br />
      <hr />
      {/* map/loop over the property array to access one at a time */}

      <h2 className="text-center my-2 p-4 bg-dark text-white">Gypsum</h2>

      {house.map((property) => (
        <div className="col-md-3 justify-content-center mb-4">
          <div className="card shadow card-margin">
            <img
              src={img_url + property.property_photo}
              alt=""
              className="property_img mt-4"
            />

            <div className="card-body">
              <h5 className="mt-2">{property.property_name}</h5>
              <p className="text-muted">{property.property_description}</p>
              <b className="text-warning">{property.property_price}</b>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  navigator("/makepayment", { state: { property } });
                }}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      ))}

      <h2 className="text-center my-2 p-4 bg-dark text-white">Properties</h2>

      {properties.map((property) => (
        <div className="col-md-3 justify-content-center mb-4">
          <div className="card shadow card-margin">
            <img
              src={img_url + property.property_photo}
              alt=""
              className="property_img mt-4"
            />
            <div className="card-body">
              <h5 className="mt-2">{property.property_name}</h5>
              <p className="text-muted">{property.property_description}</p>
              <b className="text-warning">{property.property_price}</b>
              <br />
              <button
                className="btn btn-dark"
                onClick={() => {
                  navigator("/makepayment", { state: { property } });
                }}
              >
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetProperty;