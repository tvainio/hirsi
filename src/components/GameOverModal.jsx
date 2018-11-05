import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const GameOverModal = props => {
  return (
    <Modal show={props.visible} onHide={props.close}>
      <Modal.Body>
        <h1 id="message">{props.win ? "SUCCESS" : "GAME OVER"}</h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.close}>NEW WORD</Button>
      </Modal.Footer>
    </Modal>
  );
};

GameOverModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  win: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default GameOverModal;
