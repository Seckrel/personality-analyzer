import {
    Modal, Button, Box, Group,
    UnstyledButton, Text,
    Center, createStyles
} from "@mantine/core";
import { useState } from 'react';
import SpiderGraph from "./SpiderGraphComponent";
import { ArrowBigLeftLine, ArrowBigRightLine, ChartBar, ChartDonut4 } from 'tabler-icons-react';
import BarGraph from "./BarGraphComponent";

const useStyles = createStyles((theme, isBarGraph) => ({
    control: {
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        backgroundColor: isBarGraph ? theme.colors.yellow[0] : theme.colors.grape[0],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 1000,
        paddingLeft: theme.spacing.sm,
        paddingRight: 4,
        width: 136,
        height: 36,
    },

    iconWrapper: {
        height: 28,
        width: 28,
        borderRadius: 28,
        backgroundColor: !isBarGraph ? theme.colors.yellow[4] : theme.colors.grape[4],
        color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
    },

    value: {
        lineHeight: 1,
        color: theme.colors.gray[8]
    },
}));


const ToggleBarPAC = ({ isBarGraph, setIsBarGraph }) => {
    const Icon = isBarGraph ? ChartBar : ChartDonut4;
    const { classes } = useStyles(isBarGraph);
    return (
        <Group position="center" my="xs">
            <UnstyledButton
                aria-label="Toggle theme"
                className={classes.control}
                onClick={() => setIsBarGraph(!isBarGraph)}
                title="Click to toggle Graph"
            >
                <Text size="sm" className={classes.value}>
                    {isBarGraph ? "Bar" : "Spider"} Graph
                </Text>
                <Center className={classes.iconWrapper}>
                    <Icon size={18} />
                </Center>
            </UnstyledButton>
        </Group>
    )
}

export default function CustomModal({ opened, setOpened, charData }) {
    const [isBarGraph, setIsBarGraph] = useState(false);

    return (
        <Modal
            overflow="inside"
            opened={opened}
            centered
            size={"lg"}
            overlayBlur={1.2}
            overlayOpacity={0.05}
            onClose={() => setOpened(false)}
            title={<ToggleBarPAC
                isBarGraph={isBarGraph}
                setIsBarGraph={setIsBarGraph}
            />}
        >
            {/* <Box width={"580px"} height={"580px"}> */}
            {!isBarGraph ? (
                <>
                    {/* <Box sx={{ display: "flex", justifyContent: "right" }} style={classes.button}>
                        <Button onClick={() => setIsBarGraph(true)}>
                            Bar
                            <ArrowBigRightLine
                                size={25}
                                strokeWidth={2}
                            />
                        </Button>
                    </Box> */}
                    <SpiderGraph
                        charData={charData}
                    />
                </>
            ) : (
                <>
                    {/* <Box sx={{ display: "flex", justifyContent: "left" }} style={classes.button}>
                        <Button onClick={() => setIsBarGraph(false)}>
                            <ArrowBigLeftLine
                                size={25}
                                strokeWidth={2}
                            />
                            Polar Graph
                        </Button>
                    </Box> */}
                    <BarGraph
                        charData={charData}
                    />
                </>
            )}
            {/* </Box> */}
        </Modal >
    )
}