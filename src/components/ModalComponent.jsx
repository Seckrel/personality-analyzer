import { Modal, Button, Box, Container } from "@mantine/core";
import { useState } from 'react';
import SpiderGraph from "./SpiderGraphComponent";
import { ArrowBigLeftLine, ArrowBigRightLine } from 'tabler-icons-react';
import BarGraph from "./BarGraphComponent";


export default function CustomModal({ opened, setOpened, charData }) {
    const [isBarGraph, setIsBarGraph] = useState(false);

    const classes = {
        button: {
            marginBottom: "20px"
        }
    }

    return (
        <Modal
            overflow="inside"
            opened={opened}
            centered
            size={"lg"}
            overlayBlur={1.2}
            overlayOpacity={0.05}
            onClose={() => setOpened(false)}
        >
            {/* <Box width={"580px"} height={"580px"}> */}
            {!isBarGraph ? (
                <>
                    <Box sx={{ display: "flex", justifyContent: "right" }} style={classes.button}>
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
                    <Box sx={{ display: "flex", justifyContent: "left" }} style={classes.button}>
                        <Button onClick={() => setIsBarGraph(false)}>
                            <ArrowBigLeftLine
                                size={25}
                                strokeWidth={2}
                            />
                            Polar Graph
                        </Button>
                    </Box>
                    <BarGraph
                        charData={charData}
                    />
                </>
            )}
            {/* </Box> */}
        </Modal >
    )
}