import { useLocation } from "react-router-dom";
import { Table } from '@mantine/core';
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

const TableBody = ({ data, handleGraphView }) => (
    <tbody>
        {data.map((datum, index) => (
            <tr
                key={`${index}-${datum[0]}`} r
                data-attribute={index}
                style={{ cursor: "pointer" }}
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
    const [opened, setOpened] = useState(false);
    const [charData, setChartData] = useState(null);

    const handleGraphView = (e) => {
        setOpened(!opened);
        const indexValue = e.currentTarget.getAttribute("data-attribute");
        setChartData(state.data[indexValue]);
    }

    return (
        <>
            <Table highlightOnHover="true" horizontalSpacing="xs" verticalSpacing="md" fontSize="sm">
                <TableHead heads={state.columns} />
                <TableBody data={state.data}
                    handleGraphView={handleGraphView}
                />
            </Table>
            <PAModal
                opened={opened}
                setOpened={setOpened}
                charData={charData}
            />
        </>
    )
}