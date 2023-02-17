import { FC, useState } from 'react';

const params = {
  key: '61cf600f5c31495085a145029231602',
  q: 'Moscow',
};
const url = `http://api.weatherapi.com/v1/current.json?key=${params.key}&q=${params.q}&aqi=no`;

interface WeatherData {
  current: {
    temp_c: number;
    wind_mph: number;
    last_updated: string;
    pressure_mb: number;
    condition: {
      code: number;
      icon: string;
      text: string;
    };
  };
  location: {
    country: string;
    region: string;
    localtime: string;
  };
}

export const Weather: FC = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [error, setError] = useState('');

  // useEffect(() => {
  //     getFetchWeather();
  // }, [])

  const getFetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${url}?${params}`);
      const data: WeatherData = await res.json();
      setWeatherData(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={getFetchWeather}>Loading Weather</button>
      <div>Weather:</div>
      <div>
        Location:
        {loading && <div>Loading...</div>}
        {weatherData && (
          <ul>
            <li>{weatherData.location.country}</li>
            <li>{weatherData.location.region}</li>
            <li>{weatherData.location.localtime}</li>
          </ul>
        )}
      </div>
      <div>
        Current weather:
        {loading && <div>Loading...</div>}
        {weatherData && (
          <ul>
            <li>{weatherData.current.temp_c}</li>
            <li>{weatherData.current.wind_mph}</li>
            <li>{weatherData.current.pressure_mb}</li>
            <li>{weatherData.current.last_updated}</li>
            <li>{weatherData.current.condition.code}</li>
            <li>{weatherData.current.condition.text}</li>
            <li>
              <img src={weatherData.current.condition.icon} alt="icon" />
            </li>
          </ul>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
};
