import React, {useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {
  
  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState('');
  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=57aaa36109f3417a9ac102120212601&q=shimla').then(data => {
      setWeather(data.data)
      console.log(data.data.current.feelslike_c)
    })
    .catch((err) => console.log(err))
  },[])

const weatherInput = (e) => {
    setInput(e.target.value)
}
const SearchWeather =()=> {
axios.get(`http://api.weatherapi.com/v1/current.json?key=57aaa36109f3417a9ac102120212601&q=${input}`).then(data => {
  setWeather(data.data)
  console.log(data)
})
.catch((err) => alert('Location Not Found.'))
}
  return (
    <div>
      {weather && 
      <>
      <div className="search">
        <input onChange={weatherInput} type="text" />
        <button onClick={SearchWeather}>Search</button>
      </div>
        <div className="weather-info">
        <img src={weather.current.condition.icon} alt="weather icon" />
        <h1>Hi temparature is <span>{weather.current.temp_c}°C</span></h1>
        <h2>Weather outside is {weather.current.condition.text}</h2>
        <h3>& Region is {weather.location.region}</h3>
        </div>
      </>
    }
    </div>
  )
}

export default App
