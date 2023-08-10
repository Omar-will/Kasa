import React from 'react'
import Banner from "../layout/Banner";
import { ApartmentDescription } from '../components/ApartmentDescription';
import "./About.scss";

function About() {
  return (
    <>
     <Banner /> 
     <div className='about__container'>
     <ApartmentDescription />
     <ApartmentDescription />
     <ApartmentDescription />
     <ApartmentDescription /> 
     </div>
    </>
  );
}

export default About;