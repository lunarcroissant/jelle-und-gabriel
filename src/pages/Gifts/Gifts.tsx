import { memo, useEffect, useState } from "react";
import Button, { ButtonType } from "../../components/base/Button/Button";
import CardsGrid from "../../components/base/CardsGrid/CardsGrid";
import Heading from "../../components/base/Heading/Heading";
import Text, { TextSize } from "../../components/base/Text/Text";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";

import "./Gifts.css";

interface IProps {
  data: any;
}

const testCard = [
  {
    text: "Flug",
    imageSource: "gifts/flight.jpeg",
    subText: "DE – USA",
    button: false,
    buttonText: null,
  },
  {
    text: "Wohnwagen",
    imageSource: "gifts/wohnwagen.jpeg",
    subText: null,
    button: false,
    buttonText: "SOFA Online Ansehen",
  },
  {
    text: "Einmal volltanken",
    imageSource: "gifts/GasStation.jpg",
    subText: null,
    button: false,
    buttonText: null,
  },
  {
    text: "Hotel",
    imageSource: "gifts/vegas.jpeg",
    subText: "Las Vegas",
    button: false,
    buttonText: null,
  },
  {
    text: "Casino",
    imageSource: "gifts/poker.jpg",
    subText: "Las Vegas",
    button: false,
    buttonText: null,
  },
  {
    text: "Tour",
    imageSource: "gifts/alcatraz.jpg",
    subText: "Alcatraz",
    button: false,
    buttonText: null,
  },
  {
    text: "American Diner",
    imageSource: "gifts/diner3.jpeg",
    subText: null,
    button: false,
    buttonText: null,
  },
  {
    text: "Eintritt",
    imageSource: "gifts/nationalpark.jpeg",
    subText: "Nationalpark",
    button: false,
    buttonText: null,
  },
  {
    text: "Flug ans Meer",
    imageSource: "gifts/mexico.jpg",
    subText: null,
    button: false,
    buttonText: null,
  },
  {
    text: "Rückflug",
    imageSource: "gifts/flight.jpeg",
    subText: "USA – DE",
    button: false,
    buttonText: null,
  },
];

const Gifts = () => {
  const [blur, setBlur] = useState("0px");
  const isMobile = useViewportSize(768);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;
    const blurMultiplier = isMobile ? 24 : 7;
    setBlur(
      `${(verticalOffset / percentageVerticalOffset) * blurMultiplier}px`
    );
  };

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
        {!isMobile ? (
          <div className="col align-center justify-center width-100 center-text gifts__subheader">
            <Text
              theme="primary-colour"
              text="Das größte Geschenk ist, dass ihr gemeinsam mit uns unsere Hochzeit feiert! Wer uns noch etwas schenken möchte, würde uns mit einer Beteiligung an unserer Hochzeitsreise eine große Freude bereiten. Wir möchten einen zweiwöchigen Roadtrip an der US-Westküste machen und anschließend ein paar Tage am türkisblauen Meer verbringen. Um das ganze etwas persönlicher zu machen, findet ihr unter diesem Text ein paar unserer geplanten Reisestationen. Fall ihr uns bei einer dieser Stationen unterstützen wollt, meldet euch gerne bei Leon und Marlene. Wir freuen uns aber natürlich auch über eure eigenen Ideen und Überraschungen. Wer Hilfe hierbei benötigt, kann sich auch gerne an Leon und Marlene wenden."
              textSize={TextSize.sm}
            ></Text>
            <VerticalSpacing size="md" />
            <div className="col">
              <Text
                theme="primary-colour"
                text="Handy Leon (+49 157 555 44 287)"
                textSize={TextSize.sm}
              />
              <VerticalSpacing size="sm" />
              <Text
                theme="primary-colour"
                text="Handy Marlene (+44 743 2600 478)"
                textSize={TextSize.sm}
              />
              <VerticalSpacing size="md" />
              <Button
                buttonVariant={ButtonType.secondaryLight}
                text="Email an die Trauzeugen"
                href="mailto:trauzeugen.jelenaundgabriel@gmail.com"
              />
              {isMobile ? <VerticalSpacing size="xxl" /> : null}
            </div>
          </div>
        ) : null}
      </section>
      <div className="gifts__content">
        {isMobile ? (
          <div className="col align-center justify-center width-100 center-text gifts__subheader">
            <Text
              theme="primary-colour"
              text="Das größte Geschenk ist, dass ihr gemeinsam mit uns unsere Hochzeit feiert! Wer uns noch etwas schenken möchte, würde uns mit einer Beteiligung an unserer Hochzeitsreise eine große Freude bereiten. Wir möchten einen zweiwöchigen Roadtrip an der US-Westküste machen und anschließend ein paar Tage am türkisblauen Meer verbringen. Um das ganze etwas persönlicher zu machen, findet ihr unter diesem Text ein paar unserer geplanten Reisestationen. Fall ihr uns bei einer dieser Stationen unterstützen wollt, meldet euch gerne bei Leon und Marlene. Wir freuen uns aber natürlich auch über eure eigenen Ideen und Überraschungen. Wer Hilfe hierbei benötigt, kann sich auch gerne an Leon und Marlene wenden."
              textSize={TextSize.sm}
            ></Text>
            <VerticalSpacing size="md" />
            <div className="col">
              <Text
                theme="primary-colour"
                text="Handy Leon (+49 157 555 44 287)"
                textSize={TextSize.sm}
              />
              <VerticalSpacing size="sm" />
              <Text
                theme="primary-colour"
                text="Handy Marlene (+44 743 2600 478)"
                textSize={TextSize.sm}
              />
              <VerticalSpacing size="md" />
              <Button
                buttonVariant={ButtonType.secondaryLight}
                text="E-Mail schreiben"
                href="mailto:trauzeugen.jelenaundgabriel@gmail.com"
              />
            </div>
          </div>
        ) : null}
        <CardsGrid data={testCard} />
      </div>
      <VerticalSpacing size="xxl" />
      {isMobile ? null : <VerticalSpacing size="xxl" />}

      <Footer />
    </>
  );
};

export default memo(Gifts);
function useViewPortSize() {
  throw new Error("Function not implemented.");
}
