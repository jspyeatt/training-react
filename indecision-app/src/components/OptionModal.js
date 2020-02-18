import React from 'react';
import Modal from 'react-modal';

// The onRequestClose allows us to assign a function that closes the
// modal if you click on the background or hit ESC.
const OptionModal = (props) => (
    <Modal
        onRequestClose={props.clearOption}
        isOpen={!!props.selectedOption}
        contentLabel="Makes it Accessible">
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.clearOption}>Okay</button>
    </Modal>
)

export default OptionModal;