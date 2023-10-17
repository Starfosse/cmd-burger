import "./ProductBar.css"  
import euro from './assets/euro.jpg'
import pub from './assets/pub.jpg'
import picture from './assets/picture.jpg'
import stock from './assets/stock.jpg'
import product from './assets/product.jpg'
import { useState} from 'react';

export default function ProductBar({handleSubmit, onChange, onChoose, choose}){
    const [onScreen, setOnScreen] = useState(true);
    const [position, setPosition] = useState(590);
    const [newItem, setNewItem] = useState({name: '', picture: '', price: '', stock: true, pub: false});
    const moveDiv = () => {
        if(!onScreen)
            setPosition(590);
        else
            setPosition(840);
    }
    return(
        <>
        <div className="buttonlist"
            style={{top: position}}>
            <button className="updown" onClick={() => {setOnScreen(!onScreen); moveDiv()}}>↓↑</button>
            <button className={`addproduct ${choose ? "style1" : "style2"}`} 
                onClick={() => onChoose(false)}>Ajouter un produit</button>
            <button className={`modproduct ${choose ? "style2" : "style1"}`}
             onClick={() => onChoose(true)}>Modifier un produit</button>
            </div>
        {onScreen && <div className="zzz">
            {choose ? <p style={{color:"black"}}>Modifier un produit</p> : <p style={{color:"black"}}>Ajouter un produit</p>}
            <form onSubmit={handleSubmit}>
                <div className="infos">
                    <div className="preview">
                        <img/>
                    </div>
                <label className="name">
                    <img src={product}/>
                    <input 
                    name="name"
                    value={newItem.name}
                    onChange={onChange}
                    placeholder="Produit (ex: Super Burger)"/>
                </label>
                <label className="picture">
                    <img src={picture}/>
                    <input 
                    name="picture"
                    onChange={onChange}
                    placeholder="Lien URL d'une image(ex: https://photo-frites.png)"/>
                </label>
                <label className="price">
                    <img src={euro}/>
                    <input 
                    name="price"
                    onChange={onChange}
                    placeholder="Prix"/>
                </label>
                <label className="stock">
                    <img src={stock}/>
                    <select name="stock" onChange={onChange}>
                    <option>En stock</option>
                    <option>En rupture</option>
                    </select>
                </label>
                <label className="pub">
                    <img src={pub}/>
                    <select name="pub" onChange={onChange}>
                    <option value="sans pub">Sans pub</option>
                    <option value="avec pub">Avec pub</option>
                    </select>
                </label>
                <button className="submit" type="submit">Ajouter un nouveau produit au menu</button>
                </div>
                
            </form>
        </div>}
        </>
    );
}