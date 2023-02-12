import Cards from "../../components/Cards/Cards.jsx";
import FilterActivity from "../../components/filterAndOrder/filterBySeasonActivity.jsx";
import { apiCountryByActivity, apiCountryByRegion } from "../../redux/apiPetitions.js";
import { useDispatch } from "react-redux";
import Sort from "../../components/filterAndOrder/sort.jsx";
//import FilterContinent from "../../components/filterAndOrder/filterByContinent.jsx";
import FilterContinents from "../../components/filterAndOrder/filterByContinent.jsx";
import "./home.Style.css";



export default function Home() {
  const dispatch = useDispatch();
  
  const getActivityBySeason = async (season) => {
    apiCountryByActivity(dispatch, season);
  };
  const getCountryByRegion = async (countryRegion) => {
    apiCountryByRegion(dispatch, countryRegion);
  };

    return (
        <>
        <div>
          <div className="containerFyS">
            <div>
            <h3 className="titleSyF">ORDER FROM: </h3>
            <Sort />
            </div>
             <div>
            <h3 className="titleSyF">FILTER BY: </h3>
            <FilterActivity onSelect={getActivityBySeason} />
            <FilterContinents onSelect={getCountryByRegion}/>
            </div>
          </div>
          <div>
            <Cards />
          </div>
        </div>
        </>
    );
}