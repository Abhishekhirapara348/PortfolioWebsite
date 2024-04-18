import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home/Home";
import Work from "./component/Work/Work";
import Feedback from "./component/Feedback/Feedback";
import About from "./component/About/About";
import Footercomponent from "./component/footer/Footercomponent";

function App() {
  return (
    <div className="App">
      <div className="appcontainer">
        <Home />
        <Work />
        <Feedback />
        <About />
        <Footercomponent />
      </div>
    </div>
  );
}

export default App;
