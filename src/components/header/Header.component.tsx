import { faAlignJustify, faMobile, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import ContactModal from '../contactModal/ContactModal.component';
import './Header.component.css';

export default function Header() {

    const [expandBtnIcon, setExpandBtnIcon] = useState(faAlignJustify);

    const handeExpandBtnClick = () => {
        document.getElementsByClassName('navbar')[0].classList.toggle('active');
        document.getElementsByClassName('contacts')[0].classList.toggle('active');
        document.getElementsByClassName('responsive-navbar-header')[0].classList.toggle('active');

        setExpandBtnIcon(expandBtnIcon === faTimes ? faAlignJustify : faTimes);
    }


    return (
        <div className="header">
            <div className="responsive-navbar-header">
            <a href="#logo" className="logo"><span>Web</span>Studio</a>
            <button className="show-navbar-btn" onClick={handeExpandBtnClick}><i><FontAwesomeIcon icon={expandBtnIcon} /></i></button>
            </div>
            <div className="navbar">
                
                <ul>
                    <li><a className="nav-link nav-link-grow-up" href="/">Студия</a></li>
                    <li><a className="nav-link nav-link-grow-up" href="#2">Портфолио</a></li>
                    <li><a className="nav-link nav-link-grow-up" href="#3">Контакты</a></li>
                </ul>

            </div>
            <div className="contacts">
                <ContactModal />
                <a className="contact" href="#5"><i><FontAwesomeIcon icon={faMobile} /></i>+38 096 111 11 11</a>
            </div>
        </div>
    )
}
