import React from 'react';
import Modal from 'react-modal';

// The onRequestClose allows us to assign a function that closes the
// modal if you click on the background or hit ESC.
const OptionModal = (props) => (
    <Modal
        onRequestClose={props.clearOption}
        isOpen={!!props.selectedOption}
        contentLabel="Makes it Accessible"
        closeTimeoutMS={500}
        className="modal">
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.clearOption}>Okay</button>
    </Modal>
)

export default OptionModal;