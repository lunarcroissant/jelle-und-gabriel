import { useState } from "react";
import Footer from "../../components/global/Footer/Footer";
import Header from "../../components/global/Header/Header";
import Anreise from "../Anreise/Anreise";
import Gifts from "../Gifts/Gifts";
import Home from "../Home/Home";
import Kontakt from "../Kontakt/Kontakt";
import Menu from "../Menu/Menu";

const PageSwitcher = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      {/* <Header
        linkLabels={["Anreise", "Menu", "Dresscode", "Wünsche", "Kontakt"]}
        handleClick={setCurrentPage}
      /> */}
      {currentPage === "Home" ? <Home /> : null}
      {/* <Anreise /> */}
      {currentPage === "Anreise" ? <Anreise /> : null}
      {currentPage === "Wünsche" ? <Gifts /> : null}
      {currentPage === "Kontakt" ? <Kontakt /> : null}
      {currentPage === "Menu" ? <Menu /> : null}
      {/* <Footer /> */}
    </>
  );
};

export default PageSwitcher;
