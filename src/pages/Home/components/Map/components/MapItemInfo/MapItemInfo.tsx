import Heading from "../../../../../../components/base/Heading/Heading";
import VerticalSpacing from "../../../../../../components/base/VerticalSpacing/VerticalSpacing";
import "./MapItemInfo.css";

interface IProps {
  data?: any;
}

const MapItemInfo = ({ data }: IProps) => {
  const { description, title, telefonNumber, address, locationNumber } = data;

  return (
    <div className="col align-center justify-center mapItemInfo padding-6 center-text">
      <h2 className="mapItemInfo__number">{`${locationNumber}`}</h2>
      <Heading type="h3" isGaramondFont theme="dark">
        {title}
      </Heading>
      <VerticalSpacing size="lg" />
      <div className="mapItemInfo__divider"></div>
      {description ? (
        <>
          <VerticalSpacing size="lg" />
          <p>{description}</p>
        </>
      ) : null}
      {/* <p>{description}</p> */}
      <div className="mapItemInfo__contactInfo col justify-center align-center">
        <VerticalSpacing size="lg" />
        <p className="mapItemInfo__text">{address}</p>
      </div>
    </div>
  );
};

export default MapItemInfo;
