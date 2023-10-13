import React from "react"
import './header.css'
import logoBurger from './assets/logo.png'

export default function Header({onClick, admin}){
    return(
      <div className="sidebar">
        <img 
            src={logoBurger}/>
        <button onClick={() => onClick()}>
            {admin ? ("Desactiver") : ("Activer")} le mode admin
        </button>
      </div>
    )
}