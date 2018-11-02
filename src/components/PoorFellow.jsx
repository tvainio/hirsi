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

    return (
      <div>
        <Panel>
          <Panel.Body>
            Poor Fellow! Always in trouble...
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
/*
PoorFellow.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  unit: PropTypes.string
};
*/
export default PoorFellow;
