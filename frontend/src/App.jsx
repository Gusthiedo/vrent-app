import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Book from "./pages/Book";
import Fleet from "./pages/Fleet";
import Admin from "./pages/Admin";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();

  return (
    <>
      <UserContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<Book />} />
          <Route path="/model" element={<Fleet />} />
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
