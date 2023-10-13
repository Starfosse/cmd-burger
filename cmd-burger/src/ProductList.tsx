import React from "react";
import './ProductList.css';
// import { products } from './data';

export default function ProductList({onClick, products, admin, onClickDelete, currentItem, onClickCurrentItem}){
    const productsList = products.map(p =>
        <li 
            key={p.id}
            className={`productscreen ${admin && p.id === currentItem ? "currentselected" : ""}`}
            onClick={() => onClickCurrentItem(p.id)}
        >
            <img 
                src={p.picture}
                alt={p.name}
            />
                <b className="productname">{p.name}</b>
                <div className="pricebutton">
                    <p>{p.price}</p>
                    <button onClick={() => onClick(p.id)}>Ajouter</button>
                    {/* {admin === true && <button onClick={() => onClickDelete(p.id)}>Supprimer</button>} */}
                </div>
        </li>
    );
    return(
        <div className="tast">
            <ul className="tost">{productsList}</ul>
        </div>
    );
}