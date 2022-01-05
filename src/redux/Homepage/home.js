const GET_CITY = 'GET_CITY';
const initialState = {};

// Actions
export const getDataCity = (city) => async (dispatch) => {
  const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},eg&appid=31d29095c3d89a9902937f33a45eb282`);
  const Data = await req.json();
  const cityData = Data.weather[0];
  cityData.temp = Data.main.temp;
  cityData.humidity = Data.main.humidity;
  cityData.pressure = Data.main.pressure;
  cityData.name = Data.name;

  dispatch({
    type: GET_CITY,
    cityData,
  });
};
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY:
      return action.cityData;
    default:
      return state;
  }
};
export default reducer;
