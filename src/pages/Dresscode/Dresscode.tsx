import { memo, useEffect, useState } from "react";
import CardsGrid from "../../components/base/CardsGrid/CardsGrid";
import Heading from "../../components/base/Heading/Heading";
import Text, { TextSize } from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";

import "./Dresscode.css";

interface IProps {
  data: any;
}

const testCard = [
  // {
  //   text: null,
  //   imageSource: "dresscode/dresscode1.jpg",
  //   subText: null,
  //   button: false,
  //   buttonText: "WEIN Online Ansehen",
  // },
  {
    text: null,
    imageSource: "dresscode/dresscode2.jpg",
    subText: "€500",
    button: false,
    buttonText: "SOFA Online Ansehen",
  },
  {
    text: null,
    imageSource: "dresscode/dresscode3.jpg",
    subText: "€50",
    button: false,
    buttonText: "Cocktail gläser Online Ansehen",
  },
  {
    text: null,
    imageSource: "dresscode/dresscode4.jpg",
    subText: "€600",
    button: false,
    buttonText: "FLUG Online Ansehen",
  },
  {
    text: null,
    imageSource: "dresscode/dresscode5.jpg",
    subText: "€75",
    button: false,
    buttonText: "Camera Online Ansehen",
  },
  {
    text: null,
    imageSource: "dresscode/dresscode6.jpg",
    subText: "€15",
    button: false,
    buttonText: "MONSTERA Online Ansehen",
  },
  {
    text: null,
    imageSource: "dresscode/dresscode7.jpg",
    subText: "€???",
    button: false,
    buttonText: "Camera Online Ansehen",
  },
  {
    text: null,
    imageSource: "dresscode/dresscode8.jpg",
    subText: "€???",
    button: false,
    buttonText: "Camera Online Ansehen",
  },
  {
    text: null,
    imageSource: "dresscode/dresscode9.jpg",
    subText: "€???",
    button: false,
    buttonText: "Camera Online Ansehen",
  },
];

const Dresscode = () => {
  const [blur, setBlur] = useState("0px");
  const handleScroll = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;
    setBlur(`${(verticalOffset / percentageVerticalOffset) * 7}px`);
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
    <>
      <section
        className="dresscode col align-center justify-center"
        id="dresscode"
        onScroll={(e: any) => handleScroll(e)}
        style={{ filter: `blur(${blur})` }}
      >
        <Heading type="h1">Dresscode</Heading>
        <VerticalSpacing size="lg" />
        <div className="row align-center justify-center width-100 center-text dresscode__subheader">
          <Text
            theme="primary-colour"
            text="Liebe Gäste, wir würden uns wünschen, dass ihr zu unserer Hochzeit in hellen und gedeckten
Farben kommt. Bitte bedenkt, dass die Tage sehr heiß werden, die Nächte aber gerade in den
Bergen frisch sein können. Hier findet ihr ein paar Bilder und Farben, von denen ihr euch inspirieren lassen könnt."
            textSize={TextSize.sm}
          ></Text>
        </div>
      </section>
      <div className="dresscode__content">
        <CardsGrid data={testCard} showPallette />
      </div>
      {/* <VerticalSpacing size="lg" />
      <VerticalSpacing size="xxl" />
      <VerticalSpacing size="xxl" />
      <CardsGrid data={testCard} /> */}
      <Footer />
    </>
  );
};

export default memo(Dresscode);
