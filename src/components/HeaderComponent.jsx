import {
    Header, Text, Image,
    Group, Button, createStyles
} from "@mantine/core";
import { useLocation } from "react-router-dom";
import { ClearSession } from "../utils/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notify from "./NotificationComponent";



const useStyle = createStyles((theme) => ({
    root: {
        background: "none",
        "&:hover": {
            color: theme.colors.dark[theme.primaryShade.dark],
            background: theme.white,
        }
    },
    notifcation: {
        position: "absolute",
        bottom: "70px",
        zIndex: 9999,
        right: "5px",
    }
}));


export default function CutomizedHeader() {
    const location = useLocation();
    const { classes } = useStyle();
    const navigate = useNavigate();
    const defaultErrorMsg = "Please go back and add some files";
    const [sessionClearState, setSessionClearState] = useState({
        error: false,
        status: null,
        errorMsg: defaultErrorMsg
    })

    const handleUploadNew = async () => {
        try {
            const [error, status] = await ClearSession();
            setSessionClearState(current => ({
                ...current,
                error: error,
                status: status
            }))
            if (!error)
                navigate("/");

        } catch (e) {
            setSessionClearState(curr =>
                ({ ...curr, error: true, errorMsg: e.message }));
        }
    }

    return (
        <>
            <Notify
                errorMsg={sessionClearState.errorMsg}
                activate={sessionClearState.error}
                setActivate={setSessionClearState}
            />
            <Header height={70} pb="md" pr={"xl"} sx={{ top: 0 }}>
                <Group>
                    <Image
                        width={200}
                        height={70}
                        fit="contain"
                        src="know_me_log.svg"
                        sx={{
                            transform: "rotate(13deg)"
                        }}
                    />
                    {location.pathname === "/resume_analysis" && (
                        <Group ml={'auto'}>
                            <Button className={classes.root} onClick={handleUploadNew}>
                                <Text>
                                    Upload New
                                </Text>
                            </Button>
                        </Group>
                    )}
                </Group>
            </Header >
        </>
    )
}