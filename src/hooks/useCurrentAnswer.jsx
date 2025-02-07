import { useRecoilState } from "recoil";
import answersState from "../stores/answers/atom";
import { useStep } from "./useStep";

export function useCurrentAnswer() {
    const step = useStep();

    const [answers, setAnswers] = useRecoilState(answersState);
    const answer = answers[step];

    const setAnswer = (newAnswer) => {
        setAnswers((answers) => {
            const updatedAnswers = [...answers];
            updatedAnswers[step] = newAnswer;
            return updatedAnswers;
        });
    };

    return [answer, setAnswer];
}
