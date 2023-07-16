import React from "react";
import headshot from "../assets/headshot.jpg"
import mail from "../assets/Mail.png"
import logo from "../assets/LinkedIn-small.png"


export default function Info(){
    return(

        <div className="info-section">
            <img src={headshot} className="headshot"/>
            <h1 className="full-name">Joshua Farr</h1>
            <h4 className="title">Frontend Developer</h4>

            <div className="button-section">
                <a className="email-button" type="button" href="mailto:joshua.farr2018@gmail.com"><img src={mail}/>Email</a>
                <a className="linkedin-button" href='https://www.linkedin.com/in/joshuaafarr'><img scr ={logo}/>LinkedIn</a>
            </div>        

        </div>

    )
}