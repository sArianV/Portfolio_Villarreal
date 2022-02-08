import React, { useReducer } from 'react';
import { getExtendedWeather, getWeather } from '../../services/weather';
import WeatherContext from './weatherContext';
import weatherReducer from './weatherReducer';


const GiveawayState = props => {
    
    const initialState = {
        weather : null,
        location: null,
    }

    const [ state, dispatch ] = useReducer(weatherReducer, initialState);

    const setLocation = async (latitude, longitude) => {
        try {
            dispatch({
                type: "SET_LOCATION",
                payload: {
                    location:[ latitude, longitude]
                }
            });
            return true;
        } catch (error) {
            const alert = {
                msg: error,
                categoria: 'error'
            }            
            return(error)
        }
    }

    const getActualWeather = async ( latitude, longitude ) => {
        
        try {
            const response = await getWeather(latitude, longitude)
            dispatch({
                type: "GET_CURRENT_WEATHER",
                payload: response
            });
            return response        
        } catch (error) {
            const alert = {
                msg: error,
                categoria: 'error'
            }            
            return(error)
        }
    }

    const getExtendedWeather = async ( latitude, longitude ) => {
    }


    
    
    return(
        <WeatherContext.Provider
            value={{
                giveaways: state.giveaways,
                location: state.location,              
                getActualWeather,
                setLocation 
            }}
        >{props.children}

        </WeatherContext.Provider>
    )
}
export default GiveawayState;
