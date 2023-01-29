import logo from './logo.svg';
import './App.css';
import HeadSection from "./components/head-section/head-section";
import BodySection from "./components/body-section/body-section";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
        <header>
          <HeadSection />
        </header>
        <body>
            <BodySection />
        </body>
        <footer>
            <Footer />
        </footer>
    </div>
  );
}

export default App;
