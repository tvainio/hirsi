import React from "react";
import PropTypes from "prop-types";
import { Panel } from "react-bootstrap";

class CurrentDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { timestamp, id, ttl, ...data } = this.props.data;

    const unit = this.props.unit ? this.props.unit : "";
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">
              Current {this.props.title} ({timestamp
                ? new Date(timestamp).toString()
                : "Loading..."})
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {Object.keys(data)
              .sort()
              .map(item => `${item}: ${this.props.data[item]}${unit} `)}
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

CurrentDisplay.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
  unit: PropTypes.string
};

export default CurrentDisplay;
