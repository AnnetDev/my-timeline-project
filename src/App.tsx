import React from "react";
import Header from "./components/layout/Header";
import Timeline from "./components/blocks/timeline/Timeline";

const App: React.FC = () => (
    <>
        <Header />
        <main>
            <Timeline />
        </main>
    </>
);

export default App;
