import Text, { TextSize } from "../Text/Text";
import "./Button.css";

export enum ButtonType {
  primary = "btn-primary",
  primaryLink = "btn-primary-link",
  secondaryLight = "btn-secondary--light",
  secondaryDark = "btn-secondary--dark",
  tertiary = "btn-tertiary",
}

interface IProps {
  buttonVariant: ButtonType;
  text: string;
  href?: string;
  openInNewTab?: boolean;
}

const Button = ({ buttonVariant, text, href, openInNewTab }: IProps) => {
  if (buttonVariant === ButtonType.primary) {
    return <button className={`btn ${buttonVariant}`}>{text}</button>;
  }

  if (buttonVariant === ButtonType.primaryLink) {
    return (
      <a className={`btn ${buttonVariant}`} href={href}>
        {text}
      </a>
    );
  }

  if (buttonVariant === ButtonType.secondaryLight) {
    return (
      <a
        className="btn btn-secondary btn-secondary--light"
        href={href}
        target={openInNewTab ? "_blank" : "_self"}
      >
        {text}
      </a>
    );
  }

  if (buttonVariant === ButtonType.secondaryDark) {
    return (
      <button className="btn btn-secondary btn-secondary--dark">
        {text}
        <svg
          width="214"
          height="60"
          viewBox="0 0 214 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.89282 28.2313L28.9189 2.23135C29.3877 1.76304 30.0232 1.5 30.6858 1.5H183.814C184.477 1.5 185.112 1.76305 185.581 2.23135L211.607 28.2313C212.585 29.2079 212.585 30.7921 211.607 31.7687L185.581 57.7687C185.112 58.237 184.477 58.5 183.814 58.5H30.6858C30.0232 58.5 29.3877 58.237 28.9189 57.7687L2.89282 31.7687C1.91532 30.7921 1.91532 29.2079 2.89282 28.2313Z"
            stroke="#877964"
            stroke-width="3"
          />
        </svg>
      </button>
    );
  }

  if (buttonVariant === ButtonType.tertiary) {
    return (
      <button className="btn btn-tertiary">
        {text}
        {/* <svg
          width="217"
          height="64"
          viewBox="0 0 217 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.83269 29.1702L28.8588 3.17015C29.6089 2.42088 30.6256 2 31.6858 2H184.814C185.874 2 186.891 2.42088 187.641 3.17015L213.667 29.1702C215.231 30.7326 215.231 33.2674 213.667 34.8298L187.641 60.8298C186.891 61.5791 185.874 62 184.814 62H31.6858C30.6257 62 29.6089 61.5791 28.8588 60.8298L2.83269 34.8298C1.2687 33.2674 1.2687 30.7326 2.83269 29.1702Z"
            stroke="#877964"
            stroke-width="3"
          />
        </svg> */}
      </button>
    );
  }

  return <button></button>;
};

export default Button;
