// css
import './App.css';

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

    </div>
  )
};