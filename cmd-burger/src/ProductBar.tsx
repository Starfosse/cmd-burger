import React from "react"
import "./ProductBar.css"  

export default function ProductBar({handleSubmit, onChange, onChoose, choose}){
    return(
        <div className="zzz">
            <button onClick={() => onChoose()}>Switch</button>
            {choose ? <p>Modifier un produit</p> : <p>Ajouter un produit</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    <img/>
                    <input 
                    name="name"
                    onChange={onChange}
                    placeholder="Produit (ex: Super Burger)"/>
                </label>
                <label>
                    <img/>
                    <input 
                    name="picture"
                    onChange={onChange}
                    placeholder="Lien URL d'une image(ex: https://photo-frites.png"/>
                </label>
                <label>
                    <img/>
                    <input 
                    name="price"
                    onChange={onChange}
                    placeholder="Prix"/>
                </label>
                <label>
                    <img/>
                    <select value="en stock" name="stock" onChange={onChange}>
                    <option>en stock</option>
                    <option>en rupture</option>
                    </select>
                </label>
                <label>
                    <img/>
                    <select value="sans pub" name="pub" onChange={onChange}>
                    <option value="sans pub">sans pub</option>
                    <option value="avec pub">avec pub</option>
                    </select>
                </label>
                <button type="submit">Ajouter un nouveau produit au menu</button>
            </form>
        </div>
    );
}