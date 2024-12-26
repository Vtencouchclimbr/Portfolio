import NavTabs from "./components/NavTabs";
import Resume from "./pages/Resume.tsx";
import Home from "./pages/Home.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import MediaTab from "./components/MediaTab";

import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0 ">
      {" "}{/* Full width container with no padding */}
      {/* Navbar Section */}
      <NavTabs />
      {/* Home Section */}
      <section id="home" className="home1">
        <div className="">
          <Home />
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="bg-light">
        <div className="">
          <Portfolio />
        </div>
      </section>
      {/* Resume Section */}
      <section id="resume" className="">
        <div className="">
          <Resume />
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-light ">
        <div className="">
          <Contact />
        </div>
      </section>
      <div className="media-tab">
        <MediaTab />
      </div>
    </div>
  );
}

export default App;
