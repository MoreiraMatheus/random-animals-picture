// import { useState } from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";
import GlobalStyle from "../../styles/Global";
import AnimalImage from "../AnimalImage";
// import RandomIntGenerator from "../../functions/RandomIntGenerator";

function App() {
  const pidgeonImage = "https://thumbs.dreamstime.com/b/pombo-engra%C3%A7ado-nas-sapatilhas-e-no-tamp%C3%A3o-violetas-113584093.jpg"

  return (
    <>
      <GlobalStyle/>
      <main>
        <AnimalImage 
        src={pidgeonImage} 
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
