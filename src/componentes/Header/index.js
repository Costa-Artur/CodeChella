import './Header.css'
import mainLogo from './img/Logo1.svg'
import menuIcon from './img/menu.svg'
import Menu from '../Menu'
import {useState} from 'react'


function Header ()  {

    const [isActive, setIsActive] = useState(false)

    const mudar = event => {
        setIsActive(atual => !atual)
    }


    return (
        <header className='cabecalho'>
            <div className='container'>
                <img src={mainLogo} alt="Logo do CodeChella" />
                <img src={menuIcon} alt="Botão Menu" onClick={mudar} />
                <ul className={isActive ? "menu-list" : "escondido"}>
                    <Menu>
                        A experiência
                    </Menu>
                    <Menu>
                        Mapa de Setores
                    </Menu>
                    <Menu>
                        Informações
                    </Menu>
                    <Menu>
                        Ingresso
                    </Menu>
                </ul>
            </div>
        </header>
    );
};

export default Header