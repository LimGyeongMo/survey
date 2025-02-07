import styled from "styled-components";

import { useRecoilValue } from "recoil";
import testWithComma from "../../stores/test/testWithComma";
import axios from "axios";

function CompletionPage() {
    const test = useRecoilValue(testWithComma);

    axios.get("http://localhost:5173").then((res) => {
        console.log(res.data);
    });
    return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
    text-align: center;
    // background-color: aqua;
    padding: 4em;
`;
CompletionPageWrapper.Title = styled.h1`
    font-size: 2em;
`;
CompletionPageWrapper.Body = styled.p``;

export default CompletionPage;
