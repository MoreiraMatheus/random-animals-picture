import { useState, useEffect } from "react";
import Button from "../Button";
import GlobalStyle from "../../styles/Global";
import AnimalImage from "../AnimalImage";
import DogApiQuery from "../../services/DogApi";
import formatValidation from "../../functions/formatValidation";

function App() {
  const [Image, setImage] = useState("https://thumbs.dreamstime.com/b/pombo-engra%C3%A7ado-nas-sapatilhas-e-no-tamp%C3%A3o-violetas-113584093.jpg")

  useEffect(() => {
    ImageGenerator()
  }, [])
  
  const ImageGenerator = () => {
    const DataAPI = DogApiQuery()
    DataAPI.then(response => setImage(response.url))
  }

  return (
    <>
      <GlobalStyle/>
      <main>
        <AnimalImage 
        src={Image} 
        animal="pombo"/>
        <Button callback={ImageGenerator}>Gerar nova foto</Button>
      </main>
    </>
  );
}

export default App;
