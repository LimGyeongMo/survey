import { selector } from "recoil";
import { surveyState } from "./surveyState";

export const questionsLengthState = selector({
    key: "questionsLengthState",
    get: ({ get }) => {
        const questions = get(surveyState).questions;
        return questions.length;
    },
});
