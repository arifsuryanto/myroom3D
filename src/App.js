import logo from "./logo.svg";
import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spline scene="https://prod.spline.design/Ttl19EetTQgMWjFh/scene.splinecode" />
      </header>
    </div>
  );
}

export default App;
