import React from "react";
import "./selects.Style.css";

const FilterActivity = ({ onSelect }) => {
    const selectHandler = (e) => {
        const season = e.target.value;
        e.preventDefault();
        onSelect(season);
    };

    return (
        <select className="selectStyle" onChange={selectHandler}>
          <option className="option" value=''>SEASON ACTIVITIES</option>
         <option className="option" value="Spring">
            SPRING
          </option>
          <option className="option" value="Summer">
            SUMMER
          </option>
          <option className="option" value="Fall">
            FALL
          </option>
          <option className="option" value="Winter">
            WINTER
          </option>
          
        </select>
      );
}

export default FilterActivity;