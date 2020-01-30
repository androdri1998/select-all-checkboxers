import React, { useState, useMemo, useEffect } from 'react';
import Checkbox from './Checkbox';

const data = [
  {
    id: 1,
    name: "teste 1"
  },
  {
    id: 2,
    name: "teste 2"
  },
  {
    id: 3,
    name: "teste 3"
  },
];

function App() {

  const [selectAll, setSelectAll] = useState(false);

  const checkboxers = useMemo(() => {
    return selectAndUnselectItems(selectAll);
  }, [selectAll]);

  useEffect(() => {
    console.log(checkboxers);
  }, [checkboxers]);

  function selectAndUnselectItems(value) {
    data.map((item) => {
      item.checked = value; 
    });

    return data;
  }

  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <input type="checkbox" onChange={(ev) => {setSelectAll(ev.target.checked)}}/>
        <p>Select all</p>
      </div>
      {checkboxers && 
        checkboxers.map((item, index) => (
          <div key={index} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <Checkbox 
              value={item.checked}
              onChange={(value) => {console.log(value)}}/>
            <p>{item.name}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;