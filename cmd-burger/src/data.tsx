import burgerBacon from "./assets/burger-bacon-egg.png"
import burgerPoulet from "./assets/burger-poulet.png"
import burgerVegan from "./assets/burger-vegan.png"
import cryspyPotatoes from "./assets/cryspy-potatoes.png"
import fritesNewYork from "./assets/frites-new-york.png"
import fritesPaprika from "./assets/frites-paprika.png"
import coca from "./assets/coca.png"
import pepsi from "./assets/pepsi.png"
import iceTea from "./assets/ice-tea.png"
import glaces from "./assets/glaces-artisanales.png"

export type product = {
  id: number
  name: string
  picture: string
  price: string
  stock: boolean
  pub: boolean
  quantity: number
}

export const products: product[] = [
  {
    id: 0,
    name: "Burger Bacon",
    picture: burgerBacon,
    price: "6,00€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 1,
    name: "Burger Poulet",
    picture: burgerPoulet,
    price: "7,00€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 2,
    name: "Burger Vegan",
    picture: burgerVegan,
    price: "5,00€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 3,
    name: "Cryspy Potatoes",
    picture: cryspyPotatoes,
    price: "3,00€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 4,
    name: "Frites New-York",
    picture: fritesNewYork,
    price: "2,50€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 5,
    name: "Frites Paprika",
    picture: fritesPaprika,
    price: "2,50€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 6,
    name: "Coca",
    picture: coca,
    price: "1,50€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 7,
    name: "Pepsi",
    picture: pepsi,
    price: "1,50€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 8,
    name: "IceTea",
    picture: iceTea,
    price: "1,50€",
    stock: true,
    pub: false,
    quantity: 0,
  },
  {
    id: 9,
    name: "Glaces",
    picture: glaces,
    price: "2,00€",
    stock: true,
    pub: false,
    quantity: 0,
  },
]
