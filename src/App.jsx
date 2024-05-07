import React from "react";
import Slider from "./components/Slider.jsx";
import imgFallout from "./assets/fallout_wanderer.png";
import imgRobot from "./assets/robot.png";
import imgArmor from "./assets/body_armor.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Ініціалізація масиву зображень як властивість екземпляру класу
    this.images = [imgFallout, imgRobot, imgArmor];
  }

  render() {
    return (
      <>
        <Slider images={this.images} />
      </>
    );
  }
}

export default App;
