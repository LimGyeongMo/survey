import { useRecoilValue } from "recoil";
import { surveyState } from "../stores/survey/surveyState";
import { useStep } from "./useStep";

export function useCurrentQuestion() {
    const step = useStep();
    const surveytData = useRecoilValue(surveyState);
    const question = surveytData?.questions || [];

    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:3001/surveys/${surveyId}`)
    //         .then((response) => {
    //             console.log(response.data);
    //             setSurveyData(response.data);
    //         });
    // }, [surveyId, setSurveyData]);

    return question[step];
}
