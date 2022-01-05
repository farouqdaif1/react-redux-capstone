import citys from './fetchApi';

const fetchingData = () => citys().then((data) => data);

export default fetchingData;
