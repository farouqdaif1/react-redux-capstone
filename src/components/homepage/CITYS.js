import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getDataCity } from '../../redux/Homepage/home';
import egypt from '../image/resize.jpg';

const CITYS = () => {
  const dispatch = useDispatch();
  const governorates = ['Cairo', 'Alexandria', 'Aswan', 'Asyut', 'Damietta', 'Giza', 'Ismailia', 'Luxor', 'Suez', 'Sohag', 'Qena', 'Minya'];
  return (
    <div className="container">
      <Link to="/">
        <div className="map"><img src={egypt} alt="egypt" /></div>
      </Link>
      <div className="buttons">

        {governorates.map((governorate) => (
          <Link className="link" key={uuid()} to="/details">
            <div
              className="town"
              id={governorate}
              onClick={() => { dispatch(getDataCity(`${governorate}`)); }}
              role="button"
              tabIndex={0}
              onKeyDown={() => { dispatch(getDataCity(`${governorate}`)); }}
            >
              {governorate}
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};
export default CITYS;
