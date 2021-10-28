import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Header.component.css';

export default function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <a href="#logo" className="logo"><span>Web</span>Studio</a>
                <a className="nav-link nav-link-grow-up" href="#1">Студия</a>
                <a className="nav-link nav-link-grow-up" href="#2">Портфолио</a>
                <a className="nav-link nav-link-grow-up" href="#3">Контакты</a>
            </div>
            <div className="contacts">
                <a className="contact" href="#4"><i><FontAwesomeIcon icon={faEnvelope}/></i>info@devstudio.com</a>
                <a className="contact" href="#5"><i><FontAwesomeIcon icon={faMobile}/></i>+38 096 111 11 11</a>
            </div>
        </div>
    )
}
