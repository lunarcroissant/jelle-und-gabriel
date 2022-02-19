import { ReactNode } from "react";
// import "./Box.css";

interface IProps {
  padding?: string;
  orientation?: string;
  children: ReactNode;
}

const Box = ({ padding, orientation, children }: IProps) => {
  return <div className={`box box--${padding} ${orientation}`}>{children}</div>;
};

export default Box;
