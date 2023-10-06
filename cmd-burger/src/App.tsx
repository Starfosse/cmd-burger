import { useState } from 'react';
import './App.css';
import Header from './header';
import Card from './Card';
import ProductList from './ProductList';
import { products } from './data';

function App() {

  const [admin, setAdmin] = useState(false);
  const [items, setItems] = useState(products);
  const [selectedId, setSelectedId] = useState(0);
  
  const selectedItem = items.find(item =>
    item.id === selectedId
  );
  console.log(selectedItem);
  console.log(selectedId);
  console.log(items);

  function handleClick(){
    setAdmin(!admin);
  }

  function handleSelected(id){
    console.log(id);
    setSelectedId(id);
  }

  return (
    <>
        <Header 
          onClick={() => handleClick()}
          admin={admin}
          />
        <Container>
          <Card/>
          <ProductList
            onClick={(id) => handleSelected(id)}
            products={items}
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
