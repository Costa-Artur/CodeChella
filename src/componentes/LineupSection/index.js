import React from "react";
import './LineupSection.css'
import Date from '../Date'
import {Principal, Quarto, Secundario, Terceiro} from '../LineUp'
import LineUpImg from './img/Frame 1.png'

const LineupSection = () => {

    return (
        <section className="LineUp">
            <h1 className="LineUp__title">/ Line-Up /</h1>
            <Date DayName="Sábado" DayDate="11/03"/>
            <Principal Nome="System of a DOM"/>
            <Secundario Nome="Python Maiden"/>
            <Secundario Nome="Apollo Client 2001"/>
            <Secundario Nome="Bon Java"/>
            <Secundario Nome="NickCallback"/>
            <Terceiro Nome="Linkin Promises"/>
            <Terceiro Nome="Papa React"/>
            <Terceiro Nome="Angular in Chains"/>
            <Quarto Nome="Agnostic Front-end"/>
            <Quarto Nome="SlipkNode"/>
            <Quarto Nome="Pink Flutter"/>
            <Quarto Nome="Kiss"/>
            <Date DayName="Domingo" DayDate="12/03"/>
            <Principal Nome="Lana Del Ploy"/>
            <Secundario Nome="Dua Lib"/>
            <Secundario Nome="The Backnd"/>
            <Secundario Nome="CSS Styles"/>
            <Secundario Nome="ArrayAna Grande"/>
            <Secundario Nome="DJ Query"/>
            <Terceiro Nome="Miley Cypress"/>
            <Terceiro Nome="The Bootstrap BOys"/>
            <Terceiro Nome="Json Derulo"/>
            <Terceiro Nome="CloudPlay"/>
            <Terceiro Nome="Dev Lovato"/>
            <Quarto Nome="Kylie MiLOG"/>
            <Quarto Nome="Jenkins Brothers"/>
            <Quarto Nome="Rubycat Dolls"/>
            <img src={LineUpImg} alt="Pessoas em um festival de música" className="LineUp__img"/>
        </section>
    )

}

export default LineupSection