import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [order, setOrder] = useState('change to descending order');
  const [change,setChange] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeOrderHandler = () => {
    if (!change) {
      setOrder('change to ascending order');
      setChange(true);
    } else {
      setOrder('change to descending order');
      setChange(false);
    }
  }

 
const listItems = useMemo(() => [5,3,1,10,9] , [])
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} change = {change} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
        Change to Order
      </Button>
    </div>
  );
}

export default App;
