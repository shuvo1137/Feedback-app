import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <header
      style={{ background: "blue", color: "orangered", textAlign: "center" }}
    >
      <div>
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "feed",
};
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
