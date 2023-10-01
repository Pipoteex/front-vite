import { useEffect, useState } from "react";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { AboutComponent } from "./components/About";
import JsonData from "./data/data.json";
import { JSONData } from "./types/types";

function App() {
    const [landingPageData, setLandingPageData] = useState<JSONData>();

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <>
            <Welcome />
            <AboutComponent data={landingPageData?.About} />
        </>
    );
}

export default App;
