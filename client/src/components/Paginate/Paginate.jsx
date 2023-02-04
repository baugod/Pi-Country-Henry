import React, { useState } from "react";
import "./Paginate.Style.css";

const Paginate = ({ page, setPage, max }) => {
  const [input, setInput] = useState(1);
 
  const nextPage = ()=>{
    setInput(input+1)
    setPage(page+1)}

  const backPage = ()=>{
        setInput(input-1)
        setPage(page-1)
  }

  const onKeyDown=(e)=>{
    if(e.keyCode===13){
        setPage(parseInt(e.target.value))
        if(parseInt(e.target.value)<1||parseInt(e.target.value)>Math.ceil(max)|| isNaN(parseInt(e.target.value))){
            setPage(1)
            setInput(1)
        }else{
            setPage(parseInt(e.target.value))
        }
    }
  }
  const onChange=(e)=>{
    setInput(e.target.value)
  }
  return (
    <div className="container">
      <button disabled={page===1||page<1} className="prevB"
      onClick={backPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <input onChange={onChange} onKeyDown={e=>onKeyDown(e)} name="page" value={input} autoComplete="off" className="inputC" />
      <p>DE {Math.round(max)}</p>
      <button className="nextB"
      disabled={page===max||page>max}
      onClick={nextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          width={16}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Paginate;
