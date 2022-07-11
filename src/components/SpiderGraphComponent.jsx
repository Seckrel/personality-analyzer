import { useMemo } from "react"
import { PolarArea } from 'react-chartjs-2';


export default function SpiderGraph({ charData }) {
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
            data: charData.slice(1, 8),
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
    }), [charData[charData?.length - 1]]);

    const options = useMemo(() => ({
        animation: {
            duration: 1000
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
    }), []);


    return (
        <PolarArea 
            data={data}
            options={options}
        />
    )
}