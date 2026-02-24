import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";

function App() {
  const [state, setState] = useState("users");
  const [cart, setCart] = useState([]);

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
            <li onClick={showHome}>Home</li>
            <li onClick={showAbout}>About</li>{" "}
            <li onClick={showContact}>Contact</li>
          </ul>
        </nav>
        cart: {cart.length}
      </header>

      {state === "home" && <Home cart={cart} setCart={setCart} />}
      {state === "about" && <About />}
      {state === "contact" && <Contact />}
      {state === "users" && <Users />}
    </>
  );
}

export default App;
