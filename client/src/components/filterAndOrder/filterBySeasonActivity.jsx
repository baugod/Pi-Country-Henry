import React from "react";

const FilterActivity = ({ onSelect }) => {
    const selectHandler = (e) => {
        const season = e.target.value;
        e.preventDefault();
        onSelect(season);
    };

    return (
        <select onChange={selectHandler}>
          <option className="option" value=''>Filter by Season Activities</option>
          <option className="option" value="VERANO">
            Verano
          </option>
          <option className="option" value="OTOÑO">
            Otoño
          </option>
          <option className="option" value="INVIERNO">
            Invierno
          </option>
          <option className="option" value="PRIMAVERA">
            Primavera
          </option>
          
        </select>
      );
}

export default FilterActivity;