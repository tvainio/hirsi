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
            <div id="state">game state {this.props.gameState}</div>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

PoorFellow.propTypes = {
  gameState: PropTypes.number.isRequired
};

export default PoorFellow;
