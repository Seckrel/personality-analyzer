import { useLocation, useNavigate } from "react-router-dom";
import { Table } from '@mantine/core';
import { useState } from "react";
import CustomModal from "../ModalComponent";


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
    const navigate = useNavigate();

    const handleGraphView = (e) => {
        setOpened(!opened);
        const indexValue = e.currentTarget.getAttribute("data-attribute");
        setChartData(state.data[indexValue]);
    }

    if (state === null) return (
        <div>
            Please go back and add some files
            <button onClick={() => navigate("/")}>Go back</button>
        </div>
    )
    return (
        <>
            <Table highlightOnHover="true" horizontalSpacing="xs" verticalSpacing="md" fontSize="sm">
                <TableHead heads={state.columns} />
                <TableBody data={state.data}
                    handleGraphView={handleGraphView}
                />
            </Table>
            {opened && (<CustomModal
                opened={opened}
                setOpened={setOpened}
                charData={charData}
            />)}
        </>
    )
}