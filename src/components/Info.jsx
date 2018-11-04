import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

const Info = props => {
  //   let { timestamp, id, ttl, ...data } = this.props.data;

  return (
    <div>
      <Panel>
        <Panel.Body>
          <div id="message">
            {props.health === 0
              ? "You missed: this and that..."
              : "keep pressing those keys!"}
          </div>
        </Panel.Body>
      </Panel>
    </div>
  );
};

Info.propTypes = {
  health: PropTypes.number.isRequired
};

export default Info;
