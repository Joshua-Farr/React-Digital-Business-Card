import React from "react";
import GithubPic from "../assets/GitHub.png"
import LinkedInPhoto from "../assets/LinkedIn.png"


export default function footer(){
    return(
        <div className="footer">
            <a href="https://github.com/Joshua-Farr"><img src = {GithubPic} className="github-img"/></a>
            <a href="https://www.linkedin.com/in/joshuaafarr"><img src = {LinkedInPhoto} className="linkedIn-img"/></a>
        </div>
    )
}