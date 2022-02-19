import { memo } from "react";
import Button, { ButtonType } from "../../components/base/Button/Button";
import Heading from "../../components/base/Heading/Heading";
import Text, { TextSize } from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";
import ListSection from "../Anreise/components/ListSection/ListSection";

import "./Menu.css";

const menuData = [
  {
    text: "Liebe Gäste, leider müssen wir euch noch ein wenig vertrösten. Ab spätestens Ende März könnt ihr hier das Menü und auch mögliche Alternativen sehen.",
    linkURL: null,
    phoneNumber: null,
  },
];

const Menu = () => {
  return (
    <div className="fullheight">
      <div className="menu__background row align-center justify-between">
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch--left.png`}
          alt=""
          className="menu__leftBranch"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch--right.png`}
          alt=""
          className="menu__rightBranch"
        />
      </div>
      <section className="menu col justify-center align-center">
        <div className="menu__content col justify-center align-center">
          {/* <VerticalSpacing size="xl" /> */}
          <Heading type="h2" mobileBranches>
            Menu
          </Heading>
          <VerticalSpacing size="xl" />
          <ListSection listItems={menuData} listHeading="" />
          <VerticalSpacing size="xl" />
          {/* <Button text="Kommt bald" buttonVariant={ButtonType.secondaryLight} /> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default memo(Menu);
