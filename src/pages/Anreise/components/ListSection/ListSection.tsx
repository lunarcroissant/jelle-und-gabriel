import { memo } from "react";
import Heading from "../../../../components/base/Heading/Heading";
import Text, { TextSize } from "../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";

import "./ListSection.css";

interface IProps {
  listItems: {
    text: string;
    linkURL: string | null;
    phoneNumber: null | string;
  }[];
  isInstruction?: boolean;
  isLink?: boolean;
  listHeading: string | null;
}

const ListSection = ({
  listItems,
  isInstruction,
  isLink,
  listHeading,
}: IProps) => {
  return (
    <div className="listSection col justify-center align-center center-text">
      {listHeading ? <Heading type="h3">{listHeading}</Heading> : null}
      <VerticalSpacing size="lg" />
      <ul className="listSection__list">
        {listItems &&
          listItems.map((item) => {
            return (
              <>
                {isInstruction ? (
                  <>
                    <div className="listSection__liNumber">
                      {listItems.indexOf(item)}.
                    </div>
                    <VerticalSpacing size="xxs" />
                  </>
                ) : null}
                {item.linkURL ? (
                  <li className="listSection__li" id={item.text}>
                    <a
                      className="listSection__li"
                      href={`mailto:${item.linkURL}`}
                    >
                      {item.text}
                    </a>
                  </li>
                ) : (
                  <li className="listSection__li" id={item.text}>
                    <Text text={item.text} textSize={TextSize.sm}></Text>
                  </li>
                )}
                <VerticalSpacing size="md" />
              </>
            );
          })}
      </ul>
    </div>
  );
};

export default memo(ListSection);
