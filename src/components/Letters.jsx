import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

class Letters extends React.Component {
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
            Here be the letters...
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
/*
Letters.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  unit: PropTypes.string
};
*/
export default Letters;
