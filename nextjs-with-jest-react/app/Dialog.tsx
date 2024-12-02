"use client"
import { useState } from "react";

/* If you separate these two (modal and ModalOpener) then their
state is no longer accessible. setModalOpen cannot be shared between the two
out of the box.  

This means you can't test them together. 
*/
function Modal({ setModalOpen=false }) {
    let [isModalOpen] = useState(false);

    return (
        <div>
            {isModalOpen && (<div role="dialog" id="modal">
                <button id="closeModal" onClick={() => setModalOpen(false)}> Close Modal </button>
                <h2>Modal</h2>
                <p>This is the content.</p>
            </div>)}
        </div>
    );
}

function ModalOpener( setModalOpen=false ) {
    let [isModalOpen] = useState(false);

    return (
        <button id="openModal" onClick={() => setModalOpen(true)}>
            Open Modal
        </button>
    )
}

function OutOfBoxModal({  }) {
    let [isModalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <Modal setModalOpen={setModalOpen} />
            <ModalOpener setModalOpen={setModalOpen} />
        </div>
    )
}

export { Modal, ModalOpener };