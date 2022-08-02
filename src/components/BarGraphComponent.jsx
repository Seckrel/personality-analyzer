import { useMemo } from "react"
import { Bar } from "react-chartjs-2";
import React from 'react';

function BarGraph({ charData }) {
    const trasposeData = useMemo(() => {
        const arr = []
        const slicedCharData = charData.slice(1, 9);
        for (let i = 0; i < slicedCharData.length; i += 2)
            arr.push([slicedCharData[i], slicedCharData[i + 1]]);
        return arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
    }, [charData]);

    const tooltipLabels = useMemo(() => ([
        ["Introvert",
            "Extrovert"],
        ["Intution",
            "Sensing"],
        ["Thinking",
            "Feeling"],
        ["Judging",
            "Perceiving"],
    ]), []);

    const data = useMemo(() => ({
        labels: ["I/E", "N/S", "T/F", "J/P"],
        datasets: [
            {
                label: "I/N/T/J",
                backgroundColor: "rgba(153, 102, 255, 0.5)",
                data: trasposeData[0]
            },
            {
                label: "E/S/F/P",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                data: trasposeData[1]
            },
        ]
    }), [trasposeData]);

    const options = useMemo(() => ({
        animation: {
            duration: 900
        },
        font: {
            size: 20
        },
        scales: {
            y: {
                min: 0,
                max: 100
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (ctx) => {
                        return `${tooltipLabels[ctx.dataIndex][ctx.datasetIndex]} ${(ctx.raw).toFixed(2)}`
                    }
                }
            },
            legend: {
                position: "bottom",
                autoPadding: true,
                title: {
                    display: true,
                    text: `${charData[charData?.length - 1]}`,
                    color: "white"
                }
            },
        }
    }
    ), [charData, tooltipLabels]);
    return (
        <Bar
            data={data}
            options={options}
        />
    )
};

export default React.memo(BarGraph);