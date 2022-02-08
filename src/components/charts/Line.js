import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
let dayjs = require('dayjs')

function Line({ data }) {
    const [options, setOptions] = useState();
    const [series, setSeries] = useState();

    useEffect(() => {

        const dateArray = []
        const dataArray = []
        if (data) {
            data.forEach(element => {
                dateArray.push(element.startTime)
                dataArray.push(element.values?.temperature + "")
            });
        }
        updateOptions(dateArray)
        setSeries([{
            name: "Temperature",
            data: dataArray
        }])
    }, [data]);
    console.log(series)
    const updateOptions = (categories) => {
        setOptions({
            colors: ['#2a9d8f'],
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            grid: {
                show: false,
            },
            /* theme: {
                mode: colorTheme? (colorTheme=== "dark"? "light": "dark" ) : "light",
            }, */
            chart: {
                background: "0",
                type: 'line',
                toolbar: {
                    show: false,
                    offsetX: 25,
                    offsetY: 0,
                    tools: {
                        download: false,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,

                    },
                    zoom: {
                        type: "x",
                        enabled: false,
                        autoScaleYaxis: false
                    },
                    autoSelected: 'nan'
                },
            },
            xaxis: {
                type: "datetime",
                categories: categories,
                position: "bottom",
                labels: {
                    datetimeUTC: false,
                    style:{
                        colors: "#838181"
                    }
                },
            },
            yaxis: {
                title: {
                    text: "Temperature °C"
                },
                labels: {
                    style:{
                        colors: "#838181"
                    }
                },
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                followCursor: true,
                x: {
                    formatter: function (val) {
                        const x = new Date(val)
                        return dayjs(x).format('DD/MM HH:mm')
                    }
                },
                y: {
                    formatter: function (val) {
                        return val+"°"
                    }
                }
            },
        }
        )
    }

    return (
        <div style={{ width: "100%", minHeight: "400px" }}>
            {
                series && options ?
                    <ReactApexChart options={options} series={series} type="line" height={350} />
                    : null
            }
        </div>
    );
}

export default Line;
