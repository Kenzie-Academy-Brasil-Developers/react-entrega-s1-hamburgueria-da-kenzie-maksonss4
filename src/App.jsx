import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Cart from './components/Cart';
import Header from './components/Header';
import List from './components/List';
import Main from './components/Main';
import Global from './style/global';

function App() {
  const [burguers, setBurguers] = useState([])
  const [filter, setFilter] = useState([])
  const [itensCart, setItensCart] = useState([])
  
  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(resp => setBurguers(resp))
  }, [])

  function filterBurguers () {
    const result = burguers.filter(burguer => {
      return burguer.category === "Sanduíches"
    })
    setFilter([...result])
  }

  function filterDrinks () {
    const result = burguers.filter(burguer => {
      return burguer.category === "Bebidas"
    })
    setFilter([...result])
  }
  
  return (
    <div className="App">
      <Global></Global>
      <Header burguers={burguers} setFilter={setFilter}></Header>
      <Main>
        <div className='filtersAndUl'>
          <div className='divButtonsFilter'>
            <button onClick={() => setFilter([])}>Todos</button>
            <button onClick={filterBurguers}>Burguers</button>
            <button onClick={filterDrinks}>Bebidas</button>
          </div>
          <List itensCart={itensCart} setItensCart={setItensCart} burguers={burguers} filter={filter} />
        </div>
        <Cart itensCart={itensCart} setItensCart={setItensCart} />
      </Main>
    </div>
  );
}

export default App;
