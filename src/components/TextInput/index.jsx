import styled from "styled-components";

function TextInput({ answer = "", setAnswer, options }) {
    return (
        <Input
            type="text"
            value={answer}
            onChange={(e) => {
                setAnswer(e.target.value);
            }}
            placeholder={options.placeholder}
            {...(options?.max && { maxLength: options?.max })}
        />
    );
}

const Input = styled.input`
    border: 1px solid #e0e0e0;
    border-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    line_height: 21px;
    padding: 12px 18px;
`;
export default TextInput;
