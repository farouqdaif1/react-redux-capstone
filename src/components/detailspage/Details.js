/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import {
  WiDaySunny, WiDayThunderstorm, WiDaySnowWind, WiDayRain, WiCloudy, WiDayRainMix,
  WiDayHaze, WiDayFog, WiSmoke, WiTornado, WiCloudyGusts,
} from 'react-icons/wi';

const Details = ({ city }) => {
  const icon = () => {
    switch (city.main) {
      case 'Clear':
        return (<WiDaySunny />);
      case 'Thunderstorm':
        return (<WiDayThunderstorm />);
      case 'Snow':
        return (<WiDaySnowWind />);
      case 'Rain':
        return (<WiDayRain />);
      case 'Clouds':
        return (<WiCloudy />);
      case 'Drizzle':
        return (<WiDayRainMix />);
      case 'Mist':
        return (<WiDayFog />);
      case 'Smoke':
        return (<WiSmoke />);
      case 'Fog':
        return (<WiDayFog />);
      case 'Haze':
        return (<WiDayHaze />);
      case 'Dust':
        return (<WiDayRainMix />);
      case 'Sand':
        return (<WiCloudyGusts />);
      case 'Ash':
        return (<WiCloudyGusts />);
      case 'Squall':
        return (<WiTornado />);
      case 'Tornado':
        return (<WiTornado />);
      default:
        return (<div className="none" />);
    }
  };
  return (
    <div className="weather">
      <h1 className="name">{city.name}</h1>
      <div className="icon">{icon()}</div>
      <h2 className="discraption">{city.description}</h2>
      <h3 className="temp">
        Temp :
        {city.temp}
        {'\u00b0'}
        F
      </h3>
      <div className="others">
        <span className="humidity">
          Humidity :
          {city.humidity}
        </span>
        <span className="pressure">
          Pressure :
          {city.pressure}
        </span>
      </div>

    </div>
  );
};
export default Details;
