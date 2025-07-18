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

interface NewLectureContainerProps {
    onlyUser?: boolean;
}

export const NewLectureContainer = styled.div<NewLectureContainerProps>`
    background-color: #fff;
    margin: ${props => props.onlyUser ? '16px 0' : '16px'};
    width: ${props => props.onlyUser ? '' : '80%'};
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 4px;

    span{
        font-size: 32px;
        font-weight: 700;
        color: black;
    }
`;

export const NewLectureContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #cec6c63b;
    border-radius: 8px;
    gap: 12px;
    margin-top: 12px;
    overflow-y: auto;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        background-color: #cec6c666;
    }
`;

export const NewLectureLeftContent = styled.div`
    display: flex;
    gap: 8px;

    p {
        font-size: 16px;
        font-weight: 700;
        color: #000;
    }
`;

export const NewLectureHourLeftContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c4d8e5a3;
    width: 3rem;
    padding: 16px;
    font-weight: 700;
`;

export const NewLectureStringLeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px;
    
    h4{
        white-space: nowrap;
        margin: 0;
        font-size: 18px;
        font-weight: 700;
    }
    h5{
        margin: 0;
        color: rgb(118, 127, 141);
        font-size: 14px;
    }
`;

export const NewLectureRightContent = styled.div`
    padding: 8px;
`;


