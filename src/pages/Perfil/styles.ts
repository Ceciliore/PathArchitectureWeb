import styled from 'styled-components'

export const PerfilContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
`;

export const PerfilContent = styled.div`
    display: flex;
    gap: 49px;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const PerfilTopContent = styled.div`
    display: grid;

    h1{
        color: rgb(48, 55, 66);
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: -0.02em;
        margin: 8px 0px;
    }
    span{
        color: rgb(118, 127, 141);
        font-weight: 600;
        font-size: 0.938rem;
        line-height: 145%;
        letter-spacing: -0.01em;
    }
`;

export const PerfilTopInsideInformationContent = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(118, 127, 141, 0.1);
    border-top: 1px solid rgba(118, 127, 141, 0.1);
    gap: 10rem;
`;

export const PerfilLectureHistoricContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    flex-direction: column;
    gap: 16px;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    h1{
        color: rgb(48, 55, 66);
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: -0.02em;
        margin: 8px 0px;
    }
`;
