import { useState, useEffect} from 'react';
import './App.css';
import Header from './header';
import Card from './Card';
import ProductList from './ProductList';
import ProductBar from './ProductBar';
import { products } from './data';

function App() {

  const [admin, setAdmin] = useState(false);
  const [items, setItems] = useState(products);
  const [selectedId, setSelectedId] = useState(-1);
  const [itemsAdded, setItemsAdded] = useState([]);
  const [currentItem, setCurrentItem] = useState(-1);
  const [amountTotal, setAmountTotal] = useState(0);
  const [choose, setChoose] = useState(false);
  const selectedItem = items.find(item =>
    item.id === selectedId
  );

  if(itemsAdded.find(item => 
    item.id === selectedId))
    {
      const nextItemsAdded = itemsAdded.map(item => {
        if(item.id === selectedId)
        {
          setAmountTotal(amountTotal + parseFloat(item.price.replace(",", "."), 10));
          return{
            ...item,
            quantity : item.quantity + 1,
          };
        }
        else
          return item;
      });
      setItemsAdded(nextItemsAdded);
      setSelectedId(-1);
    }
  else if(selectedItem){
    setItemsAdded([
      { id: selectedItem.id, name :selectedItem.name, price: selectedItem.price, picture : selectedItem.picture, quantity : 1, stock : selectedItem.stock, pub: selectedItem.pub},
      ...itemsAdded,
    ]);
    setAmountTotal(amountTotal + parseFloat(selectedItem.price.replace(",", "."), 10));
    setSelectedId(-1);
  }

  function handleDeleteCard(id){
    itemsAdded.forEach(item => item.id === id ? setAmountTotal(amountTotal - parseFloat(item.price.replace(",", "."), 10) * item.quantity) : null)
    setItemsAdded(itemsAdded.filter(item => 
      item.id !== id));
}

  const handleFormSubmit = (formData) => {
    setItems([
          ...items,
          { ...formData}
          ]);
  }

  const handleInputChange = (e) => {
    const newItemsList = items.map(item => {
        if(item.id === currentItem) {
            return({...item, [e.target.name]: e.target.value});
        }
        return(item);
    });
    setItems(newItemsList);
};
  return (
    <>
        <Header 
          onClick={() => setAdmin(!admin)}
          admin={admin}
          />
        <Container>
          <Card
          items={itemsAdded}
          onClickDeleteCard={(id) => handleDeleteCard(id)}
          currentItem={currentItem}
          admin={admin}
          amountTotal={amountTotal.toFixed(2)}
          />
          {admin && <ProductBar
            onFormSubmit={(newItem) => handleFormSubmit(newItem)}
            onChoose={(e) => setChoose(e)}
            choose={choose}
            items={items}
            currentItem={currentItem}
            handleInputChange={(e) => handleInputChange(e)}
            />}
          <ProductList
            onClick={(id) => setSelectedId(id)}
            products={items}
            admin={admin}
            onClickDelete={(id) => setItems(items.filter(item => item.id !== id))}
            currentItem={currentItem}
            onClickCurrentItem={(id) => setCurrentItem(id)}
          />
          {admin && <InfoBar/>}
        </Container>
        
    </>
  )
}

function Container({children})
{
  return(
    <div className='container'>
      {children}
    </div>
  );
}

function InfoBar({})
{
  const [showDiv, setShowDiv] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setShowDiv(true);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        setShowDiv(false);
        clearInterval(interval);
        return prevProgress;
      });
    }, 15);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
       {showDiv && <div className='infobar visible'>Mod Admin Activé
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        </div>}
    </div>
  );
}

export default App
