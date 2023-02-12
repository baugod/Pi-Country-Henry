import React, {useState} from "react";
import "./form.style.css"
import { apiPostActivities} from "../../redux/apiPetitions.js";

export default function Form () {
    const [action, setNewActivity] = useState({
        name: "",
        duration: "",
        difficulty:"",
        season: "",
        countryId:[],
    });

const handleChangeInput= (e) => {
    const { name, value } = e.target;
    setNewActivity({
        ...action,
        [name]: value,
    });
 };

 const submitHandler = async function submitHandler(e) {
    e.preventDefault();

    alert('The activity has been created successfully')

    apiPostActivities(action);
 };

return (
  <div className="containerBlock">
    <div className="containerForm">
        <form onSubmit={submitHandler}>
          <h2>NEW ACTIVITY</h2>
            <label htmlFor="name" className="titlesPost">NAME</label>
            <br/>
            <input 
               className="inputPost"
               type="text"
               id="name"
               name="name"
               value={action.name}
               onChange={handleChangeInput} />
            
            <br/>
            <p className="titlesPost">DURATION</p>
            <select
              className="inputPost"
              name="duration"
              value={action.duration}
              onChange={handleChangeInput}>
                <option>------</option>
                <option>less than 15min</option>
                <option>less than 30min</option>
                <option>between 30min and 3hs</option>
                <option>more than 3 hours</option>
                <option>all day</option>
            </select>
            <br/>
            <p className="titlesPost">DIFFICULTY</p>
            <select
              className="inputPost"
              name="difficulty"
              value={action.difficulty}
              onChange={handleChangeInput}>
                <option>------</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <br/>
            <p className="titlesPost">SEASON</p>
            <select
              className="inputPost"
              name="season"
              value={action.season}
              onChange={handleChangeInput}>
                <option>------</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
            </select>
            <br/>
            <p className="titlesPost">COUNTRY</p>
            <input 
               className="inputPost"
               type="text"
               id="CountryId"
               name="countryId"
               value={action.countryId}
               onChange={handleChangeInput} />
            <br/>
            <button className="buttonSubmit" type="submit">CREATE !</button>
        </form>
    </div>
  </div>
  );
}