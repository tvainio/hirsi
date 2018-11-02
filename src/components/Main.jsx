import React from "react";
import PoorFellow from "./PoorFellow";
import { Grid, Row, Col } from "react-bootstrap";
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
      <Grid>
        <Row className="MainRow" style={{ padding: '0px', height: '400px' }}>
          <Col xs={6} md={6} className="Ukko">
            <PoorFellow/>
          </Col>
          <Col xs={6} md={6} className="infobox">
            YOU MISSED THIS AND THAT
          </Col>
        </Row>

        <Row className="letters" style={{ padding: '0px', height: '200px' }}>
          <Col xs={6} md={6} className="letters">
            Here be the letters
          </Col>


        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    data: store.measurements
  };
};

export default connect(mapStateToProps)(Main);
