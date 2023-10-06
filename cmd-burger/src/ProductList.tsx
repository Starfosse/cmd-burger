import React from "react";
import './ProductList.css';
// import { products } from './data';

export default function ProductList({onClick, products}){
    const productsList = products.map(p =>
        <li key={p.id}>
            <img 
                src={p.picture}
                alt={p.name}
            />
            <p>
                <p><b>{p.name}</b></p>
                <div>
                    <p>{p.price}</p>
                    <button onClick={() => onClick(p.id)}>Ajouter</button>
                </div>
            </p>
        </li>
    );
    return(
        <div className="tast">
            <ul>{productsList}</ul>
        </div>
    );
}