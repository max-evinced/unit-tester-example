"use client"
import { useState } from "react";

function Modal({ }) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button id="openModal" onClick={() => setModalOpen(true)}>
                Open Modal
            </button>

            {setModalOpen && (<div id="modal">
                <button id="closeModal" onClick={() => setModalOpen(false)}> Close Modal </button>
                <h2>Modal</h2>
                <p>This is the content.</p>
            </div>)}
        </div>
    );
}

export default Modal;