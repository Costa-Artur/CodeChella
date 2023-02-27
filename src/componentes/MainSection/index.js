import sectionImg from './img/Rectangle 7.png'
import './MainSection.css'
import iconeIngresso from './img/icone_ingresso.svg'

function MainSection () {

    return (
        <main className='mainSection'>
            <img src={sectionImg} alt="" className='mainSection__img'/>
            <div className='mainSection__conteudo'>
                <h1 className='mainSection__title'>&lt; 11 e 12 de Março &gt; Aluródromo de São Paulo</h1>
                <p className='mainSection__text'>Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, 
                tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
                <a href="#" className='mainSection__button'>
                    <p className='mainSection__button__text'>Comprar ingresso!</p>
                    <img src={iconeIngresso} alt="" className='mainSection__button__icon'/>
                </a>
            </div>
        </main>
    )

}

export default MainSection