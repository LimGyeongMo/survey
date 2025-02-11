import { Route, Routes } from "react-router";
import CompletionPage from "./Pages/CompletionPage";
import SurveyPage from "./Pages/SurveyPage";
import styled from "styled-components";

function App() {
    console.log("App 렌더링 suc");
    return (
        <div className="App">
            <AppWrapper>
                <Box>
                    <Routes>
                        <Route
                            path="/done/:surveyId"
                            element={<CompletionPage />}
                        />
                        <Route
                            path="/survey/:surveyId"
                            element={<SurveyPage />}
                        >
                            <Route path=":step" element={<SurveyPage />} />
                        </Route>
                    </Routes>
                </Box>
            </AppWrapper>
        </div>
    );
}

const AppWrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e5e5e5;
`;

const Box = styled.div`
    background-color: #ffffff;
    width: 700px;
    min-height: 500px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
    border-radius: 16px;
    padding: 60px;
    display: flex;
    box-sizing: border-box;
    position: relative;
`;
export default App;
