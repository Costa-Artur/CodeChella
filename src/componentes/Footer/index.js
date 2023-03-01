import './Footer.css'
import Logo2 from './img/Logo2.png'
import LogoInsta from './img/instagram.png'
import LogoTwitch from './img/twitch.png'
import LogoTwitter from './img/twitter.png'
import LogoWhatsapp from './img/whatsapp.png'

const Footer = () => {
    return (

        <footer className='footer'>

            <img src={Logo2} alt="Logo Codechella" className='footer__img'/>
            <p className='footer__txt'>Acesse nossas redes:</p>
            <div className='footer__redes'>
                <a href="https://github.com/Costa-Artur" className='footer__link'><img src={LogoInsta} alt="Logo Instagram"/></a>
                <a href="https://www.linkedin.com/in/artur-costa-de-souza-7673a1244/" className='footer__link'><img src={LogoTwitch} alt="Logo Twitch" /></a>
                <a href="https://github.com/Costa-Artur" className='footer__link'><img src={LogoTwitter} alt="Logo Twitter" /></a>
                <a href="https://www.linkedin.com/in/artur-costa-de-souza-7673a1244/" className='footer__link'><img src={LogoWhatsapp} alt="Logo Whatsapp" /></a>
            </div>
            <p className='footer__txt'>Desenvolvido por Artur Costa de Souza. Projeto fictício sem fins comerciais.</p>
        </footer>

    )
}

export default Footer