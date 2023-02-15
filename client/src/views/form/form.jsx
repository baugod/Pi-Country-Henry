import React, {useState} from "react";
import { useSelector } from "react-redux";
import "./form.style.css"
import { apiPostActivities} from "../../redux/apiPetitions.js";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import validate from "./validate";

export default function Form () {
  const navigate = useNavigate();
  const  countries  = useSelector((state) => state.country.allCountries)
  const [errors, setErrors] = useState({
    allFields: "All fields are required",
  });

    const [newActivity, setNewActivity] = useState({
        name: "",
        duration: "",
        difficulty:"",
        season: "",
        countryId:[],
});

const handleChangeInput= (e) => {
    const { name, value } = e.target;
    setNewActivity({
        ...newActivity,
        [name]: value,
    });
    setErrors(
      validate({
        ...newActivity,
        [e.target.name]: e.target.value,
      })
    );
 };

 const onsubmitnt = (e) => {
  e.preventDefault();
  swal("error", `${Object.values(errors)[0]}`, "error");
 ;}

 function handleSelect(e) {
  setNewActivity({
      ...newActivity,
      countryId: [...newActivity.countryId, e.target.value]
  })
}
function handleDelete(e) {
  setNewActivity({
      ...newActivity,
      countryId: newActivity.countryId.filter(c => c !== e)
  })
}
 
 const submitHandler = async function submitHandler(e) {
    e.preventDefault();
    apiPostActivities(newActivity)
    .then((res)=>{
      swal({
        title: "Successfully created activity!",
        text: "Your activity is already in the country!",
        icon: "success",
        button: "Go to Home!",
      }).then((e) => navigate("/home"));
    })
    .catch((err) => swal("Error!", `${err.response.data}`, "error"));

 };

return (
  <div className="containerBlock">
    <div className="containerForm">
        <form onSubmit={Object.keys(errors).length ? onsubmitnt : submitHandler}>
          <h2>NEW ACTIVITY</h2>
            <label htmlFor="name" className="titlesPost">NAME</label>
            <br/>
            <input 
               className="inputPost"
               type="text"
               id="name"
               name="name"
               value={newActivity.name}
               onChange={handleChangeInput} />
            {errors.name && (
                  <span className="error" >{errors.name} </span> )}
            <br/>
            <p className="titlesPost">DURATION</p>
            <select
              className="inputPost"
              name="duration"
              value={newActivity.duration}
              onChange={handleChangeInput}>
                <option>-----</option>
                <option>less than 15min</option>
                <option>less than 30min</option>
                <option>between 30min and 3hs</option>
                <option>more than 3 hours</option>
                <option>all day</option>
            </select>
            {errors.duration && (
                  <span className="error">{errors.duration} </span>
                )}
            <br/>
            <p className="titlesPost">DIFFICULTY</p>
            <select
              className="inputPost"
              name="difficulty"
              value={newActivity.difficulty}
              onChange={handleChangeInput}>
                <option>-----</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            {errors.difficulty && (
                  <span className="error">{errors.difficulty} </span>
                )}
            <br/>
            <p className="titlesPost">SEASON</p>
            <select
              className="inputPost"
              name="season"
              value={newActivity.season}
              onChange={handleChangeInput}>
                <option>-----</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Fall</option>
                <option>Winter</option>
            </select>
            {errors.season && (
                  <span className="error">{errors.season} </span>
                )}
            <br/>
            <p className="titlesPost">COUNTRY</p>
            <div>
             <select 
             className="inputPost"
             name="countryId"
             value={newActivity.countryId}
             
             onChange={handleSelect} required>
              <option  hidden>SELECT COUNTRY</option>
                {countries.map(e => (
                <option value={e.id} name="countryId" key={e.id} >{e.name}</option>
                ))}
            </select>
            </div>
            <div>
              <ul>
                <li>{newActivity.countryId.map(i => 
                  <div>
                    {i}
                    <button onClick={() => handleDelete(i)} type="button">X</button>
                  </div>)}
                </li>
              </ul>
            </div>
            <br/>
            <button className="buttonSubmit" type="submit">CREATE !</button>
        </form>
    </div>
  </div>
  );
}