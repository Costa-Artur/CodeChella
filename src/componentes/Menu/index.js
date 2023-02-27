import './Menu.css'

const Menu = (props) => {
    return (
        <li className='menu-item'>
            <a href="#" className='menu-link'>{props.children}</a>
            <span></span>
        </li>
    )
}

export default Menu