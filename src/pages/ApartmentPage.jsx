import React, { useEffect, useState } from "react";
import "./ApartmentPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { DescriptionPanel } from "../components/DescriptionPanel";
import { useLocation, useParams } from "react-router-dom";
import apartmentData from "../../db.json";

function ApartmentPage() {
  const location = useLocation();
  const [flat, setFlat] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchApartmentData(id);
  }, [id]);

  function fetchApartmentData(id) {
    // Recherchez l'appartement correspondant dans les données importées
    const apartment = apartmentData.find((apartment) => apartment.id === id);
    setFlat(apartment);
  }

  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, index) => (
            <li key={index}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
