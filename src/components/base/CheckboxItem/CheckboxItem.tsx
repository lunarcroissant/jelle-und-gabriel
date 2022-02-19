import Text, { TextSize } from "../Text/Text";

import "./CheckboxItem.css";

interface IProps {
  label: string;
  handleClick: (value: any) => void;
  active: boolean;
}

const CheckboxItem = ({ label, active, handleClick }: IProps) => {
  return (
    <div
      className={`checkboxitem row align-center justify-center padding-2 ${
        active ? "checkboxitem--active" : null
      }`}
      onClick={handleClick}
    >
      <input type="checkbox" id={label} />
      <Text text={label} textSize={TextSize.md} theme="primary-colour" />
    </div>
  );
};

export default CheckboxItem;
