import React, { useState, useEffect } from 'react';

export default function Checkbox({value, onChange, onClick = () => {}}){
    const [check, setCheck] = useState(value || false);
    const [click, setClick] = useState(false);

    useEffect(() => {
        if(onChange)
            onChange(check)
    }, [check]);

    useEffect(() => {
        if(click){
            if(onClick)
                onClick(check);
            
            setClick(false);
        }
    }, [click]);

    function handlerClick() {
        setClick(true);
    }

    useEffect(() => {
        setCheck(value);
    }, [value])

    function handlerCheck(ev){
        setCheck(ev.target.checked);
    }

    return <input 
                type="checkbox" 
                onClick={handlerClick}
                onChange={handlerCheck} 
                checked={check} />

}