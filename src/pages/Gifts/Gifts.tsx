import { memo, useEffect, useState } from "react";
import CardsGrid from "../../components/base/CardsGrid/CardsGrid";
import Heading from "../../components/base/Heading/Heading";
import Text, { TextSize } from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";

import "./Gifts.css";

interface IProps {
  data: any;
}

const testCard = [
  {
    text: null,
    imageSource: "gifts/Hochzeitsreise1.jpg",
    subText: "AZ",
    button: false,
    buttonText: "Reise Online Ansehen",
  },
  {
    text: null,
    imageSource: "gifts/Hochzeitsreise2.jpg",
    subText: "WS",
    button: false,
    buttonText: "SOFA Online Ansehen",
  },
  {
    text: null,
    imageSource: "gifts/Hochzeitsreise3.jpg",
    subText: "Maledieven",
    button: false,
    buttonText: "Cocktail gläser Online Ansehen",
  },
];

const Gifts = () => {
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
        className="gifts col align-center justify-center"
        id="gifts"
        onScroll={(e: any) => handleScroll(e)}
        style={{ filter: `blur(${blur})` }}
      >
        <Heading type="h1">WÜNSCHE</Heading>
        <VerticalSpacing size="lg" />
        <div className="row align-center justify-center width-100 center-text gifts__subheader">
          <Text
            theme="primary-colour"
            text="Das größte Geschenk ist, dass ihr gemeinsam mit uns unsere Hochzeit feiert! Wer uns noch etwas schenken möchte, würde uns mit einer Beteiligung an unserer Hochzeitsreise eine große Freude bereiten. Wir möchten einen zweiwöchigen Roadtrip an der US-Westküste machen und anschließend ein paar Tage am türkisblauen Meer verbringen. Wir freuen uns aber natürlich auch über eure eigenen Ideen und Überraschungen. Wer Hilfe oder Anregungen hierbei benötigt, kann sich gerne an Leon und Marlene wenden."
            textSize={TextSize.sm}
          ></Text>
        </div>
      </section>
      <div className="gifts__content">
        <CardsGrid data={testCard} />
      </div>

      <Footer />
    </>
  );
};

export default memo(Gifts);
