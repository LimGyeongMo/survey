import { selector } from "recoil";
import { questionsState } from "./atoms";

export const questionsLengthState = selector({
    key: "questionsLengthState",
    get: ({ get }) => {
        const questions = get(questionsState);
        return questions.length;
    },
});
