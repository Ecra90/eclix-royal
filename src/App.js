
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddProperty from "./components/Addproperty";
import GetProperty from "./components/Getproperty";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Mpesapayment from './components/Mpesapayment';
import { type } from "node:os";
import { sourceMapsEnabled } from "node:process";
import React,{useEffect,useRef} from "react";
function App(){
  const mapRef = useRef(null); //This will hold the map instance
  useEffect(()=>{
    //initialize the map once the  components mounts
    const map = new google.maps.map(document.getElementById("map"),{
      center: {lat: -34.397, ing: 150.644},
      zoom: 8,
    });
    mapRef.current = map; //store it in the ref so other functions can use  it 
  },[]);
  const someOtherFunction = ()=>{
    //now you can access it anywhere using mapRef.current
    if (mapRef.current){
      console.log("map is ready!", mapRef.current);
    }
  };
  return <div id="map" style={{height:'400px', width:'100%'}}></div>;
}
document.querySelector("button").addEventListener("click", ()=>{
  const location =
  document.querySelector("input").value;
  const type=
  document.querySelector("select").value;
  if(location && type){
    alert(`Searching for ${type} in ${location}`);
} 
});
function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1>Eclix Royal Homes</h1>
          </header>

          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/addproperty" element={<AddProperty />} />
            <Route path="/" element={<GetProperty />} />
            <Route path="/mpesapayment" element={<Mpesapayment />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
function ToggleFavourite(propertyId, button) {
  /*get existing favourites or start an empty array*/
  let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  const index = favourites.indexOf(propertyId);
  if (index === -1) {
    // Not in favourites, add it
    favourites.push(propertyId);
  } else {
    // Already in favourites, remove it
    favourites.splice(index, 1);
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
  const heartIcon = button.querySelector("#heart-icon");
  if (heartIcon.innerHTML === "&#9825;") {
    heartIcon.innerHTML = "&#9829;";
    // Add to favourites logic here (e.g., send request to server)
    console.log(`Property ${propertyId} added to favourites.`);
  } else {
    heartIcon.innerHTML = "&#9825;";
    // Remove from favourites logic here (e.g., send request to server)
    console.log(`Property ${propertyId} removed from favourites.`);
  }
  //save the updated favourites list to localStorage
  localStorage.setItem("favourites", JSON.stringify(favourites));
}
//function to update the visual state of buttons on page load
const updateFavouriteButtons = () => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  document.querySelectorAll(".fav-btn").forEach((button) => {
    const propertyId = button.getAttribute("data-property-id");
    const heartIcon = button.querySelector("#heart-icon");
    if (favourites.includes(propertyId)) {
      heartIcon.innerHTML = "&#9829;"; // Filled heart
    } else {
      heartIcon.innerHTML = "&#9825;"; // Empty heart
    }
  });
};
// Call the function on page load to set the correct state of buttons
document.addEventListener("DOMContentLoaded", updateFavouriteButtons);
//initialize UI on load
updateFavouriteButtons();
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = 'Light Mode';
}
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = 'Light Mode';
  } else {
    toggleBtn.textContent = 'Dark Mode';
  }
});
//save the choice so as it stays on reload
let theme = 'Light';
if (body.classList.contains('dark-mode')) {
  theme = 'Dark';
}
localStorage.setItem('theme', theme);
const searchinput = document.getElementById('propertysearch');
const cards = document.querySelectorAll('.property-card');
searchinput.addEventListener('keyup', ()=>{
  const query = searchinput.value.toLowerCase();
  cards.forEach(card=>{
    const location= card.querySelector('data-location').toLowerCase();
    const title = card.querySelector('h3').innerText.toLowerCase();
    if (location.includes(query)||title.includes(query)){
      card.style.display = "block"
    } else{
      card.style.display = "none"

    }
  });
});
/*global google*/
/*global maps */
/*global map*/
function findnearbyamenities(lat, ing){ //Add map here
const service = new google.maps.places.placesservice(map);
//...rest of your code
service.nearbysearch({
  location:{lat: lat, ing: ing},
  radius:2000,
  type:['school'],
},(results, status)=>{
  if (status ===google.maps.places.placesservicestatus.OK){
    const list = document.getElementById('amenities-list');
    list.innerHTML = ''; //clear existing list
    results.forEach(place=>{
      //crate a list item for each  amenity found
      const li = document.createElement('li');
      li.textcontext = `${place.name}-${place.vicinity}`;
      HTMLDataListElement.appendChild(li);
      //add a marker for the amenity
      new google.maps.marker({
        position:place.geometry.location,
        maps:maps,
        title:place.name,
        icon:'http:google.com'//use green markers for amenities
      })
    })
  }
})
}