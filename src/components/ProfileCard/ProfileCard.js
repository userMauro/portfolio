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
                <a href="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQLERUxBTZg5dAAAAYKJjbfKM8eLhodahQXzZAyiRzxvojwV1uWJEh7XS3JTo0MgfIeakAtwwguHg4aoA3FnlcZ4H1GhpOPGOWE5a0MBrlOB42IgU4BHbQwPP2KRh5a2D-OZ8O-tZhBN3bXdsNOH4esh-nYxa6RFflfVPnhvSOVignigb6p6a4oDzU-BUnVa3Ph-hbEiGMh3753naarA2YjAd6CY0QF20FK8S4psf47D-VAw7l620tgprHfBEicSIDp05Rhv3oYzzYIJ8-m6RvsFN4AF_Meo6P_x6IvSkO2w2SxVPp8nSdeoOubuc0kD6beTP-yuEw8wMaB6AOmPlWb1clvqJNMdDDcorXVGs5VifW5rRUwxmY0-x5AyBTWomsXSpxBO_uVd7lkH-AjuRg16wLv8CzK_AduUwWsaKzz1zB6_ExfMqKhOqAnSVFD6k5EYrjB4B-7WyAAK_TKvY0tJcNCZGzrSDpz1o1FDjtGutnVdfKNw-WUe-G4iE5nDXALCr17-8S988Y378kW0RDjMGxP0l7W3osMoh-LRmLiEmlGusW1qpUR84u0VaA5a-GZxaQ" rel="noreferrer" target="_blank">
                    <img title="Download CV" className="profilecard-icons-links-square" src={cvIcon} alt='cv-icon' />
                </a>
            </div>

        </div>
    )
};