import './Card.css';


export default function Card({items, onClickDeleteCard, currentItem, admin, amountTotal}){

    const productsList = items.map(p =>
        <li key={p.id}
        className={`product ${admin && p.id === currentItem ? "currentselected" : ""}`}>
        <div className='picture'>
        <img 
                src={p.picture}
                alt={p.name}
            />
        </div>
        <div className='nameprice'>
            <i>{p.name}</i>
                <p className='cheat'>{p.price}</p>
        </div>
        <p className='cheat'>x {p.quantity}</p>
            <button className='hidden' onClick={() => onClickDeleteCard(p.id)}>-</button>
        </li>
    );
    return(
        <div className="card">
            <div className="total">
                <div>Total</div>
                <div>{amountTotal} €</div>
            </div>
            <div className='list'>
            {productsList ? (<ul className="productlist">{productsList}</ul>) : <p>Votre commande est vide</p>}
            </div>
        </div>
    );
}