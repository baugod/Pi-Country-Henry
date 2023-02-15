import { useDispatch } from 'react-redux';
import { sortByAsc, sortByPop } from '../../redux/countrySlice';
import "./selects.Style.css";
export default function Sort(){
    const dispatch = useDispatch();

    function handleChangeSortAsc(e){
        dispatch(sortByAsc(e.target.value))
    }
    function handleChangeSortPop(e){
        dispatch(sortByPop(e.target.value))
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
                <select className='selectStyle' onChange={handleChangeSortPop}>
                    <option value='all'>POPULATION</option>
                    <option value='des'>MAX - MIN</option>
                    <option value='asc'>MIN - MAX</option>
                </select>
            </div>
        </div>
        </>
    );
}