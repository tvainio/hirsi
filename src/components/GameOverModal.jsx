import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const GameOverModal = props => {
  return (
    <Modal show={props.visible} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Text in a modal</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

GameOverModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};

export default GameOverModal;
