import { useState, useEffect } from "react";
import { Dialog, Group, Text } from "@mantine/core";
import { timeout } from "../utils/timeout.utils";

const HelperVisulization = () => {
  const [opened, setOpened] = useState(true);

    useEffect(() => () => timeout(setOpened, 2000), []);

  return (
    <Dialog
      opened={opened}
      withCloseButton
      onClose={() => setOpened(false)}
      transition="scale"
      transitionDuration={200}
      transitionTimingFunction="ease-in-out"
      size="md"
      radius="lg"
      position={{
        top: "30%",
        left: "20%",
      }}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[3],
      })}
      styles={{
        closeButton: {
          color: "black",
          "&:hover": {
            color: "white",
            backgroundColor: "black",
          },
        },
      }}
    >
      <Group sx={{ position: "relative", width: "70%" }}>
        {console.log("mounted")}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="256"
          height="256"
          viewBox="0 0 256 256"
          xmlSpace="preserve"
          style={{
            position: "absolute",
            transform: "rotate(180deg)",
            bottom: "70%",
            left: "50%",
            width: "150px",
            height: "auto",
          }}
        >
          <defs></defs>
          <g
            css="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          >
            <path
              d="M 12.409 84.127 l 4.925 -8.53 l 4.925 -8.53 c 0.528 -0.914 -0.132 -2.056 -1.187 -2.056 h -6.207 c 1.705 -13.935 13.603 -24.766 27.991 -24.766 h 12.12 c 18.8 0 34.192 -14.876 35.023 -33.475 c 0.038 -0.859 -0.632 -1.583 -1.491 -1.583 h -3.871 c -0.785 0 -1.448 0.608 -1.486 1.391 C 82.423 21.49 70.063 33.397 54.976 33.397 h -12.12 c -18.17 0 -33.152 13.894 -34.887 31.615 H 1.373 c -1.055 0 -1.714 1.142 -1.187 2.056 l 4.925 8.53 l 4.925 8.53 C 10.562 85.041 11.881 85.041 12.409 84.127 z"
              css="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) "
              strokeLinecap="round"
              style={{
                fill: "var(--mantine-color-gray-3)",
              }}
            />
          </g>
        </svg>
        <Text
          size="xl"
          sx={(theme) => ({ marginBottom: 10, color: theme.colors.dark })}
          weight={700}
        >
          Click To Visualize Data
        </Text>
      </Group>
    </Dialog>
  );
};

export default HelperVisulization;
