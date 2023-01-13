//import React from 'react'
import { useState } from "react";

//export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ( { target }) => {        
        setInputValue(target.value);
    }

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        //le mandas a la fn un callback
        //setCategories( categories => [inputValue.trim(),...categories] );
        onNewCategory(inputValue.trim());
        
        //limpiamos el input
        setInputValue("");
    }

    return (
        <form onSubmit={ (event) => onFormSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }
            />
        </form>        
    )
}
