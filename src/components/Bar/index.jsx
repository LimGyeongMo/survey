import styled from "styled-components";
// status = 'pending' | 'in-progress' | 'done'
const Bar = styled.div`
    width: 120px;
    height: 8px;
    border-radius: 16px;
    background-color: ${({ status }) => {
        switch (status) {
            case "pending":
                return "#f5f5f5";
            case "in-progress":
                return "#6542F1";
            case "done":
                return "#BAA9FF";
            default:
                return "#f5f5f5";
        }
    }};
`;

export default Bar;
