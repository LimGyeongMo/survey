import styled from "styled-components";

function Desc({ children }) {
    return <DescWrapper>{children}</DescWrapper>;
}

const DescWrapper = styled.h4`
    font-size: 18px;
    line-height: 21px;
    margin-top: 16px;
    margin-left: 36px;
    margin-bottom: 60px;
    color: #463c3c;
`;

export default Desc;
