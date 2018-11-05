import React from "react";
import PoorFellow from "./PoorFellow";
import Letters from "./Letters";
import Info from "./Info";
import GameOverModal from "./GameOverModal";
import { Grid, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { keypress, newWord } from "../actions/actions";

// Add global keyboard listener

export class Main extends React.Component {
  componentDidMount() {
    this.props.dispatch(newWord("tablet")); // ADD DUMMYWORD. TODO: REPLACE WITH API CALL
    document.addEventListener("keypress", event =>
      this.props.dispatch(keypress(event.key))
    );
  }

  render() {
    return (
      <div>
        <GameOverModal
          visible={this.props.health === 0}
          close={console.log}
          win={this.props.health !== 0}
        />
        <Grid>
          <Row style={{ padding: "0px", height: "400px" }}>
            <Col xs={6} md={6}>
              <PoorFellow health={this.props.health} />
            </Col>
            <Col xs={6} md={6}>
              <Info health={this.props.health} />
            </Col>
          </Row>

          <Row style={{ padding: "0px", height: "200px" }}>
            <Col xs={12} md={12}>
              <Letters
                usedLetters={this.props.usedLetters}
                word={this.props.word}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    usedLetters: store.usedLetters,
    word: store.word,
    health: store.health
  };
};

export default connect(mapStateToProps)(Main);
