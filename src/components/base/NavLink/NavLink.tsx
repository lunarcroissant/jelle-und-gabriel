import Text, { TextSize, TextWeight } from "../Text/Text";
import "./NavLink.css";

interface IProps {
  label: string;
  theme?: string;
  icon?: string;
  handleClick?: (value: any) => void;
}

const NavLink = ({ label, theme, icon, handleClick }: IProps) => {
  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <a
      className={`navlink1 navlink--${theme} row align-center justify-center`}
      onClick={handleClick}
    >
      {icon ? <img src={`${process.env.PUBLIC_URL}${icon}`} /> : null}
      <Text text={label} textSize={TextSize.xs} weight={TextWeight.medium} />
    </a>
  );
};

export default NavLink;
