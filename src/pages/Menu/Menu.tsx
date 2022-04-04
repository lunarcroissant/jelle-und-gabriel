import { memo, useEffect } from "react";
import Button, { ButtonType } from "../../components/base/Button/Button";
import Heading from "../../components/base/Heading/Heading";
import Text, { TextSize } from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";
import ListSection from "../Anreise/components/ListSection/ListSection";

import "./Menu.css";

const menuVorspeiseData = [
  {
    text: "Goldbrasse an Zitrussalat mit violetten Kartoffeln in einer Pfeffer Chili Emulsion",
    linkURL: null,
    phoneNumber: null,
  },
  {
    text: "Sea Bream with a citrus salad, violette potatoes and yellow aji pepper emulsion",
    linkURL: null,
    phoneNumber: null,
  },
];
const menuHauptspeiseData = [
  {
    text: "Zart geschmortes Rind in mallorquinischem Wein, serviert mit gerösteten Süßkartoffeln, Brokkoli & Romanesco",
    linkURL: null,
    phoneNumber: null,
  },
  {
    text: "Tender Braised beef with local red wine, roasted sweet potato, broccoli & romanesco",
    linkURL: null,
    phoneNumber: null,
  },
];
const menuNachtischData = [
  {
    text: "Mango-Maracuja-Cheesecake mit Erdbeersorbet",
    linkURL: null,
    phoneNumber: null,
  },
  {
    text: "Mango and passion fruit cheesecake with strawberry sorbet",
    linkURL: null,
    phoneNumber: null,
  },
];

const extraInfo = [
  {
    text: "Für die Vegetarier/Veganer unter euch wird es auch ein alternatives Menü geben. Bitte gebt uns dafür bis 1. Mai Bescheid.",
    linkURL: null,
    phoneNumber: null,
  },
  {
    text: "Bitte lasst uns auch wissen, wenn ihr irgendwelche Allergien oder Unverträglichkeiten habt, damit wir das berücksichtigen können.",
    linkURL: null,
    phoneNumber: null,
  },
];

const Menu = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

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
          <Heading type="h2" mobileBranches>
            Menu
          </Heading>
          <VerticalSpacing size="xl" />
          <ListSection
            listItems={menuVorspeiseData}
            listHeading="Vorspeise - Starter"
          />
          <VerticalSpacing size="xl" />
          <ListSection
            listItems={menuHauptspeiseData}
            listHeading="Hauptspeise - Main Course"
          />
          <VerticalSpacing size="xl" />
          <ListSection listItems={menuNachtischData} listHeading="Dessert" />
          <VerticalSpacing size="md" />
          <ListSection listItems={extraInfo} listHeading={null} />
          <VerticalSpacing size="md" />
          <Button
            text="Gebt uns Bescheid"
            buttonVariant={ButtonType.primaryLink}
            href="mailto:jelenaundgabriel@gmail.com"
          />
          <VerticalSpacing size="xl" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default memo(Menu);
