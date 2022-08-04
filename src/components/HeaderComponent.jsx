import { Header, Image, Group } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { ClearSession } from "../utils/api";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Notify from "./NotificationComponent";
import DarkButton from "./DarkButtonComponent";

export default function CutomizedHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const defaultErrorMsg = "Please go back and add some files";
  const [sessionClearState, setSessionClearState] = useState({
    error: false,
    status: null,
    errorMsg: defaultErrorMsg,
  });

  const handleUploadNew = async () => {
    try {
      const [error, status] = await ClearSession();
      setSessionClearState((current) => ({
        ...current,
        error: error,
        status: status,
      }));
      if (!error) navigate("/");
    } catch (e) {
      setSessionClearState((curr) => ({
        ...curr,
        error: true,
        errorMsg: e.message,
      }));
    }
  };

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
            component={Link}
            to="/"
            width={200}
            height={70}
            fit="contain"
            src="know_me_log.svg"
            sx={{
              transform: "rotate(13deg)",
            }}
          />
          <Group ml={"auto"}>
            {location.pathname !== "/" && (
              <DarkButton onClick={handleUploadNew} value={"Upload New"} />
            )}
            {location.pathname !== "/" &&
              location.pathname !== "/resume_analysis" && (
                <DarkButton
                  component={Link}
                  to="resume_analysis"
                  value={"Anlayzed"}
                />
              )}
            <DarkButton component={Link} to="how-to-use" value={"How To Use"} />
          </Group>
        </Group>
      </Header>
    </>
  );
}
