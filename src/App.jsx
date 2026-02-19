import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [state, setState] = useState();

  function showHome() {
    setState("home");
  }
  function showAbout() {
    setState("about");
  }
  function showContact() {
    setState("contact");
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li onClick={showHome}>Home</li> <li onClick={showAbout}>About</li>{" "}
            <li onClick={showContact}>Contact</li>
          </ul>
        </nav>
      </header>

      {state === "home" && <Home />}
      {state === "about" && <About />}
      {state === "contact" && <Contact />}
    </>
  );
}

export default App;
