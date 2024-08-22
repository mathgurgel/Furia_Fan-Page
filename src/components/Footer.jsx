import './Footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer id="footer">
            <div id="footer-content">
                <div id="footer-brand">
                    <img src="https://seeklogo.com/images/F/furia-esports-logo-C7F0FAD39C-seeklogo.com.png"></img>
                    <p>Uma organização de e-sports<br/>
                    de brasileiros, para brasileiros.</p>
                </div>
                <div id="footer-links">
                    <div id="footer-socials">
                        <a href="https://www.instagram.com/furiagg/" target="_blank"><FaInstagram className='footer-social' /></a>
                        <a href="https://twitter.com/furia" target="_blank"><FaTwitter className='footer-social' /></a>
                        <a href="https://www.facebook.com/furiagg" target="_blank"><FaFacebook className='footer-social' /></a>
                        <a href="https://www.youtube.com/channel/UCE4elIT7DqDv545IA71feHg" target="_blank"><FaYoutube className='footer-social' /></a>
                        <a href="https://www.twitch.tv/furiatv" target="_blank"><FaTwitch className='footer-social' /></a>
                    </div>
                    <div id="footer-nav">
                        <Link className='link' to="/sobre">SOBRE</Link>
                        <Link className='link' to="/noticias">NOTÍCIAS</Link>
                        <Link className='link' to="/calendario">CALENDÁRIO</Link>
                        <Link className='link' to="/times">TIMES</Link>
                        <Link className='link' to="https://furia.gg/">LOJA</Link>
                        <Link className='link' to="/forfun">4FUN</Link>
                        <Link className='link' to="/midia">MÍDIA</Link>
                    </div>
                </div>
            </div>
            <div id='footer-bottom'>
                Website designed by Matheus Gurgel.
            </div>
        </footer>
    );
}

export default Footer;