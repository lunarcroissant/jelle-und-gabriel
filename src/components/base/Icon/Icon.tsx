import "./Icon.css";

interface IProps {
  size: string;
  border?: boolean;
  theme?: string;
  icon?: string;
  handleClick?: any;
  isButton?: boolean;
  hoverText?: string;
}

const Icon = ({
  size,
  theme,
  border,
  icon,
  handleClick,
  isButton,
  hoverText,
}: IProps) => {
  if (isButton) {
    return (
      <button className="icon row justify-center align-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`}
          alt={icon}
          onClick={handleClick}
          className={`icon--${size}`}
        />
      </button>
    );
  }
  return (
    <div
      className={
        border || isButton
          ? `icon icon-button icon--${border}-white row justify-center align-center width-100`
          : `icon row justify-between align-center`
      }
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons/${icon}.svg`}
        alt={icon}
        onClick={handleClick}
        className={`icon--${size}`}
      />
    </div>
  );
};

export default Icon;
