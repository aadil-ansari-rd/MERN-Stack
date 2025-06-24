import TextField from '@mui/material/TextField';
import "./SearchBox.css";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';



const SearchBox = ({ updateInfo }) => {

    let [city, setCity] = useState("")
    let [error, setError] = useState(false);
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const W_API_KEY = 'fc02e6d89d0f362fcd0da0568f571182'

    let getWeatherInfo = async () => {
        try {
            // let response =await fetch(`${API_URL}?q=${city}&appid=${W_API_KEY}`)
            let response = await fetch(`${API_URL}?q=${city}&appid=${W_API_KEY}&units=metric`) //It will show in metric units
            let JsonResponse = await response.json();
            // console.log(JsonResponse);
            let result = {
                city: city,
                temp: JsonResponse.main.temp,
                tempMin: JsonResponse.main.temp_min,
                tempMax: JsonResponse.main.temp_max,
                humidity: JsonResponse.main.humidity,
                feels_like: JsonResponse.main.feels_like,
                weather: JsonResponse.weather[0].description,
            }
            console.log(result)
            return result;
        } catch (err) {
            throw error ;
        }

    }

    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            let newData = await getWeatherInfo();
            updateInfo(newData);
            setCity("");
            setError(false)
        } catch (err) {
            setError(true);
        }
    }



    const handleChange = (event) => {
        setCity(event.target.value);
    }

    return (
        <div className='SearchBox'>

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" size="small" variant="outlined" required value={city} onChange={handleChange} />
                &nbsp; &nbsp; &nbsp;

                <Button variant="contained" type='submit' size="large" endIcon={<SendIcon />}>
                    Search
                </Button>

            </form>
            {
                error && <p style={{color: "red"}}>No such place exists in our records</p>
            }
        </div>
    )
}

export default SearchBox