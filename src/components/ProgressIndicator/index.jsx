import styled from "styled-components";
import Bar from "../Bar";
import { useRecoilValue } from "recoil";
import { questionsLengthState } from "../../stores/survey/questionsLengthState";
import useAnswers from "../../hooks/useAnswers";
import { useStep } from "../../hooks/useStep";

function ProgressIndicator() {
    const length = useRecoilValue(questionsLengthState);
    const [answers] = useAnswers();
    const step = useStep();
    const bars = [];
    for (let i = 0; i < length; i++) {
        let status = "pending";
        if (i === step) {
            status = "in-progress";
        } else if (answers[i]) {
            status = "done";
        }

        bars.push(<Bar key={i} status={status} />);
    }
    return (
        <ProgressIndicatorWrapper>
            {bars}
            <PageCount>
                <span>{step + 1}</span>/{length}
            </PageCount>
        </ProgressIndicatorWrapper>
    );
}

const ProgressIndicatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: calc(100% + 24px);
    left: 0;
    width: 100%;
    gap: 8px;
    align-items: center;
`;

const PageCount = styled.div`
    margin-left: 8px;
    font-size: 16px;
    line-height: 19px;
    color: #636262;

    span {
        font-weight: bold;
        color: #121111;
    }
`;
export default ProgressIndicator;
