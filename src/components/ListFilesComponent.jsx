import { Stack, Paper, Text, Title } from '@mantine/core';

export default function ListFiles({ files }) {
    return (
        <Stack spacing="lg" align={"center"} sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300,
            width: "100%"
        })}>
            <Text underline mb={'xl'}>
                <Title order={1}>Uploaded Files</Title>
            </Text>
            {files.map(file => (
                <Paper key={file.name}
                    sx={theme => ({ width: "100%", padding: theme.spacing.md })}>
                    <Text size={'xl'} align="center">
                        {file.name}
                    </Text>
                </Paper>
            ))}
        </Stack>
    )
}