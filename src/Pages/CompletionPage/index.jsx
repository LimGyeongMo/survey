import styled from "styled-components";
function CompletionPage() {
    return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div`
    text-align: center;
    background-color: aqua;
    padding: 4em;
`;
CompletionPageWrapper.Title = styled.h1`
    font-size: 2em;
`;
CompletionPageWrapper.Body = styled.p``;
export default CompletionPage;
