import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

class PoorFellow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Panel>
          <Panel.Body>
            Poor Fellow! Always in trouble...
            <div id="health">health {this.props.health}</div>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

PoorFellow.propTypes = {
  health: PropTypes.number.isRequired
};

export default PoorFellow;
