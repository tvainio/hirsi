import React from "react";
import CurrentDisplay from "./CurrentDisplay";

import { connect } from "react-redux";
import { loadData } from "../actions/actions";

class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadData());
  }

  latestDataPoint(data) {
    return data.reduce(
      (prev, current) => (prev.timestamp > current.timestamp ? prev : current),
      {}
    );
  }

  render() {
    return (
      <div>
        <CurrentDisplay
          data={this.latestDataPoint(this.props.data)}
          title="Temperatures"
          unit="°C"
        />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    data: store.measurements
  };
};

export default connect(mapStateToProps)(Main);
