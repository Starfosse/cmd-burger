import './ProductList.css';
import Epuise from './assets/epuise.png';
import Nouveau from './assets/nouveau.jpg';

export default function ProductList({onClick, products, admin, onClickDelete, currentItem, onClickCurrentItem}){
    const productsList = products.map(p =>
        <li 
            key={p.id}
            className={`productscreen ${admin && p.id === currentItem ? "currentselected" : ""} ${p.stock === false ? "onrupture" : ""}`}
            onClick={() => onClickCurrentItem(p.id)}
        >
            {p.pub === true && 
             <img src={Nouveau} className='nouveau'/>}
            {p.stock === false &&
             <img src={Epuise} className='epuise'/>}
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