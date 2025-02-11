import { useParams } from "react-router";

export function useSurveyId() {
    const param = useParams();
    const useSurveyId = parseInt(param.surveyId);

    return useSurveyId;
}
