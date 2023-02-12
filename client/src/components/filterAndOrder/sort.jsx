import { useDispatch } from 'react-redux';
import { sortByAsc } from '../../redux/countrySlice';
import "./selects.Style.css";
export default function Sort(){
    const dispatch = useDispatch();

    function handleChangeSortAsc(e){
        dispatch(sortByAsc(e.target.value))
    }
   

    return (
        <>
        <div>
            <div>
                <select className='selectStyle' onChange={handleChangeSortAsc}>
                    <option value='all'>ALPHABETICAL</option>
                    <option value='asc'>A-Z</option>
                    <option value='des'>Z-A</option>
                </select>
            </div>
        </div>
        </>
    );
}