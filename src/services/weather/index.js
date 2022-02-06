import axios from "axios";

export const getWeather = async ( latitude, longitude ) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || "62f9c9eff600b779679a33a0833ddc2a" ;

    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=sp`
    try {
        const response = await axios.get(url)

        return response?.data;

    } catch (error) {
        
        return null
    }
}