import "./App.css";
import Layout from "./components/Layout";
import { MantineProvider } from "@mantine/core";

const theme = {
  colorScheme: "dark",
};

function App() {
  return (
    <MantineProvider
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      <Layout />
    </MantineProvider>
  );
}

export default App;
