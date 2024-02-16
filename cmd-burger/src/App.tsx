import { ReactNode, useEffect, useState } from "react"
import "./css/App.css"
import Card from "./Card"
import ProductBar from "./ProductBar"
import ProductList from "./ProductList"
import { product, products } from "./data"
import Header from "./header"

function App() {
  const [admin, setAdmin] = useState(false)
  const [items, setItems] = useState<product[]>(products)
  const [selectedId, setSelectedId] = useState(-1)
  const [itemsAdded, setItemsAdded] = useState<
    product[] | []
  >([])
  const [currentItem, setCurrentItem] = useState(-1)
  const [amountTotal, setAmountTotal] = useState(0)
  const [choose, setChoose] = useState(false)
  const selectedItem = items.find(
    (item) => item.id === selectedId
  )

  if (itemsAdded.find((item) => item.id === selectedId)) {
    const nextItemsAdded = itemsAdded.map((item) => {
      if (item.id === selectedId) {
        setAmountTotal(
          amountTotal +
            parseFloat(item.price.replace(",", ".")) //,10
        )
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      } else return item
    })
    setItemsAdded(nextItemsAdded)
    setSelectedId(-1)
  } else if (selectedItem) {
    setItemsAdded([
      {
        id: selectedItem.id,
        name: selectedItem.name,
        price: selectedItem.price,
        picture: selectedItem.picture,
        quantity: 1,
        stock: selectedItem.stock,
        pub: selectedItem.pub,
      },
      ...itemsAdded,
    ])
    setAmountTotal(
      amountTotal +
        parseFloat(selectedItem.price.replace(",", ".")) //,10
    )
    setSelectedId(-1)
  }

  function handleDeleteCard(id: number) {
    itemsAdded.forEach((item) =>
      item.id === id
        ? setAmountTotal(
            amountTotal -
              parseFloat(item.price.replace(",", ".")) *
                item.quantity
          )
        : null
    )
    setItemsAdded(
      itemsAdded.filter((item) => item.id !== id)
    )
  }

  const handleFormSubmit = (formData: product) => {
    setItems([...items, { ...formData }])
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement
    >
  ) => {
    const newItemsList = items.map((item) => {
      if (item.id === currentItem) {
        if (e.target.value === "true")
          return { ...item, [e.target.name]: true }
        if (e.target.value === "false")
          return { ...item, [e.target.name]: false }
        return { ...item, [e.target.name]: e.target.value }
      }
      return item
    })
    setItems(newItemsList)
  }
  return (
    <>
      <Header
        onClick={() => setAdmin(!admin)}
        admin={admin}
      />
      <Container>
        <Card
          items={itemsAdded}
          onClickDeleteCard={(id: number) =>
            handleDeleteCard(id)
          }
          currentItem={currentItem}
          admin={admin}
          amountTotal={amountTotal.toFixed(2)}
        />
        {admin && (
          <ProductBar
            onFormSubmit={(newItem: product) =>
              handleFormSubmit(newItem)
            }
            onChoose={(e: boolean) => setChoose(e)}
            choose={choose}
            items={items}
            currentItem={currentItem}
            handleInputChange={(e) => handleInputChange(e)}
          />
        )}
        <ProductList
          onClick={(id: number) => setSelectedId(id)}
          products={items}
          admin={admin}
          onClickDelete={(id: number) =>
            setItems(items.filter((item) => item.id !== id))
          }
          currentItem={currentItem}
          onClickCurrentItem={(id: number) =>
            setCurrentItem(id)
          }
        />
        {admin && <InfoBar />}
      </Container>
    </>
  )
}

function Container({ children }: { children: ReactNode }) {
  return <div className="container">{children}</div>
}

function InfoBar({}) {
  const [showDiv, setShowDiv] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setShowDiv(true)

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1
        }
        setShowDiv(false)
        clearInterval(interval)
        return prevProgress
      })
    }, 15)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      {showDiv && (
        <div className="infobar visible">
          Mod Admin Activé
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
