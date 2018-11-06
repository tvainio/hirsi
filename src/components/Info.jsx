import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

const Info = props => {
  const missed = [...new Set(props.word.split(""))].filter(
    letter => !props.usedLetters.includes(letter)
  );

  return (
    <div>
      <Panel>
        <Panel.Body>
          <div id="message">
            {props.health === 0 ? "You missed: " : "keep pressing those keys!"}
          </div>
          {props.health === 0 ? <div id="missed">{missed}</div> : ""}
        </Panel.Body>
      </Panel>
    </div>
  );
};

Info.propTypes = {
  health: PropTypes.number.isRequired,
  usedLetters: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired
};

export default Info;
