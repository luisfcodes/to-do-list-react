import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
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
    width: '25%',
    border: 'none',
    padding: '0',
    
  },
};

interface ModalFormProps {
  tasks: any;
  setTasks: any;
  id: number;
  text: string;
}

Modal.setAppElement('#root');

export function ModalForm({tasks, setTasks, id, text}: ModalFormProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newTitleTask, setNewTitleTask] = useState(text);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function editTask(id: number){
    const newList: any = []
    tasks.map((element: { id: number; title: string }) => {
      if (element.id !== id) {
        newList.push(element)
      } else {
        if(newTitleTask){
          element.title = newTitleTask
        } else {
          setNewTitleTask(element.title)
        }
        newList.push(element)
      }
    })

    setTasks(newList)
    closeModal()
  }

  return (
    <div>
      <button onClick={openModal}>
        <BsPencilSquare className='icon-edit' />
      </button>
      
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

            <div className="modal-text-edit">
              <label htmlFor="title">Insira um novo títilo para sua tarefa</label>
              <input type="text" value={newTitleTask} id="title" onChange={e => setNewTitleTask(e.target.value)}/>
            </div>

          <div className="modal-buttons">
            <button type="submit" className="button-save" onClick={() => editTask(id)}>Salvar</button>
            <button onClick={() => {setNewTitleTask(text); closeModal()}} className="button-close">Fechar</button>
          </div>
          
        </div>


      </Modal>
    </div>
  );
}