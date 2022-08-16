import { useState } from "react";
import Button from "../Button";
import GlobalStyle from "../../styles/Global";
import AnimalImage from "../AnimalImage";
import DogApiQuery from "../../services/DogApi";
import readTypeImage from "../../functions/readTypeImage";
import validImageTypes from "../../functions/validImageTypes";

function App() {
  const [ImageUrl, setImageUrl] = useState("https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  
  const ImageGenerator = () => {
    const maxBytes = 800000
    DogApiQuery().then(response => {
      const extension = readTypeImage(response.url)
      const validImage = response.fileSizeBytes <= maxBytes && validImageTypes(extension)
      validImage ? setImageUrl(response.url) : ImageGenerator()
    })
  }

  return (
    <>
      <GlobalStyle/>
      <main>
        <AnimalImage 
        src={ImageUrl}
        animal="random-dog-image"/>
        <Button callback={ImageGenerator}>Gerar nova foto</Button>
      </main>
    </>
  );
}

export default App;
