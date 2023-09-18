import { useState, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState([
    {text: "Throw out the cat", completed: true},
    {text: "Feed the trash", completed: false},
    {text: "Set fire on the house", completed: false},
  ]);
  let [newData, setNewData] = useState([])

  let txt = useRef();

  const addItem = (t, c) => {
    console.log(t, c);
    setData(prev => ([...prev, {text: t, completed: c}]));
  }
  const removeItem = (index) => {
    setData(prev => {
      let newData = [...prev];
      newData.splice(index,1);
      return newData;
    });
  }
  const handleChange = (text) => {
    const newList = data.map((item) => {
      if (item.text === text) {
        const updatedItem = {
          ...item,
          completed: !item.completed,
        };

        return updatedItem;
      }

      return item;
    });
    setData(newList);
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <table>
            <tbody>
              {data.map((item,index) => (
                <tr key={index}>
                  <td>{item.text}</td>
                  <td><input type="checkbox" checked={item.completed} onClick={handleChange(item.text)}></input></td>
                  <td><button onClick={e => {removeItem(index)}}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </header>
        <form onSubmit={(e) => 
            {
                e.preventDefault();
                console.log(e);
                console.log(txt.current.value);
                addItem(txt.current.value, false);
                txt = "";
            }}>
            <input name="txt" ref={txt} />
            <button type="submit">Uložit</button>
        </form>
      </div>
    </>
  )
}

export default App
