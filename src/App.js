import "./App.css";
import { ItemCount } from "./Components/ItemListContainer/ItemCount";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar title="" />
      <ItemListContainer />
    </div>
  );
}

export default App;
