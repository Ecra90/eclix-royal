import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <h2>Luxury Homes</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/properties">Properties</Link>

        <Link to="/add-property">Add Property</Link>

        <Link to="/signin">Sign In</Link>

        <Link to="/signup">Sign Up</Link>

        <Link to="/mpesa">M-Pesa</Link>

      </div>

    </nav>

  );

}

export default Navbar;