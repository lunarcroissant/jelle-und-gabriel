import { memo, useEffect } from "react";
import Button, { ButtonType } from "../../components/base/Button/Button";
import Heading from "../../components/base/Heading/Heading";
import NavLink from "../../components/base/NavLink/NavLink";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";
import ListSection from "../Anreise/components/ListSection/ListSection";

import "./Kontakt.css";

const kontaktDataBrautPaar = [
  {
    text: "jelenaundgabriel@gmail.com",
    linkURL: "jelenaundgabriel@gmail.com",
    phoneNumber: null,
  },
  {
    text: "Mobil Jelena: +49 176 61 38 40 59",
    linkURL: null,
    phoneNumber: "+49 176 61 38 40 59",
  },
  {
    text: "Mobil Gabriel: +49 173 97 27 114",
    linkURL: null,
    phoneNumber: "Mobil Gabriel: +49 173 97 27 114",
  },
];
const kontaktDataTrauzeugen = [
  {
    text: "trauzeugen.jelenaundgabriel@gmail.com",
    linkURL: "trauzeugen.jelenaundgabriel@gmail.com",
    phoneNumber: null,
  },
  {
    text: "Mobil Leon: +49 157 555 44 287",
    linkURL: null,
    phoneNumber: "+49 157 555 44 287",
  },
  {
    text: "Mobil Marlene: +44 743 260 04 78",
    linkURL: null,
    phoneNumber: "+44 743 260 04 78",
  },
];

const Kontakt = () => {
  const handleScroll = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="fullheight">
      <div className="kontakt__background row align-center justify-between">
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch--left.png`}
          alt=""
          className="kontakt__leftBranch"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch--right.png`}
          alt=""
          className="kontakt__rightBranch"
        />
      </div>
      <section className="kontakt col justify-center align-center">
        <div className="kontakt__content col justify-center align-center">
          {/* <VerticalSpacing size="xxl" /> */}
          <Heading type="h2" mobileBranches>
            Kontakt
          </Heading>
          <VerticalSpacing size="xl" />
          <VerticalSpacing size="xl" />
          <ListSection
            listItems={kontaktDataBrautPaar}
            listHeading="Das Brautpaar"
          />
          <VerticalSpacing size="xl" />
          <ListSection
            listItems={kontaktDataTrauzeugen}
            listHeading="Die Trauzeugen"
          />
          <VerticalSpacing size="xl" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default memo(Kontakt);
