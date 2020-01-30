import React, { useState, useMemo, useEffect } from 'react';
import Checkbox from './Checkbox';

const data = [
  {
    id:1,
    name: "teste 1"
  },
  {
    id:2,
    name: "teste 2"
  },
  {
    id: 3,
    name: "teste 3"
  },
];

function App() {

  const [selectAll, setSelectAll] = useState(false);
  const [selecteds, setSelecteds] = useState([]);

  const checkboxers = useMemo(() => {
    return data;
  }, [data]);

  function selecAndUnselectItems(value) {
    const aux = [];
    if(!value){
      setSelecteds([]);
      return ;
    }

    data.map((item) => {
      if(!aux.includes(item.id)){
        aux.push(item.id);
      }
    });

    setSelecteds(aux);
    return ;
  }

  function checkedItem({ value, id }) {
    let aux;
    if(value){
      aux = selecteds;
      if(!aux.includes(id)){
        aux.push(id);
      }
    } else {
      aux = selecteds.filter((item) => item !== id);
    }

    if(aux.length !== checkboxers.length){
      setSelectAll(false);
    } else if(aux.length === checkboxers.length) {
      setSelectAll(true);
    }

    setSelecteds(aux);
  }

  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <Checkbox 
          value={selectAll}
          onClick={(value) => {
            selecAndUnselectItems(value);
          }}
          onChange={(value) => {
            setSelectAll(value);
          }}/>
        <p>Select all</p>
      </div>
      {
        checkboxers.map((item, index) => {
          const checked = selecteds.includes(item.id);
          return (
            <div key={index} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <Checkbox 
                onChange={(value) => {
                  checkedItem({id: item.id, value})
                }}
                value={checked}/>
              <p>{item.name}</p>
            </div>
          )
        })
      }
      <button onClick={() => {console.log("selecteds: ",selecteds)}}>
        ver selecteds
      </button>
    </div>
  );
}

export default App;