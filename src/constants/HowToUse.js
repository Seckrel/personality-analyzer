import { Number1, Number2, Number3 } from "tabler-icons-react";

export const USE_STEPS = [
  {
    id: 1,
    title: "What is Know Me",
    contents: [
      "Know Me is a web app that aims to predicted a person's personality based on their Résumé.",
      "Know me shows probability a persona having a particular personality traits. It was developed using MBTI dataset.",
    ],
    isNots: [
      "IT DOES NOT MEANS A PERSON CAN ONLY HAVE THIS PARTICULAR PERSONALITY",
    ],
  },
  {
    id: 2,
    title: "How To use Know Me",
    steps: [
      {
        step: 2.1,
        icon: Number1,
        title: "Getting Started",
        imgSrc: "/images/select_files.png",
        alt: "Selecting Resume Files Step",
        contents: [
          "Drag and drop resume in the browser window, or click Select Files.",
        ],
      },
      {
        step: 2 / 2,
        icon: Number2,
        title: "Analyze",
        imgSrc: "/images/analyze.png",
        alt: "Analyzing Resume Files Step",
        contents: [
          "Click on Analyze button to start analyzing personality.",
          "Click on red cross to remove selected pdf from the analyze list",
          "Click on Add more to add additional resume for analysis.",
        ],
      },
      {
        step: 2.3,
        icon: Number3,
        title: "Visulazation",
        imgSrc: "/videos/visualization.mp4",
        alt: "Visulazation Step",
        contents: [
          "Click on any row of the table to see spider graph for the result.",
          "Click on top left button to view Bar graph for the result.",
        ],
      },
    ],
  },
];
