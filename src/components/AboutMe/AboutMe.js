import React from 'react';

// css
import './AboutMe.css';

// assets
import icon_js from "../../assets/tech-skills/icon-js.png";
import icon_nodejs from "../../assets/tech-skills/icon-nodejs.png";
import icon_html from "../../assets/tech-skills/icon-html5.png";
import icon_css from "../../assets/tech-skills/icon-css3.png";
import icon_react from "../../assets/tech-skills/icon-react.png";
import icon_redux from "../../assets/tech-skills/icon-redux.png";
import icon_express from "../../assets/tech-skills/icon-express.png";
import icon_postgreSQL from "../../assets/tech-skills/icon-postgresql.png";
import icon_sequelize from "../../assets/tech-skills/icon-sequelize.png";
import icon_mongodb from "../../assets/tech-skills/icon-mongodb.png";
import icon_mongoose from "../../assets/tech-skills/icon-mongoose.jpg";
import icon_cloudinary from "../../assets/tech-skills/icon-cloudinary.png";

export default function AboutMe () {

    return (
        <div className="AboutMe">

            <div className="aboutme-name">
                <h1 className="aboutme-hi">Hi, I'm Mauro</h1>
            </div>

            <div className="aboutme-description">
                <p>I highlight my logical-creative thinking for problem solving and my speed in learning, as well as the commitment and responsibility that I assume to the project in which I am involved. </p>
            </div>

            <div className="aboutme-techskills">
                <img title="JavaScript" className="aboutme-icons-links-square" src={icon_js} alt='icon-js' />
                <img title="Node.js" className="aboutme-icons-links-circle" src={icon_nodejs} alt='icon-nodejs' />
                <img title="HTML5" className="aboutme-icons-links-rectangle" src={icon_html} alt='icon_html' />
                <img title="CSS3" className="aboutme-icons-links-rectangle" src={icon_css} alt='icon_css' />
                <img title="React.js | React Native" className="aboutme-icons-links-circle" src={icon_react} alt='icon_react' />
                <img title="Redux" className="aboutme-icons-links-square" src={icon_redux} alt='icon_redux' />
                <img title="Express.js" className="aboutme-icons-links-circle" src={icon_express} alt='icon_express' />
                <img title="PostgreSQL" className="aboutme-icons-links-circle" src={icon_postgreSQL} alt='icon_postgreSQL' />
                <img title="Sequelize" className="aboutme-icons-links-square" src={icon_sequelize} alt='icon_sequelize' />
                <img title="MongoDB" className="aboutme-icons-links-rectangle" src={icon_mongodb} alt='icon_mongodb' />
                <img title="Mongoose" className="aboutme-icons-links-rectangle" src={icon_mongoose} alt='icon_mongoose' />
                <img title="Cloudinary" className="aboutme-icons-links-circle" src={icon_cloudinary} alt='icon_cloudinary' /> 
            </div>
        </div>
    )
};