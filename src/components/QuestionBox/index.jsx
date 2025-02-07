import Desc from "../Desc";
import Title from "../Title";
import Body from "../Body";
import ActionButtons from "../ActionButtons";
import styled from "styled-components";

import { useCurrentQuestion } from "../../hooks/useCurrentQuestion";
import { useCurrentAnswer } from "../../hooks/useCurrentAnswer";
function QuestionBox({}) {
    const question = useCurrentQuestion();
    console.log(question);
    const [answer, setAnswer] = useCurrentAnswer();
    console.log(answer, setAnswer);

    return (
        <QuestionBoxWrapper>
            <Title>{question.title}</Title>
            <Desc>{question.desc}</Desc>
            <Body
                type={question.type}
                answer={answer}
                setAnswer={setAnswer}
                options={question.options}
            />
            <ActionButtons />
        </QuestionBoxWrapper>
    );
}

const QuestionBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
export default QuestionBox;
