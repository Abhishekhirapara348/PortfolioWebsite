import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home/Home";
import Work from "./component/Work/Work";
import Feedback from "./component/Feedback/Feedback";
import About from "./component/About/About";
import Footercomponent from "./component/footer/Footercomponent";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <div className="appcontainer">
        <Home />
        <Work />
        <Feedback />
        <About />
        <Footercomponent />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
