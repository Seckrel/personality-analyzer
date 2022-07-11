import { useMemo, useCallback } from "react"
import { Bar } from "react-chartjs-2";

export default function BarGraph({ charData }) {
    const convertOneDToTwoD = useMemo(() => {
        const arr = []
        const slicedCharData = charData.slice(1, 9);
        for (let i = 0; i < slicedCharData.length; i += 2)
            arr.push([slicedCharData[i], slicedCharData[i + 1]]);
        return arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
    }, [charData]);

    console.log(convertOneDToTwoD)
    const data = {
        labels: ["I/E", "N/S", "T/F", "J/P"],
        datasets: [
            {
                label: ["I", "N", "T", "J"],
                backgroundColor: "rgba(153, 102, 255, 0.5)",
                data: convertOneDToTwoD[0]
            },
            {
                label: "REd",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
                data: convertOneDToTwoD[1]
            },
            // {
            //     label: "purple",
            //     backgroundColor: "purple",
            //     data: convertOneDToTwoD[2]
            // },
            // {
            //     label: "orange",
            //     backgroundColor: "orange",
            //     data: convertOneDToTwoD[4]
            // }
        ]
    }
    return (
        <>
            <Bar 
                data={data}
            />
        </>
    )
}