import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// despues de la version 17 de react no hace falta importarlo
// import React from 'react'

// https://developers.giphy.com/dashboard/?
// fgbonta@gmail.com Agustin43@
// react-app-curso 07yugR7qqyLHpAcR6uj7lRamVCh2JON0

export const GifExpertApp = () => {

    //no puede haber hooks en if (no deben hacer)
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {

        /* const [,data2] = ['One Punch','Dragon Ball'];
        const { nameId } = { nameId:'26954', status: true};
        const newData = [...['One Punch','Dragon Ball'],'hola'];
        const newData2 = { ...{ nameId:'26954', status: true},tete:'sisi'};
        console.log(data2,nameId,newData,newData2); */

        if( categories.includes(value) ) return;
        
        /**
         * no se puede usar categories.push('hulk'), no se puede mutar
         */
        setCategories([value,...categories]);
    }

    return (
        <>
            {/** titulo */}
            <h1>GifExpertApp</h1>

            {/** input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ (value)=> onAddCategory(value) }
            />

            {/** listado de Gif */}
            
            { 
                categories.map( (category) => 
                    (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                ) 
            }

        </>

    )
}
