import { Modal, Button, Box } from "@mantine/core";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';
import { useState } from 'react';
import SpiderGraph from "./SpiderGraphComponent";
import { ArrowBigLeftLine, ArrowBigRightLine } from 'tabler-icons-react';
import BarGraph from "./BarGraphComponent";


ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function CustomModal({ opened, setOpened, charData }) {
    const [isBarGraph, setIsBarGraph] = useState(false);

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
        >
            {!isBarGraph ? (
                <>
                    <Box sx={{ display: "flex", justifyContent: "right" }}>
                        <Button onClick={() => setIsBarGraph(true)}>
                            Bar
                            <ArrowBigRightLine
                                size={25}
                                strokeWidth={2}
                            />
                        </Button>
                    </Box>
                    <SpiderGraph
                        charData={charData}
                    />
                </>
            ) : (
                <>
                    <Button onClick={() => setIsBarGraph(false)}>
                        <ArrowBigLeftLine
                            size={25}
                            strokeWidth={2}
                        />
                        Polar Graph
                    </Button>
                    <BarGraph
                        charData={charData}
                    />
                </>
            )
            }
        </Modal >

    )
}