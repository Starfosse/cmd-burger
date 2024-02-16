import "./css/ProductList.css"
import Nouveau from "./assets/nouveau.png"
import Epuise from "./assets/stock-epuise.png"
import { product } from "./data"

interface ProductListProps {
  onClick: (id: number) => void
  products: product[]
  admin: boolean
  onClickDelete: (id: number) => void
  currentItem: number
  onClickCurrentItem: (id: number) => void
}

export default function ProductList({
  onClick,
  products,
  admin,
  onClickDelete,
  currentItem,
  onClickCurrentItem,
}: ProductListProps) {
  const productsList = products.map((p) => (
    <li
      key={p.id}
      className={`productscreen ${
        admin && p.id === currentItem
          ? "currentselected"
          : ""
      } ${p.stock === false ? "onrupture" : ""}${
        p.stock === false ? "onrupture" : ""
      }`}
      onClick={() => onClickCurrentItem(p.id)}>
      {p.pub === true && (
        <img src={Nouveau} className="nouveau" />
      )}
      {p.pub === true && (
        <img src={Nouveau} className="nouveau" />
      )}
      {p.stock === false && (
        <img src={Epuise} className="epuise" />
      )}
      {p.stock === false && (
        <img src={Epuise} className="epuise" />
      )}
      <img src={p.picture} alt={p.name} />
      <p className="productname">{p.name}</p>
      <div className="pricebutton">
        <p>{p.price}</p>
        <button onClick={() => onClick(p.id)}>
          Ajouter
        </button>
        {admin === true && (
          <button onClick={() => onClickDelete(p.id)}>
            Supprimer
          </button>
        )}
      </div>
    </li>
  ))
  return (
    <div className="tast">
      <ul className="tost">{productsList}</ul>
    </div>
  )
}
