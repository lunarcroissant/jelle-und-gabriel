import { useEffect, useState } from "react";
import Button, { ButtonType } from "../../../../components/base/Button/Button";
import Heading from "../../../../components/base/Heading/Heading";
import Text, { TextSize } from "../../../../components/base/Text/Text";
import Header from "../../../../components/global/Header/Header";
import useStickyStorage from "../../../../hooks/useStickyStorage/useStickyStorage";

import "./HeroSection.css";

interface IProps {
  linkLabels?: string[];
}

const HeroSection = ({ linkLabels }: IProps) => {
  const weddingDate = new Date("Jul 17, 2022 15:45:00").getTime();

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [blur, setBlur] = useState("0px");

  const timer = setInterval(() => {
    const currentSecond = new Date().getTime();
    const timeDifference = weddingDate - currentSecond;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setDay(days);
    setHour(hours);
    setMinute(minutes);
    setSecond(seconds);

    if (timeDifference < 0) {
      clearInterval(timer);
    }
  }, 1000);

  const handleScroll = (e: Event) => {
    const verticalOffset =
      document.body.scrollTop || document.documentElement.scrollTop;
    const percentageVerticalOffset = window.innerHeight;

    console.log(verticalOffset);

    setBlur(`${(verticalOffset / percentageVerticalOffset) * 7}px`);
  };

  useEffect(() => {
    window.localStorage.setItem("visited", "visitorStatus");
  });

  const hasVisited = window.localStorage.getItem("visitorStatus");

  const [visitorStatus, setVisitorStatus] = useStickyStorage(
    "visited",
    "visitorStatus"
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <section
        className={`heroSection col align-center justify-center heroSection--animated
        `}
        id="heroSection"
        onScroll={(e: any) => handleScroll(e)}
        style={{ filter: `blur(${blur})` }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch_900x449__top.png`}
          alt=""
          className="heroSection__topBranch"
        />
        <div className="col heroSection__content">
          <span className="width-100 heroSection__smallClock">
            {/* <Text
              text={`${day}:${hour >= 10 ? hour : `0${hour}`}:${
                minute >= 10 ? minute : `0${minute}`
              }:${second >= 10 ? second : `0${second}`}`}
              textSize={TextSize.md}
              theme="primary-colour"
            /> */}
            <Text
              text="Wir haben geheiratet!"
              textSize={TextSize.md}
              theme="primary-colour"
            />
          </span>

          <Heading type="h1">JELENA & GABRIEL</Heading>
          <div className="width-100 row align-end justify-end padding-right-4 heroSection__date">
            <Text
              text="16.07.2022"
              textSize={TextSize.md}
              theme="primary-colour"
            />
          </div>
        </div>
        <Button
          buttonVariant={ButtonType.primaryLink}
          text="Zu den Bildern"
          href="https://www.dropbox.com/scl/fo/6k6rjroz955see6l510q7/h?dl=0&rlkey=0129ynnzx5m7bgo9mgm5xambp"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/OliveBranch.png`}
          alt=""
          className="heroSection__bottomBranch"
        />
      </section>
      {day || hour || minute || second ? (
        <div className="heroSection__timer">
          16.07.22
          {/* {`${day}:${hour >= 10 ? hour : `0${hour}`}:${
            minute >= 10 ? minute : `0${minute}`
          }:${second >= 10 ? second : `0${second}`}`} */}
        </div>
      ) : null}
    </>
  );
};

export default HeroSection;
