import "./ProductBar.css"  
import euro from './assets/euro.jpg'
import pub from './assets/pub.jpg'
import picture from './assets/picture.jpg'
import stock from './assets/stock.jpg'
import product from './assets/product.jpg'
import { useState} from 'react';

export default function ProductBar({onFormSubmit, onChoose, choose, items, currentItem, handleInputChange}){
    const [onScreen, setOnScreen] = useState(true);
    const [position, setPosition] = useState(590);
    const [nextId, setNextId] = useState(10);
    const [test, setTest] = useState(0);
    const [newItem, setNewItem] = useState({name: '', picture: '', price: '', stock: '', pub: '', id : nextId});
    const onChange= (e) => setNewItem({ ...newItem, [e.target.name]: e.target.value });
    const resetNewItem = () => setNewItem({name: '', picture: '', price: '', stock: '', pub: '', id : nextId});
    const moveDiv = () => {
        if(!onScreen)
            setPosition(590);
        else
            setPosition(840);
    }
    if(choose === false && test === 0)
    {
        setTest(-1);
        resetNewItem();
    }
    if(choose === true && test === -1 && currentItem > -1)
    {
        setTest(0);
        resetNewItem();
    }
    if(choose === true && test === -1)
    {
        setTest(0);
        resetNewItem();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setNextId(nextId + 1);
        if (newItem.stock === "false")
        {
            const newItemStock = newItem;
            newItemStock.stock = false;
            setNewItem({newItemStock});
        }
        if (newItem.pub === "true")
        {
            const newItemPub = newItem;
            newItemPub.pub = true;
            setNewItem({newItemPub});
        }
        onFormSubmit(newItem);
        resetNewItem();
    }

    // const handleInputChange = (e) => {
    //     const newItemsList = items.map(item => {
    //         if(item.id === currentItem) {
    //             return({...item, [e.target.name]: e.target.value});
    //         }
    //         return(item);
    //     });
    //     setItems(newItemsList);
    // };

    const customOnChange = (e) => {
        if (choose) {
          handleInputChange(e);
        } else {
          onChange(e);
        }
      };

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
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="infos">
                    <div className="preview">
                        <img src={newItem.picture}/>
                    </div>
                <label className="name">
                    <img src={product}/>
                    <input 
                    name="name"
                    value={choose ? (currentItem !== -1 ? items[currentItem].name :newItem.name) : newItem.name}
                    onChange={(e) => customOnChange(e)}
                    placeholder="Produit (ex: Super Burger)"/>
                </label>
                <label className="picture">
                    <img src={picture}/>
                    <input 
                    name="picture"
                    onChange={(e) => customOnChange(e)}
                    value={choose ? (currentItem !== -1 ? items[currentItem].picture :newItem.picture) : newItem.picture}
                    placeholder="Lien URL d'une image(ex: https://photo-frites.png)"/>
                </label>
                <label className="price">
                    <img src={euro}/>
                    <input 
                    name="price"
                    onChange={(e) => customOnChange(e)}
                    value={choose ? (currentItem !== -1 ? items[currentItem].price :newItem.price) : newItem.price}
                    placeholder="Prix"/>
                </label>
                <label className="stock">
                    <img src={stock}/>
                    <select value={choose ? (currentItem !== -1 ? items[currentItem].stock :newItem.stock) : newItem.stock} name="stock" onChange={(e) => customOnChange(e)}>  {/*{items[currentItem].stock} */}
                    <option value="true">En stock</option>
                    <option value="false">En rupture</option>
                    </select>
                </label>
                <label className="pub">
                    <img src={pub}/>
                    <select value={choose ? (currentItem !== -1 ? items[currentItem].pub :newItem.pub) : newItem.pub} name="pub" onChange={(e) => customOnChange(e)}> {/*items[currentItem].pub*/}
                    <option value="false">Sans pub</option>
                    <option value="true">Avec pub</option>
                    </select>
                </label>
                {choose ? <p className="modifinfo">Modification en temps réél</p> : <button className="submit" type="submit">Ajouter un nouveau produit au menu</button>}
                </div>
                
            </form>
        </div>}
        </>
    );
}