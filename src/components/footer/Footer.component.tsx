import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Footer.component.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="about">
                    <h1 className="logo-text"><span>Web</span>Studio</h1>
                    <div className="contact">
                        <span className="city">г. Киев, пр-т Луси Украинки, 26</span>
                        <span>info@example.com</span>
                        <span>+38 099 111 11 11</span>
                    </div>
                </div>

                <div className="socials">
                    <h2>Присоединяйтесь</h2>
                    <div className="socials-icons">
                        <a href="#1"><i><FontAwesomeIcon icon={faInstagram}/></i></a>
                        <a href="#2" className="twitter"><i><FontAwesomeIcon icon={faTwitter}/></i></a>
                        <a href="#3"><i><FontAwesomeIcon icon={faFacebookF}/></i></a>
                        <a href="#4"><i><FontAwesomeIcon icon={faLinkedinIn}/></i></a>
                    </div>
                </div>

                <div className="subscribe-form">
                    <h2>Подпишитесь на рассылку</h2>
                    <form >
                        <input type="email" name="email" className="text-input subscribe-input" placeholder="E-mail" />
                        <button type="submit" className="subscribe-btn">
                            Подписаться
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}
