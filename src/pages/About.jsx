import React from 'react'
import { DescriptionPanel } from '../components/DescriptionPanel';
import "./About.scss";
import ImageBannerAbout from '../components/ImageBannerAbout';

function About() {
  return (
    <>
     <ImageBannerAbout /> 
     <div className='about__container'>
     <DescriptionPanel title={<h2 className="title">Fiabilité</h2>} content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
     <DescriptionPanel title={<h2 className="title">Respect</h2>} content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
     <DescriptionPanel title={<h2 className="title">Service</h2>} content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
     <DescriptionPanel title={<h2 className="title">Sécurité</h2>} content="La sécurité est la priorié de Kasa. Aussi bien pour nos hôtes que les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." /> 
     </div>
    </>
  );
}

export default About;