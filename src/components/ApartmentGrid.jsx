import React, { useState, useEffect } from "react";
import "./ApartmentGrid.scss";
import Apartment from "./Apartment.jsx";

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

useEffect(fetchApartments, []);

function fetchApartments() {
  fetch("./db.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error);
  }
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <Apartment key={apartment.id} data={apartment} title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
      ))}
    </div>
  );
}

export default ApartmentGrid;
