import './LineUp.css'

export const Principal = (props) => {
    return (
        <h1 className='principal'>{props.Nome}</h1>
    )
}

export const Secundario = (props) => {
    return (
    <h1 className='secundario'>{props.Nome}</h1>
    )
}

export const Terceiro = (props) => {
    return (
        <h3 className='terceiro'>{props.Nome}</h3>
    )
}

export const Quarto = (props) => {
    return (
        <h4 className='quarto'>{props.Nome}</h4>
    )
}
