import "./Agenda.css";
import VerticalDivider from "../../../../components/base/VerticalDivider/VerticalDivider";
import AgendaItem from "./components/AgendaItem/AgendaItem";
import Heading from "../../../../components/base/Heading/Heading";
import VerticalSpacing from "../../../../components/base/VerticalSpacing/VerticalSpacing";

interface IProps {
  data: any;
}

const Agenda = ({ data }: IProps) => {
  return (
    <>
      <section className="col align-center justify-center agenda">
        <div className="full-width row justify-center align-center agenda__titel">
          <Heading type="h2">Ablauf</Heading>
        </div>

        <div className="agenda__layout row justify-center align-center">
          <AgendaItem time="16:45" heading="Trauung" icon="icon-rings" />
          <VerticalDivider />
          <AgendaItem time="17:15" heading="Sektempfang" icon="icon-cheers" />
          <VerticalDivider />
          <AgendaItem time="18:00" heading="Fotos" icon="icon-camera" />
          <VerticalDivider />
          <AgendaItem time="19:00" heading="Essen" icon="icon-food" />
          <VerticalDivider />
          <AgendaItem time="21:00" heading="Party" icon="icon-music" />
        </div>
        <VerticalSpacing size="xl" />
      </section>
    </>
  );
};

export default Agenda;
