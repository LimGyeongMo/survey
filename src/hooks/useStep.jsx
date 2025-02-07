import { useParams } from "react-router";

export function useStep() {
    const param = useParams();
    const step = parseInt(param.step);

    return step;
}
