import Button, { ButtonType } from "../Button/Button";
import Heading from "../Heading/Heading";
import Icon from "../Icon/Icon";
import Text, { TextSize } from "../Text/Text";
import VerticalSpacing from "../VerticalSpacing/VerticalSpacing";

import "./ItemCard.css";

interface IProps {
  title: string;
  imageSource: string;
  phoneNumber: string;
  email?: string;
  description: string;
  priceIndication: string;
  buttonText: string;
  linkURL: string;
}

const ItemCard = ({
  title,
  imageSource,
  phoneNumber,
  email,
  description,
  priceIndication,
  buttonText,
  linkURL,
}: IProps) => {
  return (
    <div className="itemCard col align-center">
      <img
        src={`${process.env.PUBLIC_URL}/assets/hotelImages/${imageSource}`}
        alt=""
        className="itemCard__image"
      />
      <div className="itemCard__info col align-center">
        <div className="itemCard__heading col align-center justify-center center-text">
          <Heading type="h5">{title}</Heading>
          <div className="itemCard__quickInfo row align-center justify-between">
            {phoneNumber || email ? (
              <Text text={phoneNumber} textSize={TextSize.sm} isGaramondFont />
            ) : null}
            <Icon size="xxs" icon="divider-dot--secondary" />
            <Text
              text={priceIndication}
              textSize={TextSize.sm}
              isGaramondFont
            />
          </div>
        </div>
        <VerticalSpacing size="md" />
        <Text text={description} textSize={TextSize.sm} isGaramondFont />
        <VerticalSpacing size="md" />
        <Button
          buttonVariant={ButtonType.primaryLink}
          text={buttonText}
          href={linkURL}
        />
      </div>
    </div>
  );
};

export default ItemCard;
