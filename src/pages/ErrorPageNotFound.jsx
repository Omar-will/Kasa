import React from 'react'
import { Link } from 'react-router-dom';
import "./ErrorPageNotFound.scss";
import Navbar from '../components/Navbar';
import Footer from "../layout/Footer";
import Main from "../layout/Main";

function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Main>
        <div className='error-page'>
      <h1>404</h1>
      <h2>Oops! La page que vous demandez n'esxiste pas</h2>
      <Link to="/">Retourner sur la page d'acceuil</Link>
      </div>
      </Main>
      <Footer />
    </>
  )
}

export default ErrorPageNotFound
