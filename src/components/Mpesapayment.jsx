import { useState } from "react";
import axios from "axios";

function MpesaPayment() {

  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async (e) => {

    e.preventDefault();

    try{

      await axios.post("http://localhost:5000/mpesa", {

        phone,
        amount

      });

      alert("STK Push Sent");

    }catch(error){

      console.log(error);

    }

  };

  return (

    <div className="form-container">

      <form onSubmit={handlePayment}>

        <h2>M-Pesa Payment</h2>

        <input
          type="text"
          placeholder="2547XXXXXXXX"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button>Pay Now</button>

      </form>

    </div>

  );

}

export default MpesaPayment;
