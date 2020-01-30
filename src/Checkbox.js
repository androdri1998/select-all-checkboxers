import React, { useState, useEffect } from 'react';

export default function Checkbox({value, onChange}){

  const [checked, setChecked] = useState(value || false);

  useEffect(() => {
    if(onChange)
      onChange(checked)
  }, [checked]);

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <input 
      type="checkbox" 
      onChange={(ev) => {setChecked(ev.target.checked)}} 
      checked={checked} />
  )
}