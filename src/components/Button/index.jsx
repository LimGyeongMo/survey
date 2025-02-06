import styled from "styled-components";
import { PRIMARY, SECONDARY, TERTIARY } from "../../constants/color";

const colorMap = {
    PRIMARY,
    SECONDARY,
    TERTIARY,
};

const Button = styled.button`
    padding: 16px 24px;
    width: 200px;

    color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};
    border-radius: 4px;
    border: none;
    font-weight: bold;

    &:hover {
        color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
        background-color: ${({ type }) =>
            colorMap[type].BUTTON.HOVER.BACKGROUND};
           border: ${({ type }) =>
               type === "TERTIARY"
                   ? `1px solid ${TERTIARY.BUTTON.HOVER.BOARDER}`
                   : "none"};
    }

    &:active {
        color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
        background-color: ${({ type }) =>
            colorMap[type].BUTTON.PRESSED.BACKGROUND};
           border: ${({ type }) =>
               type === "TERTIARY"
                   ? `1px solid ${TERTIARY.BUTTON.PRESSED.BOARDER}`
                   : "none"};
    }

    &:disabled {
       color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
        background-color: ${({ type }) =>
            colorMap[type].BUTTON.DISABLED.BACKGROUND};
           border: ${({ type }) =>
               type === "TERTIARY"
                   ? `1px solid ${TERTIARY.BUTTON.DISABLED.BOARDER}`
                   : "none"};
    }
    }
`;

export default Button;
