import "./App.scss";
import Header from "./component/Header";
import Meme from "./component/Meme";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Meme />
      </div>
    </>
  );
}

export default App;
