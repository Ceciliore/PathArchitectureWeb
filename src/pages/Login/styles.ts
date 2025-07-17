import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 90px);
`;

export const InputsUser = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    gap: 8px;
`;

export const FormBox = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const ToggleButtons = styled.div`
    display: flex;
    border-radius: 25px;
    background: #eee;
    overflow: hidden;

    button {
        flex: 1;
        padding: 0.6rem 0;
        border: none;
        cursor: pointer;
        font-weight: bold;
        background: transparent;
        transition: background 0.3s;

        &.active {
        background: linear-gradient(to right, #3e67b1, #3e67b1);
        color: white;
        }
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        margin-bottom: 0.3rem;
        font-size: 0.9rem;
        color: #333;
    }

    input {
        padding: 0.6rem;
        border: 1px solid #ddd;
        border-radius: 8px;
    }
`;

export const CheckboxGroup = styled.div`
    font-size: 0.85rem;
    color: #555;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        margin-right: 4px;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 0.7rem;
    background: linear-gradient(to right, #3e67b1, #3e67b1);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
    background: linear-gradient(to right, #3e67b1, #3e67b1);
    }
`;
