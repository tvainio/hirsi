import React from "react";
import PropTypes from "prop-types";
import { Panel, Label } from "react-bootstrap";

function Letters(props) {
  return (
    <div>
      <Panel>
        <Panel.Body>
          {props.usedLetters.map((letter, i) => (
            <Label key={i}>{letter}</Label>
          ))}
        </Panel.Body>
      </Panel>
    </div>
  );
}

Letters.propTypes = {
  usedLetters: PropTypes.array.isRequired
};

export default Letters;
