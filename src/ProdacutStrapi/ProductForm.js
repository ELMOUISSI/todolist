import React, { useRef } from "react";
export default function ProductForm({action}){

    const pData = useRef({})

    function handleChange(e){
        pData[e.target.name] = e.target.value
    }

    function handleAdd(e){
        e.preventDefault()
        action(pData)
    }

    return(
        <form>
            <label htmlFor="title">Title</label>
            <input name="title" onChange={handleChange}/>
            
            <label htmlFor="description">Description</label>
            <input name="description" onChange={handleChange}/>
            <label htmlFor="price">Price</label>
            <input name="price" onChange={handleChange}/><br/>
            <button onClick={handleAdd} className="btn btn-primary">Ajouter</button>

        </form>
    )
}