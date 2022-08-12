import Button from "../Button";
import Checkbox from "../Checkbox";
import GlobalStyle from "../../styles/Global";
import AnimalImage from "../AnimalImage";

function App() {
  return (
    <>
      <GlobalStyle/>
      <main>
        <AnimalImage/>
        <Button>clique aqui</Button>
        <br/>
        <Checkbox name="passaros" id="bird"/>
      </main>
    </>
  );
}

export default App;
