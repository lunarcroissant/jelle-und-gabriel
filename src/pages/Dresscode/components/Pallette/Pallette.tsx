import "./Pallette.css";

const Pallette = () => {
  return (
    <div className="pallette col space-between align-center">
      <div className="row justify-center align-center">
        <div
          className="pallette__colourCircle"
          style={{ background: "#A98C6E" }}
        ></div>
        <div
          className="pallette__colourCircle"
          style={{ background: "#D5C3AB" }}
        ></div>
        <div
          className="pallette__colourCircle"
          style={{ background: "#EEE2D4" }}
        ></div>
      </div>
      <div className="row align-center justify-center margin-top-2 width-100">
        <div
          className="pallette__colourRect"
          style={{ background: "#B2948C" }}
        ></div>
        <div
          className="pallette__colourRect"
          style={{ background: "#D3BCB4" }}
        ></div>
        <div
          className="pallette__colourRect"
          style={{ background: "#D2B7A6" }}
        ></div>
        <div
          className="pallette__colourRect"
          style={{ background: "#DFCCBE" }}
        ></div>
      </div>
      <div className="row align-center justify-center width-100 margin-top-2">
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#EEEEEE" }}
        ></div>
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#EACCB2" }}
        ></div>
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#D3C4BD" }}
        ></div>
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#E4D9C3" }}
        ></div>
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#F5EDE0" }}
        ></div>
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#C4BDAB" }}
        ></div>
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#EBCFC4" }}
        ></div>
        <div
          className="pallette__colourRectSmall"
          style={{ background: "#E8E6D9" }}
        ></div>
      </div>
    </div>
  );
};

export default Pallette;
