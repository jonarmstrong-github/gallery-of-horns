import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './SelectedBeast.css';

class BeastModal extends React.Component {
  render() {
    return (
      <Modal
      show={this.props.isModalDisplaying}
      onHide={this.props.closeModalHandler}
      size='lg'
      centered
      >
        <Modal.Body>
          <img
          className="modal-img"
          src={this.props.selected.image_url}
          alt={this.props.selected.description}
          title={this.props.selected.title}
          width="100%"
          />
        </Modal.Body>
      </Modal>
    )
  }
}

export default BeastModal;