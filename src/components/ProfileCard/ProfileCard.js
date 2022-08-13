import React from "react";

// css
import './ProfileCard.css';

// assets
import profileImg from "../../assets/perfil-img.png";
import githubIcon from "../../assets/icon-github.png";
import linkedinIcon from "../../assets/icon-linkedin.png";
import cvIcon from "../../assets/icon-cv.png";

export default function Project () {

    return (
        <div className="ProfileCard">

            {/* BANNER */}
            <div className="profilecard-banner"></div>

            {/* PROFILE IMG */}
            <div>
                <img className="profilecard-img" src={profileImg} alt='profileImg' />
            </div>

            {/* NOMBRE */}
            <div>
                <h3>Mauro Núñez Cioci</h3>
            </div>

            {/* OFICIO */}
            <p className="profilecard-job">Full Stack Developer</p>
            <a href="mailto:mauroncioci@gmail.com" className="profilecard-mail">mauroncioci@gmail.com</a>

            {/* LINKS */}
            <div className="profilecard-links">
                <a href="https://www.linkedin.com/in/mauro-nu%C3%B1ez-cioci-developer/" rel="noreferrer" target="_blank">
                    <img title="Linkedin" className="profilecard-icons-links" src={linkedinIcon} alt='linkedin-icon' />
                </a>
                <a href="https://github.com/userMauro" rel="noreferrer" target="_blank">
                    <img title="Github" className="profilecard-icons-links" src={githubIcon} alt='github-icon' />
                </a>
                <a href="https://drive.google.com/file/d/1c6iVKBPYFl3wxK8HU1yXrfsCqucpMAkP/view" rel="noreferrer" target="_blank">
                    <img title="Download CV" className="profilecard-icons-links-square" src={cvIcon} alt='cv-icon' />
                </a>
            </div>

        </div>
    )
};