import { Modal } from "@mantine/core";
import { PolarArea } from 'react-chartjs-2';


export default function PAModal({ opened, setOpened, charData }) {
    const label = [
        "Introvert",
        "Extrovert",
        "Intution",
        "Sensing",
        "Thinking",
        "Feeling",
        "Judging",
        "Perceiving",
    ]
    const data = {
        labels: label,
        datasets: [{
            data: charData.slice(1, 8)
        }]
    }
    return (
        // <Modal
        //     opened={opened}
        //     onClose={() => setOpened(false)}
        //     title="Introduce yourself!"
        // >
            <PolarArea 
                data={data}
            />
        // </Modal>

    )
}