import { useEffect, useState } from "react";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { AboutComponent } from "./components/About";
import JsonData from "./data/data.json";
import { JSONData } from "./types/types";
import { NavBar } from "./components/NavBar";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import CangorosaComponent from "./components/Cangorosa";
import BlaBlaComponent from "./components/BlaBla";

function App() {
    const [landingPageData, setLandingPageData] = useState<JSONData>();

    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <>
            <NavBar />
            <Welcome />
            <AboutComponent data={landingPageData?.About} />
            <Services data={landingPageData?.Services} />
            <CangorosaComponent data={landingPageData?.Cangorosa} />
            <BlaBlaComponent data={landingPageData?.BlaBla} />
            <Contact />
        </>
    );
}

export default App;
