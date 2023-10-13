import { useState, useRef } from 'react';
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
  const [currentItem, setCurrentItem] = useState([]);
  const [nextId, setNextId] = useState(7);
  const [amountTotal, setAmountTotal] = useState(0);
  const [newItem, setNewItem] = useState({}
  );
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
      { id: selectedItem.id, name :selectedItem.name, price: selectedItem.price, picture : selectedItem.picture, quantity : 1},
      ...itemsAdded,
    ]);
    setAmountTotal(amountTotal + parseFloat(selectedItem.price.replace(",", "."), 10));
    setSelectedId(-1);
  }

  function handleClick(){
    setAdmin(!admin);
  }

  function handleSelected(id){
    setSelectedId(id);
  }

  function handleDelete(id){
      setItems(items.filter(item => 
        item.id !== id));
  }

  function handleDeleteCard(id){
    // const test = itemsAdded.filter(item => 
    //   item.id === id);
    //   console.log(test[0].price);
      // console.log(test);
    itemsAdded.forEach(item => item.id === id ? setAmountTotal(amountTotal - parseFloat(item.price.replace(",", "."), 10) * item.quantity) : null)
    setItemsAdded(itemsAdded.filter(item => 
      item.id !== id));
}

  function handleCurrentItem(id){
  setCurrentItem(id);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.stock.value);
    setItems([
    ...items,
    { ...newItem, id: nextId }
    ]);
    setNextId(nextId + 1);
    setNewItem({});
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    itemToModif = items.filter(item => 
      item.id === currentItem);
    const oldId = itemToModif[0].id;
    setItems(items.filter(item => 
      item.id !== currentItem));
    setItems([
      ...items,
      { ...newItem, id: oldId }
      ]);
      setNewItem({});
  }

  const onChange =(e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  }


  return (
    <>
        <Header 
          onClick={() => handleClick()}
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
            onChange={onChange}
            handleSubmit={(e) => handleSubmit(e)}
            onChoose={() =>setChoose(!choose)}
            choose={choose}
            />}
          <ProductList
            onClick={(id) => handleSelected(id)}
            products={items}
            admin={admin}
            onClickDelete={(id) => handleDelete(id)}
            currentItem={currentItem}
            onClickCurrentItem={(id) => handleCurrentItem(id)}
          />
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

export default App


// champs input à controler !!!