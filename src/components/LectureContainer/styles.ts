import styled from 'styled-components'

export const LectureContainer = styled.div`
    display: flex;
    gap: 16px;
    background-color: #cec6c63b;
    padding: 8px;
    border-radius: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

export const LectureLeftContent = styled.div`

    span {
        color: #87cefa;
        font-size: 16px;
        font-weight: 700;
    }
`;

export const LectureMiddleContent = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    
    span {
        color: #87cefa;
        font-size: 16px;
        font-weight: 700;
    }
`;


