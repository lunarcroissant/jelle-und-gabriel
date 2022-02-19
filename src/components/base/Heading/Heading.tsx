import "./Heading.css";

interface IProps {
  type: string;
  children: string;
  weight?: string | null;
  theme?: string;
  mobileBranches?: boolean | string;
  spacing?: string;
  alignment?: string;
  isGaramondFont?: boolean;
}

const Heading = ({
  type,
  children,
  theme,
  mobileBranches,
  weight,
  spacing,
  alignment,
  isGaramondFont,
}: IProps) => {
  if (type === "h1") {
    return (
      <h1
        className={theme ? `heading--${theme}` : "heading"}
        style={{ wordSpacing: `${spacing}` }}
      >
        {children}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <>
        <h2
          className={`padding-horizontal-4 ${
            theme ? `heading--${theme}` : `heading ${alignment}`
          }`}
          style={{ wordSpacing: `${spacing}` }}
        >
          {mobileBranches ? (
            <div className="full-width row justify-center align-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/OliveBranch--left.png`}
                alt=""
                className="h2__branchTop"
              />
            </div>
          ) : null}
          {children}
          {mobileBranches ? (
            <div className="full-width row justify-center align-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/OliveBranch--left.png`}
                alt=""
                className="h2__branchBottom"
              />
            </div>
          ) : null}
        </h2>
      </>
    );
  }

  if (type === "h3") {
    return (
      <h3
        className={`${theme ? `heading--${theme}` : "heading"} ${
          isGaramondFont ? "heading--garamond" : "heading--montserrat"
        }`}
      >
        {/* <img src={`${BASE_IMG_URL}${accent}`} /> */}
        {children}
      </h3>
    );
  }

  if (type === "h4") {
    return (
      <h4 className={`${theme ? `heading--${theme}` : "heading"}`}>
        {/* {accent ? <span className="startQuote"></span> : null} */}
        {children}
        {/* {accent ? <span className="endQuote"></span> : null} */}
      </h4>
    );
  }

  if (type === "h5") {
    return (
      <h5 className={theme ? `heading--${theme}` : "heading"}>{children}</h5>
    );
  }

  if (type === "h6") {
    return (
      <h6
        className={theme ? `heading--${theme} ${weight}` : `heading ${weight}`}
      >
        {children}
      </h6>
    );
  } else {
    return null;
  }
};

export default Heading;
