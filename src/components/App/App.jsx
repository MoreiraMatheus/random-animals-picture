import { useState } from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import GlobalStyle from "../../styles/Global";
import AnimalImage from "../AnimalImage";

//APIs
import DogApiQuery from "../../services/DogApi"

function App() {
  const pidgeonImage = "https://thumbs.dreamstime.com/b/pombo-engra%C3%A7ado-nas-sapatilhas-e-no-tamp%C3%A3o-violetas-113584093.jpg"

  const [Image, setImage] = useState(pidgeonImage)
  setImage(DogApiQuery())
  
  return (
    <>
      <GlobalStyle/>
      <main>
        <AnimalImage 
        src={Image} 
        animal="pombo"/>
        <Button>Gerar nova foto</Button>
        <div>
          <Checkbox name="Gatos" id="cat"/>
          <Checkbox name="Cachorros" id="dog"/>
          <Checkbox name="Patos" id="ducks"/>
          <Checkbox name="Raposas" id="fox"/>
        </div>
      </main>
    </>
  );
}

export default App;
