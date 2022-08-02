import { Button, createStyles, Text } from "@mantine/core";

const useStyles = createStyles((theme, border) => ({
    root: {
        background: "none",
        border: border ? `1px solid ${theme.white}` : null,
        "&:hover": {
            color: theme.colors.dark[theme.primaryShade.dark],
            background: theme.white,
        }
    },
}))


export default function DarkButton({
    value = "", border = false, Icon = null, rightIcon = false, ref = null, ...props }) {
    const { classes } = useStyles(border);

    return (
        <Button {...props}
            ref={ref}
            className={classes.root}
            rightIcon={rightIcon && Icon ? (<Icon />) : null}
            leftIcon={!rightIcon && Icon ? (<Icon />) : null}
        >
            <Text>
                {value}
            </Text>
        </Button>
    )
}