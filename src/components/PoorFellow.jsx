import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

class PoorFellow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
 //   let { timestamp, id, ttl, ...data } = this.props.data;
    const TOTAL_STATES = 11;
    return (
      <div>
        <Panel>
          <Panel.Body>
            Poor Fellow! Always in trouble...
            <div id="state">game state {this.props.gameState+"/"+TOTAL_STATES}</div>
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
