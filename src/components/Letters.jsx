import React from "react";
import PropTypes from "prop-types";
import { Label } from "react-bootstrap";

const letterStyle = {
  display: "inline-block",
  width: "50px",
  border: "2px solid #000",
  textAlign: "center"
};

function Letters(props) {
  return (
    <div>
      <h1>
        {props.word.split("").map((letter, i) => (
          <Label key={i} style={letterStyle}>
            {props.usedLetters.includes(letter) ? letter : " "}
          </Label>
        ))}
      </h1>
    </div>
  );
}

Letters.propTypes = {
  usedLetters: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired
};

export default Letters;
