import logo from './logo.svg';
import './App.css';
import HeadSection from "./components/head-section/head-section";
import BodySection from "./components/body-section/body-section";

function App() {
  return (
    <div className="App">
        <header>
          <HeadSection />
            <BodySection />
        </header>
    </div>
  );
}

export default App;
