import { useNavigate } from "react-router-dom";
import {
  Table,
  Notification,
  ScrollArea,
  Button,
  Box,
  Text,
  Pagination,
} from "@mantine/core";
import { useState, useMemo } from "react";
import CustomModal from "../ModalComponent";
import { X } from "tabler-icons-react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import React from "react";
import { arrayRange } from "../../utils/table.utils";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const TableHead = ({ heads }) => {
  return (
    <thead>
      <tr>
        {heads.map((head) => (
          <th key={head}>
            <Text transform="capitalize" inline>
              {head}
            </Text>
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ data, handleGraphView, displayRange }) => (
  <tbody>
    {arrayRange(data, displayRange.start, displayRange.end).map(
      (datum, index) => (
        <tr
        className={"tooltip"}
          key={`${index}-${datum[0]}`}
          data-attribute={index}
          style={{ cursor: "pointer" }}
          onClick={handleGraphView}
        >
          {datum.map((item, index) => (
            <td key={`${index}+${item}`}>{item}</td>
          ))}
        </tr>
      )
    )}
  </tbody>
);

const SIZE_PER_PAGE = 10;

function ResumeAnalysis() {
  // const { state } = useLocation();
  const state = JSON.parse(localStorage.getItem("data"));
  const [opened, setOpened] = useState(false);
  const [charData, setChartData] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const paginationData = useMemo(
    () => ({
      total: Math.ceil(state.data.length / SIZE_PER_PAGE),
      initial: 1,
      boundaries: 1,
    }),
    [state]
  );

  const displayRecordsIndexes = useMemo(
    () => ({
      start: SIZE_PER_PAGE * activePage - SIZE_PER_PAGE,
      end:
        SIZE_PER_PAGE * activePage < state.data.length
          ? SIZE_PER_PAGE * activePage
          : state.data.length,
    }),
    [activePage, state]
  );

  const navigate = useNavigate();

  const handleGraphView = (e) => {
    setOpened(!opened);
    const indexValue = e.currentTarget.getAttribute("data-attribute");
    setChartData(state.data[indexValue]);
  };

  if (state === null)
    return (
      <Notification color={"red"} icon={<X size={18} />}>
        <div style={{ display: "flex" }}>
          <Text sx={{ lineHeight: 2 }}>Please go back and add some files</Text>
          <Button
            ml={"auto"}
            sx={{ display: "block" }}
            color={"red"}
            onClick={() => navigate("/")}
          >
            Go back
          </Button>
        </div>
      </Notification>
    );
  return (
    <>
      <ScrollArea style={{ height: "620px" }}>
        <Table
          highlightOnHover="true"
          horizontalSpacing="xs"
          verticalSpacing="md"
          fontSize="sm"
        >
          <TableHead heads={state.columns} />
          <TableBody
            data={state.data}
            handleGraphView={handleGraphView}
            displayRange={displayRecordsIndexes}
          />
        </Table>
        {opened && (
          <CustomModal
            opened={opened}
            setOpened={setOpened}
            charData={charData}
          />
        )}
      </ScrollArea>
      <Pagination
        total={paginationData.total}
        boundaries={paginationData.boundaries}
        page={activePage}
        onChange={setActivePage}
        position={"right"}
        mt={2}
        size={"md"}
        radius="md"
      />
    </>
  );
}

export default React.memo(ResumeAnalysis);
