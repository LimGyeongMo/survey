import styled from "styled-components";
import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

function Body({ type, answer, setAnswer, options }) {
    let InputComponent = null;
    InputComponent = TextInput;
    if (type === "select") {
        InputComponent = SelectInput;
    } else if (type === "textarea") {
        InputComponent = TextAreaInput;
    } else if (type === "text") {
        InputComponent = TextInput;
    }

    return (
        <BodyWrapper>
            <InputComponent
                answer={answer}
                setAnswer={setAnswer}
                options={options}
            />
        </BodyWrapper>
    );
}

const BodyWrapper = styled.div`
    padding: 0 68px 0 38px;
    flex: 1;
    justify-content: center;
`;
export default Body;
