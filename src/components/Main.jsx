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
    this.props.dispatch(newWord());
    document.addEventListener("keypress", event =>
      this.props.dispatch(keypress(event.key))
    );
  }

  getNewWord() {}
  puzzleSolved(word, usedLetters) {
    if (word.length === 0) return false;
    return word.split("").reduce((prev, letter) => {
      if (prev === false) return false;
      return usedLetters.includes(letter);
    }, true);
  }

  render() {
    const solved = this.puzzleSolved(this.props.word, this.props.usedLetters);
    return (
      <div>
        <GameOverModal
          visible={this.props.health === 0 || solved}
          close={() => {
            this.props.dispatch(newWord());
          }}
          win={solved}
        />
        <Grid>
          <Row style={{ padding: "0px" }}>
            <Col xs={6} md={6}>
              <PoorFellow health={this.props.health} />
            </Col>
            <Col xs={6} md={6}>
              <Info
                health={this.props.health}
                usedLetters={this.props.usedLetters}
                word={this.props.word}
              />
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
