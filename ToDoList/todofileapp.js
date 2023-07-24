import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const lisOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItem = (index) => {
    setItems((oldItems) => {
      return oldItems.filter((item, i) => i !== index);
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder="Add items" onChange={itemEvent} value={inputList} />
          <button onClick={lisOfItems}>+</button>
          <ol>
            {items.map((itemVal, index) => (
              <li key={index}>
                {itemVal}
                <i className="fa fa-times" aria-hidden="true" onClick={() => deleteItem(index)}></i>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App; 