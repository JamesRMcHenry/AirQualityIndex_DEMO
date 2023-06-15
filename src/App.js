import React, {useState} from 'react';
import CitySearch from './CitySearch';
import 'bootstrap/dist/css/bootstrap.min.css';
import PollutantInfo from './PollutantInfo';
import AirQualityLevelsTable from './AirQualityLevelsTable';
import AirQualityCard from './AirQualityCard';
import './App.css';

function App() {
const [airQualityData, setAirQualityData] = useState(null)
const [error, setError] = useState(null)


  const getAirQuality = async (city) => {
    try {
      const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`)
      const data = await response.json()
      console.log(data)
      if(response.ok && data.status === 'ok') {
        setAirQualityData(data.data)
        setError(null)
      } else {
        setError("Sorry. We couldn't find the city you were looking for. Please check your spelling or try another location.")
        setAirQualityData(null)
      }
    } catch (error) {
      console.error("network error:", error)
        setError('Something went wrong...')
        setAirQualityData(null)
    }
  }
  return (
    <div className='container'>
    <h1 className='mt-5 mb-3'>Air Quality Index Checker</h1>
    <CitySearch getAirQuality={getAirQuality}/>
    {error && (
      <div class='alert alert-danger' role='alert'>{error}</div>
    )}
    {airQualityData && (
      <>
      <AirQualityCard data={airQualityData}/>
      <PollutantInfo pollutant={airQualityData.dominentpol}/>
      </>
    )}
 
    <AirQualityLevelsTable />
    </div>
  );
}

export default App;
