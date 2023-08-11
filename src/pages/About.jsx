import React from 'react'
import { DescriptionPanel } from '../components/DescriptionPanel';
import "./About.scss";
import ImageBannerAbout from '../components/ImageBannerAbout';

function About() {
  return (
    <>
     <ImageBannerAbout /> 
     <div className='about__container'>
     <DescriptionPanel />
     <DescriptionPanel />
     <DescriptionPanel />
     <DescriptionPanel /> 
     </div>
    </>
  );
}

export default About;