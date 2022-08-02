import { useMemo } from "react"
import { PolarArea } from 'react-chartjs-2';
import React from 'react';


function SpiderGraph({ charData }) {
    const data = useMemo(() => ({
        labels: [
            "Introvert",
            "Extrovert",
            "Intution",
            "Sensing",
            "Thinking",
            "Feeling",
            "Judging",
            "Perceiving",
        ],
        datasets: [{
            label: `Personlaity Type ${charData[charData?.length - 1]}`,
            data: charData.slice(1, 9),
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(43, 159, 64, 0.5)',
                'rgba(43, 23, 64, 0.5)',
            ],
            borderWidth: 0
        }]
    }), [charData]);

    const options = useMemo(() => ({
        // maintainAspectRatio: false,
        animation: {
            duration: 900
        },
        font: {
            size: 20
        },
        plugins: {
            legend: {
                position: "bottom",
                autoPadding: true,
                title: {
                    display: true,
                    text: `${charData[charData?.length - 1]}`,
                    color: "white"
                }
            },
        },
        scales: {
            r: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 15,
                    backdropColor: "rgba(255, 255, 255, 0)",
                    color: "white"
                },
                grid: {
                    color: 'white'
                },
                animate: false
            },
        }
    }), [charData]);


    return (
        <PolarArea
            data={data}
            options={options}
        />
    )
}

export default React.memo(SpiderGraph);