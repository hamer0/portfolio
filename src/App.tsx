import "./App.css";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";

function App() {
  return <div className="app-container">
    <Hero/>
    <Portfolio/>
    <Contact />
  </div>;
}

export default App;
