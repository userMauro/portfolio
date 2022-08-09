import React from "react";

// css
import './ProfileCard.css';

// assets
import profileImg from "../../assets/perfil-img.png";
import githubIcon from "../../assets/icon-github.png";
import linkedinIcon from "../../assets/icon-linkedin.png";
import cvIcon from "../../assets/icon-cv.png";
// import lightbulbON from "../../assets/light-bulb-on.png";
// import lightbulbOFF from "../../assets/light-bulb-off.png";

export default function Project () {
    // const [stateLightBulb, SetStateLightBulb] = useState(false);

    // function turnOnTheLight() {
    //   SetStateLightBulb(!stateLightBulb);
    // };

    return (
        <div className="ProfileCard">

            {/* BANNER */}
            <div className="profilecard-banner">

            </div>

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
                <img title="Linkedin" className="profilecard-icons-links" src={linkedinIcon} alt='linkedin-icon' />
                <img title="Github" className="profilecard-icons-links" src={githubIcon} alt='github-icon' />
                <img title="Download CV" className="profilecard-icons-links-square" src={cvIcon} alt='cv-icon' />
            </div>


            {/* <div className="profilecard-lightBulb-div" onClick={() => turnOnTheLight()}>
            { stateLightBulb
                ? <img className="profilecard-lightBulb-img" src={lightbulbON} alt='lightbulbON' />
                : <img className="profilecard-lightBulb-img" src={lightbulbOFF} alt='lightbulbOFF' />
            }
            </div> */}
        </div>
    )
};