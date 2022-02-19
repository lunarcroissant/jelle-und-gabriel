import Heading from "../../../../../../components/base/Heading/Heading";
import Icon from "../../../../../../components/base/Icon/Icon";
import Text, { TextSize } from "../../../../../../components/base/Text/Text";
import VerticalSpacing from "../../../../../../components/base/VerticalSpacing/VerticalSpacing";

import "./AgendaItem.css";

interface IProps {
  icon: string;
  text?: string;
  time: string;
  heading: string;
}

const AgendaItem = ({ icon, text, time, heading }: IProps) => {
  return (
    <div className="col justify-center align-center center-text padding-4 agendaItem">
      <Icon icon={icon} size="xxl" />
      <p className="agendaItem__time opacity-50">
        <span></span>
      </p>
      <span className="opacity-50">
        <Heading type="h5" theme="light">
          {time}
        </Heading>
      </span>

      <Heading type="h5" theme="light">
        {heading}
      </Heading>
      <VerticalSpacing size="md" />
      <p className="agendaItem__description">{text}</p>
    </div>
  );
};

export default AgendaItem;
