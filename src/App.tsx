import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/Home.tsx";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Extracurricular from "./components/Extracurricular";
import TechnicalSkill from "./components/TechnicalSkill";
import Project from "./components/Project";
import GlobalStyles from "./components/GlobalStyles";

function Root(){
    return (
        <div>
            <GlobalStyles/>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/extracurricular" element={<Extracurricular />} />
                <Route path="/skills" element={<TechnicalSkill />} />
                <Route path="/projects" element={<Project />}/>
            </Routes>
        </div>
    )
}

const router = createBrowserRouter(
    [{path:"*", Component: Root}]
);


function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
