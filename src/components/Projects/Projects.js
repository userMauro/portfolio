// css
import "./Projects.css";

// assets
import icon_astronet from "../../assets/projects/icon-astronet.png";
import icon_countries from "../../assets/projects/icon-countries.png";

export default function Projects () {
    return (
        <div className="Projects">

            <div className="projects-astronet">
                <a href="https://github.com/vlmnst/AstroNet" rel="noreferrer" target="_blank">
                    <img title="AstroNet" className="projects-img" src={icon_astronet} alt='img-astronet' />
                </a>
            </div>

            <div className="projects-countries">
                <a href="https://countries-ten-theta.vercel.app/" rel="noreferrer" target="_blank">
                    <img title="Countries" className="projects-img" src={icon_countries} alt='img-countries' />
                </a>
            </div>

        </div>
    )
};