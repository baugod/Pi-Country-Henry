import React from "react";

const FilterRegion = ({ onSelect }) => {
    const selectHandler = (e) => {
        const regionName = e.target.value;
        e.preventDefault();
        onSelect(regionName);
    };

    return (
        <select onChange={selectHandler}>
            <option className="option" value=''>Filter by Region</option>
            <option className="option" value='afr'>AFRICA</option>
            <option className="option" value="ame">AMERICA</option>
            <option className="option" value="asi">ASIA</option>
            <option className="option" value="eur">EUROPA</option>
            <option className="option" value="ocea">OCEANÍA</option>
        </select>
    );
};

export default FilterRegion;