import { useEffect, useState } from "react";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";
import MapItemInfo from "./components/MapItemInfo/MapItemInfo";
import MapItemMarker from "./components/MapItemMarker/MapItemMarker";

import "./Map.css";

interface IProps {
  data: any;
}

const Map = ({ data }: IProps) => {
  const [activeLocation, setActiveLocation] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsMobile(false);
    } else if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenu(false);
        setIsMobile(false);
      } else if (window.innerWidth <= 1024) {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  data[activeLocation].locationNumber = activeLocation + 1;

  return (
    <div className="col align-center justify-center">
      <section className="map align-center">
        {/* <VerticalSpacing size="xl" /> */}
        <img
          className="map__image"
          src={`${process.env.PUBLIC_URL}/assets/TestMap.jpg`}
        />

        {isMobile ? null : <MapItemInfo data={data[activeLocation]} />}
        {/* <MapItemInfo data={data[activeLocation]} /> */}
        <MapItemMarker number={1} handleClick={() => setActiveLocation(0)} />
        <MapItemMarker number={2} handleClick={() => setActiveLocation(1)} />
        <MapItemMarker number={3} handleClick={() => setActiveLocation(2)} />

        {/* <VerticalSpacing size="xxl" /> */}
      </section>
      {isMobile ? <MapItemInfo data={data[activeLocation]} /> : null}
    </div>
  );
};

export default Map;
