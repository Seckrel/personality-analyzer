import { Footer, Text } from "@mantine/core"

export default function CustomizedFooter() {
    return (
        <Footer height={60} p="md" sx={{ position: 'absolute', bottom: 0 }}>
            <Text>Footer</Text>
        </Footer>
    )
}