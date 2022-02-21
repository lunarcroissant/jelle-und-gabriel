import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import "./styles/stylesystem.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import PageSwitcher from "./pages/PageSwitcher/PageSwitcher";
import Header from "./components/global/Header/Header";
import Anreise from "./pages/Anreise/Anreise";
import Menu from "./pages/Menu/Menu";
import Gifts from "./pages/Gifts/Gifts";
import Kontakt from "./pages/Kontakt/Kontakt";
import Dresscode from "./pages/Dresscode/Dresscode";

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
    urlPath: "/gifts",
  },
  {
    label: "Kontakt",
    urlPath: "/kontakt",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header linkLabels={navigationData} />
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>
          <Route path="anreise" element={<Anreise />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="dresscode" element={<Dresscode />}></Route>
          <Route path="gifts" element={<Gifts />}></Route>
          <Route path="kontakt" element={<Kontakt />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
