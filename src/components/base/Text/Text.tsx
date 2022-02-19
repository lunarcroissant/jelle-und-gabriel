import "./Text.css";

interface IProps {
  text: string | null;
  textSize: TextSize;
  theme?: string;
  weight?: string;
  bold?: boolean;
  children?: any;
  opacity?: string;
  isGaramondFont?: boolean;
}

export enum TextSize {
  xxs = "text--xxs",
  xs = "text--xs",
  sm = "text--sm",
  md = "text--md",
  lg = "text--lg",
  xl = "text--xl",
}

export enum TextWeight {
  thin = "thin",
  light = "light",
  regular = "regular",
  medium = "medium",
  semibold = "semibold",
  bold = "bold",
}

const Text = ({
  text,
  textSize,
  theme,
  weight = TextWeight.regular,
  bold,
  opacity,
  isGaramondFont,
}: IProps) => {
  if (bold) {
    return (
      <p className={`text ${textSize}`} style={{ opacity: `${opacity}` }}>
        {text}
      </p>
    );
  } else {
    return (
      <p
        className={`${
          isGaramondFont ? "text--garamond" : "text"
        } ${textSize} text--${theme} text--${weight}`}
        style={{ opacity: `${opacity}` }}
      >
        {text}
      </p>
    );
  }
};

export default Text;
