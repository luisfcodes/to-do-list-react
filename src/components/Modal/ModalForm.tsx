import { useState } from "react";
import Modal from "react-modal"
import "./style.scss"

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    border: 'none'
  },
};

Modal.setAppElement('#root');

export function ModalForm() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Task"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Editar tarefa</h2>
          </div>

          <input type="text" />

          <div className="modal-buttons">
            <button className="button-save">Salvar</button>
            <button onClick={closeModal} className="button-close">Fechar</button>
          </div>
          
        </div>


      </Modal>
    </div>
  );
}