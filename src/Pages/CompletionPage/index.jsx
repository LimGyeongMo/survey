import styled from "styled-components";

import { useRecoilValue } from "recoil";
import testWithComma from "../../stores/test/testWithComma";
import congrats from "../../assets/congrats.png";
import reload from "../../assets/reload.png";
import Button from "../../components/Button";
import { useSurveyId } from "../../hooks/useSurveyId";
import { useNavigate } from "react-router";
import ProgressIndicator from "../../components/ProgressIndicator";

function CompletionPage() {
    const surveyId = useSurveyId();
    const navigate = useNavigate();
    return (
        <CompletionPageWrapper>
            <img src={congrats} alt="" width="209" height="204" />
            <MidText> 설문이 완료 되었습니다!</MidText>
            <ReloadButton
                type="TERTIARY"
                onClick={() => {
                    navigate(`/survey/${surveyId}/0`);
                }}
            >
                <img src={reload} alt="" width="24" height="24" />
                새로운 응답 제출하기
            </ReloadButton>
        </CompletionPageWrapper>
    );
}

const CompletionPageWrapper = styled.div`
    width: 100%;
    text-align: center;
`;

const MidText = styled.div`
    font-weight: bold;
    font-size: 24px;
    margin-top: 16px;
    margin-bottom: 56px;
    line-height: 28px;
`;

const ReloadButton = styled(Button)`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
`;

export default CompletionPage;
