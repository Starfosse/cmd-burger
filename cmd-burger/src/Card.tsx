import React from "react";
import './Card.css';
import { products } from './data';
import { useState } from 'react';


export default function Card({}){
    
    return(
        <div className="card">
            <div className="total">
                <div>Total :</div>
            </div>
            <div className="liste">Votre commande est vide</div>
            {/* <div className="tast">
                <ul>{productsList}</ul>
            </div> */}
        </div>
    );
}