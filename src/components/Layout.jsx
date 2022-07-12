import { AppShell } from '@mantine/core';
import CustomizedFooter from './FooterComponent';
import CutomizedHeader from './HeaderComponent';
import Home from './pages/Home';
import ResumeAnalysis from './pages/ResumeAnalaysis';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


export default function Layout() {
    return (
        <BrowserRouter>
            <AppShell
                padding="md"
                navbar={null}
                header={<CutomizedHeader />}
                footer={<CustomizedFooter />}
                styles={(theme) => ({
                    main: {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                        overflow: "auto",
                        padding: theme.spacing.xl
                    },
                    body: {
                        position: 'absolute',
                        top: 70,
                        bottom: 60,

                    }
                })}
            >
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume_analysis" element={<ResumeAnalysis />} />
                </Routes>
            </AppShell>
        </BrowserRouter>

    )
}