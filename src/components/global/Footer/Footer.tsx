import Icon from "../../base/Icon/Icon";
import Text, { TextSize } from "../../base/Text/Text";
import VerticalSpacing from "../../base/VerticalSpacing/VerticalSpacing";

import "./Footer.css";

interface IProps {
  isMobile?: boolean;
}

const Footer = ({ isMobile }: IProps) => {
  return (
    <footer className="row align-center justify-center center-text padding-8 width-100 footer">
      {isMobile ? (
        <div className="row justify-center align-center width-100">
          <Icon icon="olive-branch-left" size="xxl" />
          <Icon icon="olive-branch-right" size="xxl" />
        </div>
      ) : null}

      <Icon icon="olive-branch-left" size="xxl" />
      <div className="col align-center justify-center">
        <p className="footer__text">+49 5847 43392</p>
        <VerticalSpacing size="sm" />
        <p className="footer__text">jelenaundgabriel@gmail.com</p>
        <VerticalSpacing size="sm" />
        <p className="footer__text">Leonrodstraße 39, 80636, München</p>
      </div>
      <Icon icon="olive-branch-right" size="xxl" />
    </footer>
  );
};

export default Footer;
