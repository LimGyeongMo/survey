import "./App.css";

import { Route, Routes } from "react-router";
import CompletionPage from "./Pages/CompletionPage";
import SurveyPage from "./Pages/SurveyPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/done" element={<CompletionPage />} />
                <Route path="/survey/:surveyId" element={<SurveyPage />}>
                    <Route path=":step" element={<SurveyPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
