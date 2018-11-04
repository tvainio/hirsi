import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

const PoorFellow = props => {
  return (
    <div>
      <Panel>
        <Panel.Body>
          Poor Fellow! Always in trouble...
          <div id="health">health {props.health}</div>
        </Panel.Body>
      </Panel>
    </div>
  );
};

PoorFellow.propTypes = {
  health: PropTypes.number.isRequired
};

export default PoorFellow;
