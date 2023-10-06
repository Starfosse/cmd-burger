import React from "react"
import './header.css'
import logoBurger from './assets/logo.png'

export default function Header({onClick, admin}){
    return(
      <div className="sidebar">
        <img 
            src={logoBurger}/>
        <button onClick={() => onClick()}>
            {admin ? (<p>Desactiver</p>) : (<p>Activer</p>)} le mode admin
        </button>
      </div>
    )
}