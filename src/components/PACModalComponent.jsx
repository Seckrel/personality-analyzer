import { Modal, Text } from "@mantine/core";
import { PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { useMemo } from 'react';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function PAModal({ opened, setOpened, charData }) {
    const data = {
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
    }

    const options = useMemo(() => ({
        plugins: {
            legend: {
                position: "bottom",
                autoPadding: true
            },
            title: {
                display: true,
                text: "hello",
                position: "top"
            }
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
                }

            }
        }
    }), [])



    return (
        <Modal
            overflow="inside"
            opened={opened}
            centered
            size={"xl"}
            overlayBlur={1.2}
            overlayOpacity={0.05}
            onClose={() => setOpened(false)
            }
            title={`Polar Area Chart for ${charData[0]}`}
        // transition={"scale"}
        // transitionDuration={400}
        >
            <PolarArea
                style={{
                    // backgroundColor: "white"
                }}
                data={data}
                options={options}
            />
            <Text align="center" size="xl" mt={6} pt={6} sx={{ borderTop: "1px solid white" }}>
                {`Personality Type: ${charData[charData?.length - 1]}`}
            </Text>
        </Modal >

    )
}