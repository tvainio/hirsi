import React from "react";
import PropTypes from "prop-types";
import { Panel, Image } from "react-bootstrap";
import poorfellow from "./PoorFellow.svg";

const PoorFellow = props => {
  return (
    <div>
      <Panel>
        <Panel.Body>
          <Image src={poorfellow} responsive />
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
