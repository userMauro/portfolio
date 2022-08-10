// css
import './App.css';

// assets
import icon_copyright from "./assets/icon-copyright.png";

// components
import ProfileCard from "./components/ProfileCard/ProfileCard.js";
import Information from "./components/Information/Information";

export default function App() {

  return (
    <div className="App">

      <div className="profile-about-projects">
        <ProfileCard />
        <Information />
      </div>

      <footer>
        <img title="Copyright - Mauro Núñez Cioci - 2022" className="app-copyright" src={icon_copyright} alt='icon_copyright' />
      </footer>

    </div>
  )
};