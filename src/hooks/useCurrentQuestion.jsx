import { useRecoilValue } from "recoil";
import { questionsState } from "../stores/questions/atoms";
import { useStep } from "./useStep";

export function useCurrentQuestion() {
    const step = useStep();
    const question = useRecoilValue(questionsState);

    return question[step];
}
