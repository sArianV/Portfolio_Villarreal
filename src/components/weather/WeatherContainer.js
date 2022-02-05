import React from 'react';

function WeatherContainer(props) {
    const { selectedPosition } = props;
    
  return (
    <div>
        {selectedPosition &&
            <div>
                <p> 
                    // TODO: fetch weather data from weather api of this selected position: 
                </p>

                <p>Latitude: {selectedPosition[0]}</p>
                <p>Longitude: {selectedPosition[1]}</p>
            </div>
        }
    </div>
);
}

export default WeatherContainer;
