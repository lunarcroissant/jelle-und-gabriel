import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import HorizontalDivider from "../../base/HorizontalDivider/HorizontalDivider";
// import NavLink from "../../base/NavLink/NavLink";
import Text, { TextSize, TextWeight } from "../../base/Text/Text";
import "./Header.css";

interface IProps {
  linkLabels: { label: string; urlPath: string }[];
  handleClick?: (value: any) => void;
}

const Header = ({ linkLabels, handleClick }: IProps) => {
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

  return (
    <>
      {isMobile ? (
        <>
          <header className={`col justify-center align-center header__mobile`}>
            <nav
              className={`col justify-between align-center nav__mobileMenu ${
                mobileMenu ? "nav__mobileMenu--active" : "nav__mobileMenu"
              }`}
              onClick={() => setMobileMenu(false)}
            >
              <ul className="col header__navigation align-center">
                {linkLabels.map((data) => {
                  return (
                    <li className="navlink__container row">
                      <NavLink
                        to={`${data.urlPath}`}
                        className={({ isActive }) =>
                          isActive ? "navlink navlink--active" : "navlink"
                        }
                      >
                        <Text
                          text={data.label}
                          textSize={TextSize.xs}
                          weight={TextWeight.medium}
                        />
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </header>
          <button
            className="nav__toggle row justify-center align-center width-100"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {!mobileMenu ? "MENU" : "SCHLIEßEN"}
          </button>
        </>
      ) : (
        <header className={`col padding-4 justify-between header align-center`}>
          <nav className="col justify-between align-center">
            <ul className="row header__navigation align-center">
              {linkLabels.map((data) => {
                return (
                  <li className="navlink__container row">
                    <NavLink
                      to={`${data.urlPath}`}
                      className={({ isActive }) =>
                        isActive ? "navlink navlink--active" : "navlink"
                      }
                    >
                      <Text
                        text={data.label}
                        textSize={TextSize.xs}
                        weight={TextWeight.medium}
                      />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
