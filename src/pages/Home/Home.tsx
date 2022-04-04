import { env } from "process";
import { useCallback, useEffect, useState } from "react";
import Box from "../../components/base/Box/Box";
import Button, { ButtonType } from "../../components/base/Button/Button";
import Text, { TextSize } from "../../components/base/Text/Text";
import Card from "../../components/base/Card/Card";
import CardsGrid from "../../components/base/CardsGrid/CardsGrid";
import Heading from "../../components/base/Heading/Heading";
import ItemCard from "../../components/base/ItemCard/ItemCard";
import VerticalSpacing from "../../components/base/VerticalSpacing/VerticalSpacing";
import Footer from "../../components/global/Footer/Footer";
import Header from "../../components/global/Header/Header";
import ItemsGrid from "../../components/ItemsGrid/ItemsGrid";
import Anreise from "../Anreise/Anreise";
import Kontakt from "../Kontakt/Kontakt";
import Agenda from "./components/Agenda/Agenda";
import HeroSection from "./components/HeroSection/HeroSection";
import Map from "./components/Map/Map";
import CheckboxItem from "../../components/base/CheckboxItem/CheckboxItem";
import "./Home.css";
import useStickyStorage from "../../hooks/useStickyStorage/useStickyStorage";

const testCard = [
  {
    text: "Marlene",
    imageSource: "trauzeugen/Marlene.jpg",
    subText: "Trauzeugin",
    button: true,
    buttonText: "Email an Marlene",
    href: "mailto:trauzeugen.jelenaundgabriel@gmail.com",
  },
  {
    text: "Leon",
    imageSource: "trauzeugen/Leon.jpg",
    subText: "Trauzeuge",
    button: true,
    buttonText: "Email an Leon",
    href: "mailto:trauzeugen.jelenaundgabriel@gmail.com",
  },
  {
    text: "Johannes",
    imageSource: "trauzeugen/Johannes.jpg",
    subText: "Trauzeuge",
  },
  {
    text: "Janina",
    imageSource: "trauzeugen/Janina.jpg",
    subText: "Trauzeugin",
  },
  {
    text: "Louis",
    imageSource: "trauzeugen/Louis.jpeg",
    subText: "Trauzeuge",
  },
  {
    text: "Denise",
    imageSource: "trauzeugen/Denise.jpg",
    subText: "Trauzeugin",
  },
  {
    text: "Greta",
    imageSource: "trauzeugen/Greta.jpeg",
    subText: "Trauzeugin",
  },
];

const mapInfoItems = [
  {
    title: "Der HochzeitsOrt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, netus id tincidunt vitae. Tempor ullamcorper convallis non pharetra, aliquet felis ut varius. Eget vel, risus urna, nulla id aenean enim imperdiet. Felis euismod sed dolor felis.",
    telefonNumber: "+44 5643 324242",
    address: "4 Down Road, Turn Left, Phoenix",
  },
  {
    title: "Der HochzeitsOrt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, netus id tincidunt vitae. Tempor ullamcorper convallis non pharetra, aliquet felis ut varius. Eget vel, risus urna, nulla id aenean enim imperdiet. Felis euismod sed dolor felis.",
    telefonNumber: "+44 5643 324242",
    address: "07611 Palma de Mallorca, Balearic Islands, Spain",
  },
  {
    title: "Der HochzeitsOrt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, netus id tincidunt vitae. Tempor ullamcorper convallis non pharetra, aliquet felis ut varius. Eget vel, risus urna, nulla id aenean enim imperdiet. Felis euismod sed dolor felis.",
    telefonNumber: "+44 5643 324242",
    address: "4 Down Road, Turn Left, Phoenix",
  },
  {
    title: "Der HochzeitsOrt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, netus id tincidunt vitae. Tempor ullamcorper convallis non pharetra, aliquet felis ut varius. Eget vel, risus urna, nulla id aenean enim imperdiet. Felis euismod sed dolor felis.",
    telefonNumber: "+44 5643 324242",
    address: "Santa Catalina de Sena, 4, Palma de Mallorca",
  },
  {
    title: "Der HochzeitsOrt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, netus id tincidunt vitae. Tempor ullamcorper convallis non pharetra, aliquet felis ut varius. Eget vel, risus urna, nulla id aenean enim imperdiet. Felis euismod sed dolor felis.",
    telefonNumber: "+44 5643 324242",
    address: "4 Down Road, Turn Left, Phoenix",
  },
];

const Home = () => {
  const data: any = require("./Home.json");

  const mapItems = data.mapItems;

  const [hotelFilter, setHotelFilter] = useState("palma");

  useEffect(() => {}, [hotelFilter]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="pageContainer col">
      <HeroSection />
      <VerticalSpacing size="100vh" />
      <CardsGrid data={testCard} />
      <Map data={mapItems} />
      <div className="col width-100 justify-center align-center background-white z-index-5">
        <VerticalSpacing size="xxl" />
        <Heading type="h2" isGaramondFont>
          Hotels
        </Heading>
        <VerticalSpacing size="lg" />
        <div className="width-100 row align-center justify-center home__hotelTabs">
          <span className="padding-right-4 padding-right-xs-0 padding-bottom-xs-4">
            <CheckboxItem
              label={"In Palma"}
              handleClick={() => setHotelFilter("palma")}
              active={hotelFilter === "palma"}
            />
          </span>

          <CheckboxItem
            label="In Puigpunyent"
            handleClick={() => setHotelFilter("puigpunyent")}
            active={hotelFilter === "puigpunyent"}
          />
        </div>
      </div>

      <ItemsGrid>
        {data[`${hotelFilter}Hotels`].map((hotel: any) => {
          return (
            <ItemCard
              title={hotel.name}
              imageSource={hotel.image}
              phoneNumber={hotel.distance}
              priceIndication={hotel.price}
              description={hotel.description}
              linkURL={hotel.url}
              buttonText="Website"
            />
          );
        })}
      </ItemsGrid>
      <Agenda data="dda" />
      <Footer />
    </div>
  );
};

export default Home;
