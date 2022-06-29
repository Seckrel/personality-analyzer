import { useLocation } from "react-router-dom";
import { Table } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useState } from "react";
import PAModal from "../PACModalComponent";


const TableHead = ({ heads }) => (
    <thead>
        <tr>
            {heads.map(head => (
                <th key={head}>{head}</th>
            ))}
        </tr>
    </thead>
)

const TableBody = ({ data, reference, hovered, handleGraphView }) => (
    <tbody>
        {data.map((datum, index) => (
            <tr
                key={`${index}-${datum[0]}`} r
                ref={reference}
                data-attribute={index}
                style={{ cursor: hovered ? "pointer" : null }}
                onClick={handleGraphView}
            >
                {datum.map((item, index) => (
                    <td key={`${index}+${item}`}>
                        {item}
                    </td>
                ))}
            </tr>
        ))}
    </tbody>
)

export default function ResumeAnalysis() {
    const { state } = useLocation();
    const { hovered, ref } = useHover();
    const [opened, setOpened] = useState(false);
    const [charData, setChartData] = useState(null);

    const handleGraphView = () => {
        setOpened(!opened);
        const indexValue = ref.current?.getAttribute("data-attribute");
        setChartData(state.data[indexValue]);
    }

    return (
        <>
            <Table highlightOnHover horizontalSpacing="xs" verticalSpacing="md" fontSize="sm">
                <TableHead heads={state.columns} />
                <TableBody data={state.data}
                    reference={ref}
                    hovered={hovered}
                    handleGraphView={handleGraphView}
                />
            </Table>
            {opened && (
                <PAModal
                    opened={opened}
                    setOpened={setOpened}
                    charData={charData}
                />
            )}
        </>
    )
}