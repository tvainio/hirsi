import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
const modalStyles = {
  position: "absolute",
  top: "30%"
};

const GameOverModal = props => {
  return (
    <Modal style={modalStyles} show={props.visible} onHide={props.close}>
      <Modal.Body>
        <h1 id="message">{props.win ? "SUCCESS" : "GAME OVER"}</h1>
        <Button onClick={props.close}>NEW WORD</Button>
      </Modal.Body>
    </Modal>
  );
};

GameOverModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  win: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default GameOverModal;
