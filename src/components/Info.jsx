import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

class Info extends React.Component {
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
            You missed this and that...
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
/*
Info.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  unit: PropTypes.string
};
*/
export default Info;
