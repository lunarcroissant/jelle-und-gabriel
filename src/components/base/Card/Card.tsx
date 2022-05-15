import Button, { ButtonType } from "../Button/Button";
import Text, { TextSize, TextWeight } from "../Text/Text";

import "./Card.css";

interface IProps {
  text: string;
  imageSource: string;
  subText: string | null;
  button?: boolean;
  buttonText?: string | null;
  href?: string;
}

const Card = ({
  text,
  subText,
  imageSource,
  button,
  buttonText,
  href,
}: IProps) => {
  return (
    <div className="col card">
      <img
        src={`${process.env.PUBLIC_URL}/assets/${imageSource}`}
        alt=""
        className="card__image"
      />
      {text ? (
        <div className="row align-center width-100 padding-bottom-4">
          <Text
            text={text}
            theme="primary-colour"
            textSize={TextSize.md}
            weight={TextWeight.medium}
          />
          {subText ? (
            <>
              <div className="card__divider"></div>
              <Text
                text={subText}
                theme="primary-colour"
                textSize={TextSize.md}
                weight={TextWeight.medium}
              />
            </>
          ) : null}
        </div>
      ) : null}

      {button ? (
        <Button
          buttonVariant={ButtonType.secondaryLight}
          text={buttonText ? buttonText : "Website"}
          href={href}
        />
      ) : null}
    </div>
  );
};

export default Card;
