import React from "react";
import "./selects.Style.css";

const FilterContinents = ({ onSelect }) => {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    e.preventDefault();
    onSelect(regionName);
  };

  return (
    <select className="selectStyle" onChange={selectHandler}>
      <option className="option" value=''>ALL CONTINENTS</option>
      <option className="option" value="Africa">
        AFRICA
      </option>
      <option className="option" value="Americas">
        AMERICAS
      </option>
      <option className="option" value="Asia">
        ASIA
      </option>
      <option className="option" value="Europe">
        EUROPE
      </option>
      <option className="option" value="Oceania">
        OCEANÍA
      </option>
      <option className="option" value="Antarctic">ANTARTIC</option>
    </select>
  );
};

export default FilterContinents;