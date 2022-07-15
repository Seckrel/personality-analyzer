import { Stack, Paper, Text, Title, ActionIcon, Group } from '@mantine/core';
import { X } from 'tabler-icons-react';

export default function ListFiles({ files, removeFile }) {
    return (
        <Stack spacing="lg"
            align={"center"}
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300,
                width: "100%"
            })}>
            <Text underline mb={'xl'}>
                <Title order={1}>Uploaded Files</Title>
            </Text>
            {files.map((file, idx) => (
                <Paper key={file.name}
                    sx={theme => ({ width: "100%", padding: theme.spacing.md })}>
                    <Group grow>
                        <Text size={'xl'} align="center">
                            {file.name}
                        </Text>
                        <ActionIcon
                            color={"red"}
                        >
                            <X />
                        </ActionIcon>
                    </Group>
                </Paper>
            ))}
        </Stack>
    )
}