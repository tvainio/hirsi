import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

function Info() {
  //   let { timestamp, id, ttl, ...data } = this.props.data;

  return (
    <div>
      <Panel>
        <Panel.Body>You missed this and that...</Panel.Body>
      </Panel>
    </div>
  );
}

Info.propTypes = {
  text: PropTypes.string
};

export default Info;
