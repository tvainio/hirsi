import React from "react";
import PoorFellow from "./PoorFellow";
import Letters from "./Letters";
import Info from "./Info";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { keypress, newWord } from "../actions/actions";


// Add global keyboard listener


class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(newWord("tablet")); // ADD DUMMYWORD. TODO: REPLACE WITH API CALL
    document.addEventListener("keypress", event => this.props.dispatch(keypress(event.key)));
  }

  render() {
    return (
      <Grid>
        <Row className="MainRow" style={{ padding: '0px', height: '400px' }}>
          <Col xs={6} md={6} className="Ukko">
            <PoorFellow gameState={this.props.letters.gameState}/>
          </Col>
          <Col xs={6} md={6} className="infobox">
            <Info />
          </Col>
        </Row>

        <Row className="letters" style={{ padding: '0px', height: '200px' }}>
          <Col xs={12} md={12} className="letters">
            <Letters usedLetters={this.props.letters.usedLetters} word={this.props.letters.word} />
          </Col>


        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    letters: store.letters,
  };
};

export default connect(mapStateToProps)(Main);
