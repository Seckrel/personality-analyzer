import {
    Group, Text,
    Stack, LoadingOverlay,
} from '@mantine/core';
import { Upload, BrandGoogleAnalytics, Photo, X, NewSection } from 'tabler-icons-react';
import { PDF_MIME_TYPE, FullScreenDropzone, Dropzone } from '@mantine/dropzone';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { maxCheck, filterRedundancy } from '../utils/validators';
import { UploadFiles } from '../utils/api';
import ListFiles from './ListFilesComponent';
import CustomLoader from './LoaderComponent';
import Notify from './NotificationComponent';
import { useRef } from 'react';
import DarkButton from './DarkButtonComponent';

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
    const navigate = useNavigate();

    const [state, setState] = useState([]);
    const [currentFiles, setCurrentFiles] = useState([]);
    const [progress, setProgress] = useState({
        isUploading: false,
        progress: 0
    })
    const dropZoneRef = useRef();

    const [error, setError] = useState({
        error: false,
        errorMsg: "",
    })

    useEffect(() => {
        let tempFilesList = [...currentFiles, ...state];
        if (maxCheck(tempFilesList, MAX_SIZE)) {
            setError(curr => ({
                ...curr,
                error: true,
                errorMsg: `Total File Sizes Must Be less than ${MAX_SIZE / (1000 ** 2)} MB`
            }));
            return;
        } else setError({ error: false, errorMsg: "" })
        tempFilesList = filterRedundancy(tempFilesList);
        setState(tempFilesList)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentFiles])

    const handleSubmit = async e => {
        try {
            setProgress(curr => ({ ...curr, isUploading: true }))
            const value = await UploadFiles(state, e, setProgress);
            navigate("resume_analysis", { state: value });
        } catch (err) {
            setError({ error: true, errorMsg: err.message });
            setProgress(curr => ({ ...curr, isUploading: false }));
        }
    }


    return (
        <>
            <Notify
                activate={error.error}
                setActivate={setError}
                errorMsg={error.errorMsg}
                duration={5000}
                bottomPosition={"5px"}
            />
            <LoadingOverlay visible={progress.isUploading}
                loader={<CustomLoader progress={progress} />}
            />
            <Stack align={"center"} sx={{ height: "100%" }}>
                <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
                    <Photo size={80} />
                    {state.length === 0 ? (
                        <>
                            <div>
                                <Text size="xl" inline>
                                    Drag resume here or click to select files
                                </Text>
                                <Text size="sm" color="dimmed" inline mt={7}>
                                    Attach as many files as you like (only PDF)
                                </Text>
                            </div>
                        </>
                    ) : (
                        <div>
                            <Text size='xl' inline>
                                Add More Files
                            </Text>
                        </div>
                    )}

                </Group>
                <FullScreenDropzone
                    onDrop={(files) => setCurrentFiles(files)}
                    accept={PDF_MIME_TYPE}
                >
                    {(_) => { }}
                </FullScreenDropzone>

                <Dropzone
                    onDrop={files => setCurrentFiles(files)}
                    accept={PDF_MIME_TYPE}
                    openRef={dropZoneRef}
                    sx={{ display: "none" }}
                >
                    {() => { }}
                </Dropzone>
                <Group mt="-20px" spacing={"xs"}>
                    <DarkButton
                        border
                        onClick={() => dropZoneRef.current()}
                        Icon={NewSection}
                        value={state.length === 0 ? ("Select Files") : "Add More"} />
                    {state.length > 0 && (
                        <DarkButton
                            type='button'
                            onClick={handleSubmit}
                            border
                            value={"Analyze"}
                            Icon={BrandGoogleAnalytics}
                        />
                    )}
                </Group>
                {state.length > 0 &&
                    (<ListFiles
                        files={state}
                        removeFile={setState}
                    />)}
            </Stack>
        </>
    )
}