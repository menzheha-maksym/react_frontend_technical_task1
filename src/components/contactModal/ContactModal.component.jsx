import { faEnvelope, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from 'react-modal';
import './ContactModal.component.css';

export default function ContactModal() {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div>
            <a className="contact-email" href="#4" onClick={openModal}><i><FontAwesomeIcon icon={faEnvelope} /></i>info@devstudio.com</a>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className="modal"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <span onClick={closeModal} class="close">&times;</span>
                        <h2>Оставьте свои данные мы вам перезвоним</h2>
                    </div>
                    <div class="modal-body">
                        <div className="modal-input-form">
                            <span>Имя</span>
                            <i className="user-icon"><FontAwesomeIcon icon={faUser} /></i>
                            <input type="text" name="name" className="modal-text-input" placeholder="" />
                        </div>
                        <div className="modal-input-form">
                            <span>Телефон</span>
                            <i className="phone-icon"><FontAwesomeIcon icon={faPhoneAlt} /></i>
                            <input type="text" name="phone" className="modal-text-input" placeholder="" />
                        </div>
                        <div className="modal-input-form">
                            <span>Почта</span>
                            <i className="email-icon"><FontAwesomeIcon icon={faEnvelope} /></i>
                            <input type="email" name="email" className="modal-text-input" placeholder="" />
                        </div>
                        <div className="modal-input-form">
                            <span>Коментарий</span>
                            <textarea rows="6" placeholder='Введите текст' />
                        </div>

                    </div>
                    <div class="modal-footer">
                        <label className="label" >
                            <input type="checkbox" value="yes" />
                            Соглашаюсь с рассылкой и принимаю <span>Условия договора</span>
                        </label>
                        <br />
                        <button className="send-btn">Отправить</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
