import { Group, Text, useMantineTheme, Stack, Title } from '@mantine/core';
import { Upload, Photo, X, Icon as TablerIcon } from 'tabler-icons-react';
import { PDF_MIME_TYPE, FullScreenDropzone } from '@mantine/dropzone';
import { useState, useEffect } from 'react';
import { maxCheck, filterRedundancy } from '../utils/validators';
import ListFiles from './ListFilesComponent';

function getIconColor(status, theme) {
    return status.accepted
        ? theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
        : status.rejected
            ? theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]
            : theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7];
}


function ImageUploadIcon({
    status,
    ...props
}) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    if (status.rejected) {
        return <X {...props} />;
    }

    return <Photo {...props} />;
}

const dropzoneChildren = (status, theme) => (
    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

        <div>
            <Text size="xl" inline>
                Drag resume here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like (only PDF)
            </Text>
        </div>
    </Group>
);


export default function CustomizedDZ() {
    const MAX_SIZE_MB = 5;
    const MAX_SIZE = MAX_SIZE_MB * 1000 ** 2; // in bytes (1 Kb = 1000 bytes);
    const theme = useMantineTheme();
    const [state, setState] = useState([]);
    const [currentFiles, setCurrentFiles] = useState([]);
    const [error, setError] = useState({
        flag: false,
        msg: ""
    })

    useEffect(() => {
        let tempFilesList = [...currentFiles, ...state];
        if (maxCheck(tempFilesList, MAX_SIZE)) {
            setError(error => ({
                ...error,
                flag: true,
                msg: `Total File Sizes Must Be less than ${MAX_SIZE / (1000 ** 2)} MB`
            }));
            return;
        } else setError({ flag: false, msg: "" })
        tempFilesList = filterRedundancy(tempFilesList);
        setState([...tempFilesList]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFiles])


    return (
        <Stack align={"center"} sx={{ height: "100%" }}>
            <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                <Photo size={80} />
                {state.length === 0 ? (
                    <div>
                        <Text size="xl" inline>
                            Drag resume here or click to select files
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Attach as many files as you like (only PDF)
                        </Text>
                    </div>
                ): (
                    <div>
                        <Text size='xl' inline>
                            Add More
                        </Text>
                    </div>
                )}

            </Group>
            <FullScreenDropzone
                onDrop={(files) => setCurrentFiles(files)}
                accept={PDF_MIME_TYPE}
            >
                {(status) => dropzoneChildren(status, theme)}
            </FullScreenDropzone>
            {error.flag && (
                <Text sx={theme => ({ color: theme.colors.red[4], display: 'flex', alignItems: "center" })} size={'xl'}>
                    <X size={20} ml={2} />{error.msg}
                </Text>
            )}
            {state.length > 0 &&
                (<ListFiles
                    files={state}
                />)}
        </Stack>
    )
}