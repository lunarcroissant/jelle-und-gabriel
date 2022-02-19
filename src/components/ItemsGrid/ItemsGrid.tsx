import { ReactNode } from "react";
import VerticalSpacing from "../base/VerticalSpacing/VerticalSpacing";

import "./ItemsGrid.css";

interface IProps {
  children: ReactNode;
}

const ItemsGrid = ({ children }: IProps) => {
  return (
    <>
      {/* <VerticalSpacing size="xl" />
      <VerticalSpacing size="xl" /> */}
      <section className="itemsGrid">{children}</section>
    </>
  );
};

export default ItemsGrid;
