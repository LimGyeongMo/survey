import QuestionBox from "../../components/QuestionBox";
import ProgressIndicator from "../../components/ProgressIndicator";
import styled from "styled-components";
import { Suspense } from "react";

function SurveyPage() {
    return (
        <Suspense fallback={<div>loading... </div>}>
            <SurveyPageWrapper>
                {/* <ProgressIndicator /> */}
                <ProgressIndicator />
                <QuestionBox />
            </SurveyPageWrapper>
        </Suspense>
    );
}

const SurveyPageWrapper = styled.div`
    width: 100%;
    min-height: 100%;
`;
export default SurveyPage;
