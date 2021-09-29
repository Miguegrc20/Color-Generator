import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer>
        Made with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> by
        Miguel Ángel García
      </footer>
    );
  }
}

export default Footer;
