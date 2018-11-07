import React from "react";
import PropTypes from "prop-types";

const Info = props => {
  const missed = [...new Set(props.word.split(""))].filter(
    letter => !props.usedLetters.includes(letter)
  );

  return (
    <div>
      {props.health === 0 ? (
        <div>
          <div id="message">YOU MISSED:</div>
          <div id="missed" style={{ color: "#4C71FA" }}>
            {missed.join(", ")}
          </div>
          ({props.word})
        </div>
      ) : null}
    </div>
  );
};

Info.propTypes = {
  health: PropTypes.number.isRequired,
  usedLetters: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired
};

export default Info;
