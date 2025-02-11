import { selector } from "recoil";
import getSurvey from "../../services/getSurvey";

export const surveyState = selector({
    key: "surveyState",
    get: async () => {
        const res = await getSurvey(window.location.pathname.split("/")[2]);

        return res.data;
    },
});
