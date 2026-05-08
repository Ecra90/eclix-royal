import { useState } from "react";

function AddProperty() {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(title, location, price);

  };

  return (

    <div className="form-container">

      <form onSubmit={handleSubmit}>

        <h2>Add Property</h2>

        <input
          type="text"
          placeholder="Property Name"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />

        <input type="file" />

        <textarea placeholder="Description"></textarea>

        <button>Add Property</button>

      </form>

    </div>

  );

}

export default AddProperty;
