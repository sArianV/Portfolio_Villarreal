import axios from "axios";
const API_KEY_OPEN = process.env.REACT_APP_WEATHER_API_KEY || "62f9c9eff600b779679a33a0833ddc2a" ;
const API_KEY_TOMORROW = process.env.REACT_APP_TOMORROW_API_KEY || "lUhCyjFR2mDydgmLgFazg4YNRC08Nzkd"
const prefix = process.env.REACT_APP_Local_Enviroment ? "http" : "https" ;

export const getWeather = async ( latitude, longitude ) => {
    const url = `${prefix}://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OPEN}&units=metric`
    try {
        const response = await axios.get(url)

        return response?.data;

    } catch (error) {
        
        return null
    }
}

export const getExtendedWeather = async ( latitude, longitude ) => {
    const url = `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature&timesteps=1h&units=metric&apikey=${API_KEY_TOMORROW}`
    try {
        const response = await axios.get(url)

        return {
            ok: true,
            data : response?.data?.data?.timelines[0]?.intervals || []
        }
    } catch (error) {
        return {
            ok: false,
            error: "Too many requests in last hour, please try again later"
        }
        
    }
}