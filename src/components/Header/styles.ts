import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: #3e67b1;
    padding: 0px 16px;
`;

export const LeftContentHeader = styled.div`
    cursor: pointer;
    h1 {
        color: white;
        font-size: 25px;
    }
`;

export const MiddleContentHeader = styled.div`
    h1 {
        color: white;
        font-size: 40px;
    }
`;

export const RightContainerHeader = styled.div`
    display: flex;
    align-items: center;
    border-radius: 16px;
    gap: 8px;
    cursor: pointer;

    span {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -0.3px;
    }

`;

export const RightContentHeader = styled.div`
    display: flex;
    align-items: center;
    border-radius: 16px;
    padding: 12px;
    cursor: pointer;

    
    &:hover{
        background-color: #0f4098;
    }
`;

export const RightContentHeaderCreateLecture = styled.div`
    display: flex;
    align-items: center;
    border-radius: 16px;
    padding: 12px;
    cursor: pointer;

    &:hover{
        background-color: #0f4098;
    }
`;