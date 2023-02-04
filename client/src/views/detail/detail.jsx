import {Link, useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../redux/axios";

export default function DetailCountry() {
 const { id } = useParams();
 const [country, setCountry] = useState(null); 
 const navigate = useNavigate();

 console.log(country);

 useEffect(()=> {
  axios
     .get(`http://localhost:3001/country/id/${id}`)
     .then((e)=> setCountry(e.data[0]))
     .catch((err) => { return err })
    }, [id, navigate]);
    
   // console.log(e.data[0])

 return (
        <>
        <div>
            <button>
                <Link to="/home">Go to home!</Link>
            </button>

            <div>
                <div>
                    <img src={country?.flags} alt="" />
                </div>
                <div>
                     <h1>{country?.name}</h1>
                    <div>
                    <h4>
                        Continent: <span>{country?.region}</span>
                    </h4> 
                    <h4>
                        Sub Region: <span>{country?.subregion}</span>
                    </h4>
                    <h4>
                        Capital: <span>{country?.capital}</span>
                    </h4>
                    <h4>
                        Area:{""} <span>{new Intl.NumberFormat().format(country?.area)}</span>
                    </h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
