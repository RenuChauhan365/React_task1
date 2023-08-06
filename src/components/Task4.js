import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Task4 = () => {


  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    };

    const deleteAll = () => {
        setItems([])
    }

  return (
    <div>

      <InputPart onAddItem={addItem} onDeleteAll={deleteAll}/>
      <DisplayPart items={items} onDeleteItem={deleteItem}/>
    </div>
  );
};

// ________________InputPart_______________________________________________________________________


const InputPart = ({ onAddItem, onDeleteAll  }) => {


  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      onAddItem(inputValue);
      setInputValue('');
    }
    };

  const deleteAllHandler = () => {
    onDeleteAll ()
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      &nbsp;  <Button variant='warning' onClick={handleAddItem} disabled={!inputValue.trim()}>Add</Button>
     &nbsp;  <Button  variant='danger' onClick={deleteAllHandler}>Delete All</Button>
    </div>
  );
};

//________________DisplayPart ________________________________________________



const DisplayPart = ({ items, onDeleteItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <Button variant='danger' onClick={() => onDeleteItem(index)}>Delete</Button>
        </li>
      ))
      }
    </ul>
  );
};


export default Task4;

