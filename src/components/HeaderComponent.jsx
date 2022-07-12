import {
    Header, Text, Image,
    Group, Button, createStyles, Notification
} from "@mantine/core";
import { useLocation } from "react-router-dom";
import { ClearSession } from "../utils/api";
import { X } from 'tabler-icons-react';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



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
}))
export default function CutomizedHeader() {
    const location = useLocation();
    const { classes } = useStyle();
    const navigate = useNavigate();
    const defaultErrorMsg = "Please go back and add some files";
    const [sessionClearState, setSessionClearState] = useState({
        notLoadNotification: true,
        status: null,
        errorMsg: defaultErrorMsg
    })

    const handleUploadNew = async () => {
        try {
            const [sessionClearFlag, status] = await ClearSession();
            setSessionClearState(current => ({
                ...current,
                notLoadNotification: sessionClearFlag,
                status: status
            }))
            if (sessionClearFlag)
                navigate("/");
        } catch (e) {
            setSessionClearState(curr => ({ ...curr, notLoadNotification: false, errorMsg: e.message }));
        }
    }

    const onLoadEffect = () => {
        setTimeout(() => {
            setSessionClearState(curr => ({ ...curr, notLoadNotification: true, errorMsg: defaultErrorMsg }));
        }, 8000);
    };

    useEffect(() => onLoadEffect, [sessionClearState.notLoadNotification])

    return (
        <>
            {!sessionClearState.notLoadNotification && (
                <Notification
                    color={"red"}
                    icon={<X size={18} />}
                    classNames={{ root: classes.notifcation }}
                >
                    <div style={{ display: "flex" }}>
                        <Text sx={{ lineHeight: 2 }}>
                            {sessionClearState.errorMsg}
                        </Text>
                    </div>
                </Notification>
            )}
            <Header height={70} pb="md" pr={"xl"} sx={{ top: 0 }}>
                <Group>
                    <Image
                        width={200}
                        height={70}
                        fit={"contain"}
                        src="/logo.svg"
                        className="my-line"
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