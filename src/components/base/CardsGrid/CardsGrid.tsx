import Pallette from "../../../pages/Dresscode/components/Pallette/Pallette";
import Card from "../Card/Card";
import VerticalSpacing from "../VerticalSpacing/VerticalSpacing";

import "./CardsGrid.css";

interface IProps {
  data: any;
  showPallette?: boolean;
}

const CardsGrid = ({ data, showPallette }: IProps) => {
  const leftGrid = [];
  const rightGrid = [];

  for (let i = 0; i < data.length; i = i + 2) {
    rightGrid.push(data[i]);
  }
  for (let i = 1; i < data.length; i = i + 2) {
    leftGrid.push(data[i]);
  }
  return (
    <section className="cardsGrid">
      {showPallette ? <Pallette /> : null}

      {data.map((card: any) => {
        return (
          <Card
            text={card.text}
            subText={card.subText}
            imageSource={card.imageSource}
            button={card.button}
            buttonText={card.buttonText}
            href={card.href}
          />
        );
      })}
    </section>
  );
};

export default CardsGrid;
