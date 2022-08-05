import { AppShell, Center } from '@mantine/core';
import CustomizedFooter from './FooterComponent';
import CutomizedHeader from './HeaderComponent';
import  Error404 from './pages/Error404';
import Home from './pages/Home';
import ResumeAnalysis from './pages/ResumeAnalaysis';
import HowToUse from './pages/HowToUse';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { useState, useEffect } from 'react';


export default function Layout() {
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        return () => setTimeout(() => setInitialLoading(false), 2000);
    }, [])

    if (initialLoading) {
        return (
            <Center sx={{ height: "100%" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="500.6090087890625" height="500.93499755859375" viewBox="0 0 332.609 182.935">
                    <g transform="translate(-624.173 -356.187)">
                        <path d="M7.5,96.5q-.75,0-.75-.375,1.875-2.25,4.562-6.062t5.813-8.812Q20,76.625,23,71.5t5.938-10.375q2.938-5.25,5.563-10.375T39.375,41a.255.255,0,0,1,.063-.188.255.255,0,0,0,.063-.187q0-.375-.625-.375A64.512,64.512,0,0,0,32,40.625,60.277,60.277,0,0,1,25.625,41q-1.375,0-1.375-.75a2.785,2.785,0,0,1,.25-.687q.25-.562.563-1.125a6.03,6.03,0,0,1,.687-1q.375-.438.625-.437,0,1,1.25,1.375a21.736,21.736,0,0,0,3,.437q2,.188,3.5.313.625,0,1.438.062t1.813.063q3.875,0,7.25-.125t8.375-.5a.835.835,0,0,1-.125,1.125q-.625,0-2.188.063T48,40a1.782,1.782,0,0,0-1.5,1q-3.25,5.125-6.937,11.25T31.25,66.125q-.5.875-.188,1.063T32,66.875Q38.5,63,44.75,59.063t11.5-7.437q1.25-.75,4.5-2.937l6.688-4.5q3.437-2.313,6.25-4.188A21.336,21.336,0,0,1,77,38h.5a6.5,6.5,0,0,0,1.438.625q.812.25,1.688.5a.566.566,0,0,1-.125.625,17.177,17.177,0,0,0-2.625,1.125q-1.75.875-4.937,2.625T65,48.063q-4.75,2.813-11.625,7.063Q49.625,57.5,45.5,60.188T37.375,65.75a1.008,1.008,0,0,0-.5.75q5.125,6.875,12,15.313a185.991,185.991,0,0,0,17.5,18.313,91.736,91.736,0,0,0,7,6,33.812,33.812,0,0,0,6.063,3.75,27.829,27.829,0,0,0,5.75,2,28.546,28.546,0,0,0,6.188.625,37.6,37.6,0,0,0,9.937-1.312,24.754,24.754,0,0,0,7.813-3.437q1-.625,1,.25,0,.25-.5.625a31.268,31.268,0,0,1-9.063,3.688A46.028,46.028,0,0,1,89,113.75a39.1,39.1,0,0,1-17-4,55.17,55.17,0,0,1-9.875-6.187A80.352,80.352,0,0,1,51.5,93.5Q46.375,87.75,41,81.25T31,68.5q-.375-.625-.562-.562a3.348,3.348,0,0,0-.813.938Q26,74.875,23,80.313T17,91.125a7.035,7.035,0,0,0-.812,1.688q-.312.938-.437,1.438a12.432,12.432,0,0,0-1.312-.187Q13.75,94,13.25,94a7.028,7.028,0,0,0-3.375.875A10.441,10.441,0,0,0,7.5,96.5ZM108.125,77.875a67.917,67.917,0,0,1-5.187,6.313,47.016,47.016,0,0,1-6.25,5.688A38.626,38.626,0,0,1,89.938,94a15.6,15.6,0,0,1-6.687,1.625,8.276,8.276,0,0,1-2.75-.437A2.03,2.03,0,0,1,79.25,93a11.118,11.118,0,0,1,1.25-4.437q1.25-2.687,2.938-5.687t3.5-6.125A54.039,54.039,0,0,0,89.875,71a1.371,1.371,0,0,0,.063-1.062q-.187-.437-.812-.062a38.322,38.322,0,0,0-3.25,2.375Q84,73.75,82.063,75.438t-3.75,3.438A37.427,37.427,0,0,0,75.375,82q-2,3.125-3.437,5.75t-3.562,5.875q-.5.75-.75.75Q67,94.375,66.563,93a8.175,8.175,0,0,1-.437-1.75,5.668,5.668,0,0,1,1.563-3.062q1.562-1.937,3.438-4.312,2-4,4.125-8.437T78.875,67.5A1.228,1.228,0,0,1,80,66.875a2.151,2.151,0,0,1,2,2,13.853,13.853,0,0,1-1.812,3.438,60.226,60.226,0,0,0-3.562,6.813Q79,77,81.813,74.625t5.375-4.375q2.563-2,4.5-3.312a6.378,6.378,0,0,1,2.688-1.312,1.214,1.214,0,0,1,.938.563,1.766,1.766,0,0,1,.438,1.063,3.325,3.325,0,0,1-.625,1.5q-1.375,2-3.375,5.125t-3.812,6.438a66.532,66.532,0,0,0-3.062,6.313,13.332,13.332,0,0,0-1.25,4.75,2.71,2.71,0,0,0,.625,2.063,2.941,2.941,0,0,0,2,.563,10.549,10.549,0,0,0,5-1.625,45.817,45.817,0,0,0,5.938-4.062A50.815,50.815,0,0,0,103,82.875a42.031,42.031,0,0,0,4.5-5.75.567.567,0,0,1,.75-.187Q108.75,77.125,108.125,77.875ZM143,72.75a25.5,25.5,0,0,1-5.187,5.188,11.216,11.216,0,0,1-6.937,2.313,9.054,9.054,0,0,1-4.187-1.062A8.115,8.115,0,0,1,123.375,76q-.875,2-2.25,4.563a43.64,43.64,0,0,1-3.25,5.125,32.055,32.055,0,0,1-4.187,4.688,23.2,23.2,0,0,1-4.937,3.5,9.687,9.687,0,0,1-3.75,1q-4.5,0-4.5-4a14.247,14.247,0,0,1,.813-4.625,28.518,28.518,0,0,1,2.063-4.625,43.315,43.315,0,0,1,2.688-4.25,26.528,26.528,0,0,1,2.688-3.25,26.083,26.083,0,0,1,6-4.875A17.332,17.332,0,0,1,122,66.875a20.792,20.792,0,0,1,.75-2.312A2.29,2.29,0,0,1,124.5,63l1.25-.25a4.462,4.462,0,0,0,1.125-.375.7.7,0,0,1,.75-.062q.375.188.125.688a10.41,10.41,0,0,0-1.312,3.5A22.947,22.947,0,0,0,126,71.125a11.293,11.293,0,0,0,1.313,5.75q1.313,2.25,4.563,2.25A9.1,9.1,0,0,0,137.75,77a22.782,22.782,0,0,0,4.375-4.625q.25-.625.813-.375T143,72.75Zm-20.625.875A19.822,19.822,0,0,1,122,71q-.125-1.5-.125-2.875,0-.625-.5-.625a5.446,5.446,0,0,0-2.875.938,15.9,15.9,0,0,0-3,2.5,38.471,38.471,0,0,0-3,3.563,44.344,44.344,0,0,0-2.75,4.125,46.322,46.322,0,0,0-2.937,5.938,14.266,14.266,0,0,0-1.187,6.063,4.183,4.183,0,0,0,.313,1.625,1.379,1.379,0,0,0,1.438.75Q109.5,93,112,90.625a37.327,37.327,0,0,0,4.75-5.562,44.957,44.957,0,0,0,3.813-6.437A19.068,19.068,0,0,0,122.375,73.625Zm68.125-5.75a35.4,35.4,0,0,1-4.062.938q-2.437.437-5,.813t-4.875.625q-2.313.25-3.687.375a1,1,0,0,0-.812.625,3.186,3.186,0,0,0-.187,1.125,27.207,27.207,0,0,1-.937,6.938,43.015,43.015,0,0,1-2.375,6.75,37.535,37.535,0,0,1-3.187,5.75,20.7,20.7,0,0,1-3.5,4.063,18.838,18.838,0,0,1-4.187,2.875,11.222,11.222,0,0,1-4.937,1,6.685,6.685,0,0,1-5.125-2,7.365,7.365,0,0,1-1.875-5.25,13.362,13.362,0,0,1,.25-2.625q-2.375,1.375-5.25,2.75A12.982,12.982,0,0,1,135.125,94a3.3,3.3,0,0,1-2.437-.937,3.82,3.82,0,0,1-.937-2.812,13,13,0,0,1,1.313-5.187,50.2,50.2,0,0,1,3.125-5.875Q138,76.25,139.75,73.813t2.625-3.562a10.091,10.091,0,0,1,.938-1.062,3.315,3.315,0,0,1,1.313-.812l2.25-.562q1.25-.313,2-.437.5,0,.5.375,0,.25-.687.5a5.817,5.817,0,0,0-1.812,1.375,31.047,31.047,0,0,0-3.687,4.938q-1.812,2.938-3.312,5.875A40.437,40.437,0,0,0,137.5,86a14.033,14.033,0,0,0-.875,4.125,2.151,2.151,0,0,0,.5,1.375,1.665,1.665,0,0,0,1.375.625,10.932,10.932,0,0,0,2.563-.625,23.741,23.741,0,0,0,5.188-2.75,42.017,42.017,0,0,1,3.5-9.562,44.609,44.609,0,0,1,5.5-8.437,24.773,24.773,0,0,1,2.125-2.125,5.017,5.017,0,0,1,3.5-1.375q1,0,1.188.688A4.372,4.372,0,0,1,162.25,69a12.132,12.132,0,0,1-.437,2.375A17.587,17.587,0,0,1,160,75.563a40.058,40.058,0,0,1-3.75,5.375,43.334,43.334,0,0,1-6.375,6.188,24.718,24.718,0,0,0,.25,3.5,9.181,9.181,0,0,0,1,3.125,6.507,6.507,0,0,0,2,2.25,5.548,5.548,0,0,0,3.25.875,7.525,7.525,0,0,0,5.25-2.062,16,16,0,0,0,3.688-5.187A30.9,30.9,0,0,0,167.5,82.75a36.372,36.372,0,0,0,.75-7.125,30.74,30.74,0,0,0-.312-4.875,2.4,2.4,0,0,0-2.312-2.125q-.5-.5.125-.75a4.422,4.422,0,0,0,1.875-.562,4.336,4.336,0,0,1,1.625-.562.677.677,0,0,1,.5.313,2.6,2.6,0,0,0,1.063.625,15.332,15.332,0,0,0,2.438.625,26.051,26.051,0,0,0,4.625.313,49.673,49.673,0,0,0,7.375-.562A35.712,35.712,0,0,0,190.5,67a.534.534,0,0,1,.688.25Q191.375,67.625,190.5,67.875ZM159.125,71.5a5.255,5.255,0,0,0-.187-1,.886.886,0,0,0-.937-.75,3.187,3.187,0,0,0-1.75,1,12.706,12.706,0,0,0-2.312,3,30.923,30.923,0,0,0-2.312,5.063A37.069,37.069,0,0,0,149.875,86,27.154,27.154,0,0,0,157,78.063,14.64,14.64,0,0,0,159.125,71.5Zm41.125,24a24.729,24.729,0,0,1,3-5.312q2.625-3.937,6.625-9.25t8.875-11.562q4.875-6.25,9.625-12.187t8.938-11.062q4.188-5.125,6.813-8.25,2.625-.875,4.125-1.312a21.7,21.7,0,0,0,2.375-.813q.75.25.25.75A4.324,4.324,0,0,0,249,39.375q-.5,2.875-1,6.875t-.937,8.5q-.438,4.5-.812,9.25t-.625,9q-.25,4.25-.375,7.813t-.125,5.688a4.979,4.979,0,0,0,.188,1.688q.188.437.5.375a1.356,1.356,0,0,0,.688-.5q.375-.437.75-.937,1.375-1.75,4.5-5.562t7.125-8.625q4-4.813,8.5-10.062T276,52.938q4.125-4.687,7.438-8.375t4.938-5.187A31.548,31.548,0,0,1,293.25,37.5a18.7,18.7,0,0,0,4.625-2,.77.77,0,0,1,.625.312.534.534,0,0,1,0,.688,18.982,18.982,0,0,0-3.062,1.5,4.625,4.625,0,0,0-1.562,2.375q-1.5,4.75-3.062,11.063t-2.875,12.938Q286.625,71,285.75,77.313a81.849,81.849,0,0,0-.875,11.063,3.063,3.063,0,0,0,.813,2.438,2.9,2.9,0,0,0,1.938.688,14.084,14.084,0,0,0,2.5-.25,10.97,10.97,0,0,0,2.5-.75q.25,0,.313.313a.6.6,0,0,1-.187.563q-1.25.375-2.937.875l-3.375,1q-1.687.5-3.125.938t-2.437.688a4.691,4.691,0,0,1-2.437-.562,2.772,2.772,0,0,1-1.187-2.062q.125-1.75.875-5.75t1.875-9q1.125-5,2.438-10.5t2.438-10.187q1.125-4.687,1.938-7.937T287.75,45q.5-1.875,0-1.812a3.534,3.534,0,0,0-1.5.938q-2.375,2.125-5.562,5.438t-6.75,7.313q-3.562,4-7.312,8.5t-7.375,9q-3.625,4.5-6.875,8.813t-5.75,7.938q-.25.5-.625,1.188a7.638,7.638,0,0,0-.625,1.563,9.917,9.917,0,0,0-3.562.688,10.307,10.307,0,0,0-2.437,1.688q-.75.25-.875-.25.375-2.625.813-7t.875-9.625q.438-5.25.813-10.812t.75-10.5q.375-4.938.625-8.687T242.75,44q0-2.375-2,0-3.625,4.125-8.562,10.375t-9.937,13q-5,6.75-9.437,13.25t-7.062,11.25a25.634,25.634,0,0,0-2.687,6.25,12.411,12.411,0,0,0-.312,3.5q.125,1.375-.25,1.188a2.029,2.029,0,0,1-.75-.937,8.347,8.347,0,0,1-.625-2.25Q200.875,98.125,200.25,95.5ZM330.125,79.125a59.037,59.037,0,0,1-5.062,5.438,47.676,47.676,0,0,1-6.375,5.125,36.5,36.5,0,0,1-7.125,3.75,20.022,20.022,0,0,1-7.312,1.438q-5.875,0-5.875-5.25a18.668,18.668,0,0,1,1.813-7.562,31.894,31.894,0,0,1,4.688-7.5,30.256,30.256,0,0,1,6.313-5.75A11.848,11.848,0,0,1,317.75,66.5a3.647,3.647,0,0,1,2.438.625,2.094,2.094,0,0,1,.688,1.625,6.948,6.948,0,0,1-.937,3.25,11.366,11.366,0,0,1-2.812,3.313,16.046,16.046,0,0,1-4.75,2.625A19.866,19.866,0,0,1,305.5,79a19.963,19.963,0,0,0-1.375,3.563,16.7,16.7,0,0,0-.75,4.938q0,5.125,4.625,5.125a14.456,14.456,0,0,0,5.938-1.375,34.242,34.242,0,0,0,5.938-3.437,42.671,42.671,0,0,0,5.313-4.5,46.632,46.632,0,0,0,4.063-4.562.5.5,0,0,1,.875.375ZM317,69.375a1.436,1.436,0,0,0-1.625-1.625,4.421,4.421,0,0,0-2.562.938,13.9,13.9,0,0,0-2.562,2.438,32.633,32.633,0,0,0-2.375,3.25A27.9,27.9,0,0,0,306,77.75a2.773,2.773,0,0,0,.875.188q.625.062,1,.063a9.066,9.066,0,0,0,6.375-2.562A8.021,8.021,0,0,0,317,69.375Z" transform="matrix(0.966, -0.259, 0.259, 0.966, 608.465, 407.339)" fill="#707070" className="svg-elem-1"></path>
                        <g transform="translate(671.416 417.284)">
                            <path d="M286.475,0c-11.8,6.579-16.9,11.761-31.855,15.149-10.059,2.28-26,3.723-48.823,3.956-55.117.562-88.068-17.492-139.79-16.856S0,24.864,0,24.864" transform="translate(277.702 23.364) rotate(160)" fill="none" stroke="#707070" strokeWidth="1" className="svg-elem-2"></path>
                        </g>
                    </g>
                </svg>
            </Center>
        )
    }

    return (
        <BrowserRouter BrowserRouter >
            <AppShell
                padding="md"
                navbar={null}
                header={<CutomizedHeader />}
                footer={<CustomizedFooter />}
                styles={(theme) => ({
                    root: {

                    },
                    main: {
                        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                        overflow: "auto",
                        padding: theme.spacing.xl,
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
                    <Route path="/how-to-use" element={<HowToUse />} />
                    <Route path="/404" element={<Error404 />} />
                </Routes>
            </AppShell>
        </BrowserRouter>
    )
}