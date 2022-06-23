import { Container, Group } from "@mantine/core"
import CustomizedDZ from "../DropZoneComponent"

export default function Home() {
    return (
        <Container
            fluid
            px={'xl'}
            sx={{ height: "100%", overflow:"auto" }}
        >
            <Group
                position="center"
                align={"center"}
                sx={{ height: "100%" }}
            >
                <CustomizedDZ />
            </Group>
        </Container>
    )
}