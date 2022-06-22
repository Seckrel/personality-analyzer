import { AppShell } from '@mantine/core';
import CustomizedFooter from './FooterComponent';
import CutomizedHeader from './HeaderComponent';
import Home from './pages/Home';

export default function Layout() {
    return (
        <AppShell
            padding="md"
            navbar={null}
            header={<CutomizedHeader />}
            footer={<CustomizedFooter />}
            styles={(theme) => ({
                main: {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
                body: {
                    position: 'absolute',
                    top: 70,
                    bottom: 60,
                    overflow: "auto"
                }
            })}
        >
            <Home />
        </AppShell>
    )
}