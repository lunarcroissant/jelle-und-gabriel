import "./MapItemMarker.css";

interface IProps {
  number: number;
  handleClick: (value: any) => void;
}

const MapItemMarker = ({ number, handleClick }: IProps) => {
  return (
    <div className={`mapItemPosition mapItemPosition--${number}`}>
      <button className="mapItemMarker" onClick={handleClick}>
        <svg
          width="88"
          height="151"
          viewBox="0 0 88 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.1134 0.0710907C28.9366 0.967634 17.9894 6.49632 10.2214 15.6859C4.97272 21.887 1.5386 29.6122 0.293924 37.965C-0.125968 40.8787 -0.0959753 47.2442 0.383901 50.2626C1.02874 54.4464 2.19843 58.3912 3.83301 61.9774C4.25291 62.9188 13.3856 83.2255 24.0928 107.073C34.815 130.936 43.7228 150.586 43.9027 150.735C44.2776 151.064 44.6525 151.094 45.0124 150.81C45.4323 150.511 84.8422 60.5429 85.7719 57.7786C87.3315 53.1464 88.0064 48.9925 88.0064 43.927C87.9914 40.3408 87.7514 37.9351 87.0766 34.7075C83.2076 16.4928 67.8965 2.53658 49.3463 0.325111C46.812 0.0262635 43.2879 -0.0783331 41.1134 0.0710907Z"
            fill="#657A99"
          />
        </svg>

        <div className="mapItemMarker__number">{number}</div>
      </button>
    </div>
  );
};

export default MapItemMarker;
