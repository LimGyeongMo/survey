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
        <InputComponent
            answer={answer}
            setAnswer={setAnswer}
            options={options}
        />
    );
}
export default Body;
