import React, { useState } from 'react';
import Sresult from './Sresult';
const Search = () => {
    const[img,setImg]=useState("");
    const inputEvent=(e)=>{
    const data = e.target.value;
    setImg(data);
    };

    return (<>
        <div className='search-me'>
            <input type="text" placeholder='Search Any Image here' value={img} onChange={inputEvent}/>
            <br />
            <div className='image'>
            <Sresult name={img}/>
            </div>

        </div>
    </>);
};
export default Search;