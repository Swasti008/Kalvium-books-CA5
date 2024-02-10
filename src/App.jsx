import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./Components/Register";

function App() {
  const [input, setInput] = useState(""); //for setting input entered by the user.
  const [showSearchBar, setShowSearchBar] = useState(true); //for not displaying the Search bar in registeration page.
  const location = useLocation(); //for getting the location pathname

  const handleInput = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (location.pathname === "/register") {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }
  }, [location]);

  return (
    <>
      <NavBar handleInput={handleInput} showSearchBar={showSearchBar} />

      <Routes>
        <Route path="/" element={<Content input={input} />} />
        <Route path="/register" element={<Register />} />
        <Route />
      </Routes>
      {<Footer />}
    </>
  );
}

export default App;
