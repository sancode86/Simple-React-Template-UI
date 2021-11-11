import "./App.css";
import CardsBlock from "./components/CardsBlock";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CarouselComp from "./components/Carousel";
import BasicTabs from "./components/Tabs";
import TextBlock from "./components/TextBlock";
import Bullets from "./components/Bullets";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <div className="homeContainer">
                  <CarouselComp />
                  <TextBlock
                    title="Welcome"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et."
                  />
                  <CardsBlock />
                  <TextBlock
                    title="Hello!"
                    text="sed do eiusmod
                  tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                  />
                  <BasicTabs />
                  <Bullets />                 
                  <TextBlock
                    title="Yuap effil"
                    text="
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore et.
               sed do eiusmod consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
                  />
                 
                </div>
                
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
