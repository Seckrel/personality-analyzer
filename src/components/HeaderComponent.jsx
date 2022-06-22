import { Header, Text } from "@mantine/core"

export default function CutomizedHeader() {
    return (
        <Header height={70} p="md" sx={{ top: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Text>Application header</Text>
            </div>
        </Header>
    )
}