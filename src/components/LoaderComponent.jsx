import { RingProgress, Center, Text, Loader } from "@mantine/core";


export default function CustomLoader({ progress }) {
    const CustomLoaderSVG = () => (<Loader color="green" size="xl" variant="bars" />)
    return (
        <>
            {(progress?.progress < 100) ? (
                <RingProgress
                    label={
                        <Text color="orange" weight={700} align="center" size="xl">
                            {progress.progress} %
                        </Text>
                    }
                    size={150}
                    thickness={12}
                    roundCaps
                    sections={[
                        { value: progress?.progress, color: 'orange' },
                    ]}
                />
            ) : (
                <RingProgress
                    label={
                        <Center>
                            <CustomLoaderSVG />
                        </Center>
                    }
                    size={150}
                    thickness={12}
                    roundCaps
                    sections={[
                        { value: 100, color: 'green' },
                    ]}
                />
            )}
        </>
    )
}