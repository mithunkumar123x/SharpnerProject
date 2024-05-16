import { StudentContext } from "react";

const MainComponent = () => {
    return (
        <StudentContext.Provider value="dark">
            <MainComponent />
        </StudentContext.Provider>
    )
}
