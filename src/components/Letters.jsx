import React from "react";
import PropTypes from "prop-types";
import { Panel, Label } from "react-bootstrap";

function Letters(props) {
  return (
    <div>
      <Panel>
        <Panel.Body>
          <h1>
            {props.word
              .split("")
              .map(
                (letter, i) =>
                  props.usedLetters.includes(letter) ? (
                    <Label key={i}>{letter}</Label>
                  ) : (
                    <Label key={i}> </Label>
                  )
              )}
          </h1>
        </Panel.Body>
      </Panel>
    </div>
  );
}

Letters.propTypes = {
  usedLetters: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired
};

export default Letters;
