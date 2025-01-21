import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
`;

export const SearchBarInput = styled.input`
    width: 80%;
    max-width: 600px;
    height: 3rem;
    border: 1px solid #D0D0D0;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0 1rem;

    @media (max-width: 768px) {
        width: 90%;
        font-size: 0.9rem;
    }
`;

export const SearchButton = styled.button`
    background-color: #FFFFFF;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 0.4rem 0.8rem;
    }
`;

export const SearchButtonImage = styled.img`
    width: 2rem;
    margin-left: 0.5rem;

    @media (max-width: 768px) {
        width: 1.5rem;
    }
`;
