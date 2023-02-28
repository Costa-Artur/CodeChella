import './Date.css'



const Date = (props) => {

    const DataEDia = `${props.DayName} <${props.DayDate}>`

    return (

        <h2 className='date'>{DataEDia}</h2>

    )
}

export default Date