import { FC, useEffect } from "react";
import { JsxElement } from "typescript";
import Button, { ButtonType } from "../../components/base/Button/Button";
import Heading from "../../components/base/Heading/Heading";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";

import "./Anreise.css";
import ListSection from "./components/ListSection/ListSection";

const anreiseData = [
  [
    {
      text: "Damit wir alle unbeschwert und sicher feiern können, werden wir die Hochzeit als 2G+-Veranstaltung abhalten. Tragt bitte deshalb dafür Sorge, dass ihr am Tag der Hochzeit noch einen Schnelltest macht.",
      linkURL: null,
      phoneNumber: null,
    },
  ],
  [
    {
      text: "Wir organisieren einen Shuttle-Service für die An- und Abreise zur Location aus und nach Palma und Puigpunyent. Weitere Infos folgen, sobald wir wissen, in welchen Unterkünften ihr schlaft.",
      linkURL: null,
      phoneNumber: null,
    },
  ],
  [
    {
      text: "Es sind genug Parkplätze an der Location vorhanden. Wer also selber mit dem Auto anreisen möchte, kann das gerne tun. Unten findet ihr eine Wegbeschreibung nach Son Burguet.",
      linkURL: null,
      phoneNumber: null,
    },
  ],
];

const Anreise: FC = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div className="fullheight">
      <div className="anreise__background row align-center justify-between">
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch--left.png`}
          alt=""
          className="anreise__leftBranch"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch--right.png`}
          alt=""
          className="anreise__rightBranch"
        />
      </div>
      <section className="anreise col justify-center align-center">
        <div className="anreise__content col justify-center align-center">
          {/* <VerticalSpacing size="xl" /> */}
          <Heading type="h2" mobileBranches>
            Anreise
          </Heading>
          <VerticalSpacing size="xl" />
          <ListSection listItems={anreiseData[0]} listHeading="" />
          <VerticalSpacing size="xl" />
          <ListSection
            listItems={anreiseData[1]}
            listHeading="Shuttleservice"
          />
          <VerticalSpacing size="xl" />
          <ListSection
            listItems={anreiseData[2]}
            listHeading="Eigene Anreise"
          />
          <VerticalSpacing size="xl" />
          <Button
            text="Route ansehen"
            buttonVariant={ButtonType.secondaryLight}
            href="https://www.google.com/maps?f=d&saddr=Palma,+Balearic+Islands,+Spain&daddr=Carretera+Palma+Puigpunyent,+km+10,+8,+07194+Puigpunyent,+Balearic+Islands,+Spain&dirflg=d"
            openInNewTab
          />
          <VerticalSpacing size="xxl" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Anreise;
