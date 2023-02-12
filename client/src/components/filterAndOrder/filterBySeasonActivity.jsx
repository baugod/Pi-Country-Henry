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
         <option className="option" value="SPRING">
            SPRING
          </option>
          <option className="option" value="SUMMER">
            SUMMER
          </option>
          <option className="option" value="FALL">
            FALL
          </option>
          <option className="option" value="WINTER">
            WINTER
          </option>
          
        </select>
      );
}

export default FilterActivity;