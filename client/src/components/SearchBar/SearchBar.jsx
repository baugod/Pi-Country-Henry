import React, { useState } from "react";
import './SearchBar.Style.css'

const SearchBar = ({onSearch}) => {
    const [input, setInput] = useState();

    const submitHandler = (e) => {
        onSearch(e);
    };
    return(
        <>
         <div>
            <input type="text" name="text" className="input" placeholder="SEARCH COUNTRY"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              submitHandler(e.target.value);
            }}/>

         </div>
        </>
    )
}

export default SearchBar;