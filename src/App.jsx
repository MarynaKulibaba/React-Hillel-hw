import Slider from "./components/Slider.jsx";
import imgFallout from "./assets/fallout_wanderer.png";
import imgRobot from "./assets/robot.png";
import imgArmor from "./assets/body_armor.png";

function App() {
  const images = [imgFallout, imgRobot, imgArmor];

  return (
    <>
      <Slider images={images} />
    </>
  );
}

export default App;
