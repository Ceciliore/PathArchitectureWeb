import styled from 'styled-components'

export const HomepageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const HomepageContent = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    width: 50%;
    margin: 16px;
    padding: 16px;
    border-radius: 8px;
    background: #fff;
`;
