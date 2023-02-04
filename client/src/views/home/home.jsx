import Cards from "../../components/Cards/Cards.jsx";
import Navbar from "../../components/navBar/navBar.jsx";
import FilterRegion from "../../components/filterAndOrder/filterByRegion.jsx";
import FilterActivity from "../../components/filterAndOrder/filterBySeasonActivity.jsx";
import { apiCountryByRegion, apiCountryByActivity } from "../../redux/apiPetitions.js";
import { useDispatch } from "react-redux";




export default function Home() {
  const dispatch = useDispatch();
  const getCountryByRegion = async (countryRegion) =>{
    apiCountryByRegion(dispatch, countryRegion);
  };
  const getActivityBySeason = async (season) => {
    apiCountryByActivity(dispatch, season);
  };

    return (
        <>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <FilterRegion onSearch={getCountryByRegion} />
          </div>
          <div>
            <FilterActivity onSearch={getActivityBySeason} />
          </div>
          <div>
            <Cards />
          </div>
        </div>
        </>
    );
}