import React from "react";
import PropTypes from "prop-types";
import { Label } from "react-bootstrap";

const letterStyle = {
  display: "inline-block",
  minWidth: "20px"
};

function Letters(props) {
  return (
    <div>
      {props.word.split("").map((letter, i) => (
        <Label key={i} style={{ margin: "2px", backgroundColor: "#53555D" }}>
          <div style={letterStyle}>
            {props.usedLetters.includes(letter) ? letter : " "}
          </div>
        </Label>
      ))}
    </div>
  );
}

Letters.propTypes = {
  usedLetters: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired
};

export default Letters;
