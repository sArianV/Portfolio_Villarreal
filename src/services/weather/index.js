import axios from "axios";

export const getWeather = async ( latitude, longitude ) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=sp`
    try {
        const response = await axios.get(url)

        return response?.data;

    } catch (error) {
        
        return null
    }
}