import React from "react";
import PropTypes from "prop-types";
import { Panel, Label } from "react-bootstrap";

function Letters(props) {

  return (
    <div>
      <Panel>
        <Panel.Body>
          {props.letters.map(letter=> <Label>{letter}</Label>)}
        </Panel.Body>
      </Panel>
    </div>
  );

}

Letters.propTypes = {
  letters: PropTypes.array.isRequired
};

export default Letters;
