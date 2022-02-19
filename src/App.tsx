import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Gifts from "./pages/Gifts/Gifts";
import Menu from "./pages/Menu/Menu";
import Anreise from "./pages/Anreise/Anreise";
import Kontakt from "./pages/Kontakt/Kontakt";
import Header from "./components/global/Header/Header";

const navigationData = [
  {
    label: "Home",
    urlPath: "/",
  },
  {
    label: "Anreise",
    urlPath: "/anreise",
  },
  {
    label: "Menu",
    urlPath: "/menu",
  },
  {
    label: "Dresscode",
    urlPath: "/dresscode",
  },
  {
    label: "Wünsche",
    urlPath: "/wünsche",
  },
  {
    label: "Kontakt",
    urlPath: "/kontakt",
  },
];

function App() {
  return (
    <div className="App">
      {/* <Header linkLabels={navigationData} /> */}
      {/* <BrowserRouter>
        <Header linkLabels={navigationData} />
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="anreise" element={<Anreise />}></Route>
            <Route path="menu" element={<Menu />}></Route>
            <Route path="dresscode" element={<Home />}></Route>
            <Route path="wünsche" element={<Gifts />}></Route>
            <Route path="kontakt" element={<Kontakt />}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
