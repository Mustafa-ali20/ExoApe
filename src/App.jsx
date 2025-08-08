import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReel from "./Components/PlayReel";
import Images from "./Components/Images";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
    const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full ">
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Images />
      <Footer />
    </div>
  );
}
export default App;
