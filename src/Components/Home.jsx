import React from "react";
import './Home.css'
import fotica from './fotica.png'
import { FiGithub} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";
import { FiMail} from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Home(){

 


    return(
      <div className="background">
         <div>
         <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet"/>
        
          </div>
        
        <div className="container">
        <div className="container-card">
          
        <img className= "fotica" src={fotica} alt="ea" />
        <div className="centered-div">
        <div className="button-container">
        <div className="button-group">
        <NavLink exact to='/cv-resume'><button className="d-4">CV RESUME</button></NavLink>
        <NavLink exact to='/projects'><button className="d-4">PROJECTS</button></NavLink>
        </div>
        <div className="button-group">
        <NavLink exact to='/personal'><button className="d-4">PERSONAL</button></NavLink>
        <NavLink exact to='/academic'><button className="d-4">ACADEMIC</button></NavLink>
        </div>
      </div>
      
      <div className="button-group">

      <div>
      <a href="https://github.com/massavalentina"><button className="social">
      <FiGithub/></button></a>
      </div>

      <div>
      <a href="https://www.linkedin.com/in/valentina-massa-b08469254/"><button className="social">
      <FiLinkedin/></button></a>
      </div>

      <div>
      <a href="mailto:valecacciavi@gmail.com?subject=Asunto del Mensaje&body=Cuerpo del mensaje"><button className="social">
      <FiMail/></button></a>
      </div>
      </div>
      </div>
      </div>      
      </div>
      </div>
    )

}

export default Home