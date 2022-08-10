// css
import "./Certificates.css";

// assets
import icon_henry from "../../assets/certificates/icon-henry.png";
import icon_educacionIT from "../../assets/certificates/icon-educacionit.jpg";
import icon_efset from "../../assets/certificates/icon-ef.jpg";

export default function Projects () {
    return (
        <div className="Certificates">

            <div>
                <a href="https://certificates.soyhenry.com/cert?id=fa567018-a6e3-4b63-a2a4-48881edb7ff5" rel="noreferrer" target="_blank">
                    <img title="Full Stack Web Developer" className="certificates-img" src={icon_henry} alt='icon_henry' />
                </a>
            </div>

            <div>
                <a href="https://www.efset.org/cert/NJLeKf" rel="noreferrer" target="_blank">
                    <img title="EF SET Standard English Test C2 Proficient" className="certificates-img" src={icon_efset} alt='icon_efset' />
                </a>
            </div>

            <div>
                <a href="https://api.alumni.education/course/diploma/generate?code=19872DQ02SZ70MW5BWEBF7HN7W915GK0&format=pdf" rel="noreferrer" target="_blank">
                    <img title="Network Hacking" className="certificates-img" src={icon_educacionIT} alt='icon_educacionIT' />
                </a>
            </div>

            <div>
                <a href="https://api.alumni.education/course/diploma/generate?code=20173ULXPSNXV206JOJZ7KD5D9FN8ZLH&format=pdf" rel="noreferrer" target="_blank">
                    <img title="Ethical Hacking" className="certificates-img" src={icon_educacionIT} alt='icon_educacionIT' />
                </a>
            </div>

            <div>
                <a href="https://api.alumni.education/course/diploma/generate?code=20272GGC72D13K9XRH8QR1T78U59L5XX&format=pdf" rel="noreferrer" target="_blank">
                    <img title="SQL injection & Xss" className="certificates-img" src={icon_educacionIT} alt='icon_educacionIT' />
                </a>
            </div>

        </div>
    )
};