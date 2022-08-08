import { Notification, Text } from "@mantine/core";
import { useEffect, useCallback } from "react";
import { X } from "tabler-icons-react";

export default function Notify({
  color = "red",
  icon = () => <X size={16} />,
  errorMsg = "",
  activate = false,
  setActivate,
  duration = 4000,
  bottomPosition = "70px",
}) {
  const classes = {
    position: "absolute",
    bottom: bottomPosition,
    zIndex: 9999,
    right: "5px",
  };

  const onLoadEffect = useCallback(() => {
    setTimeout(() => {
      setActivate((curr) => ({ ...curr, error: false }));
    }, duration);
    // eslint-disable-next-line
  }, []);

  useEffect(() => onLoadEffect, [activate]);

  return (
    <>
      {activate && (
        <Notification color={color} icon={icon()} sx={classes} title={"Error"}>
          <div style={{ display: "flex" }}>
            <Text sx={{ lineHeight: 2 }}>{errorMsg}</Text>
          </div>
        </Notification>
      )}
    </>
  );
}
