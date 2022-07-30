import styled from "styled-components";

export const MainContainer = styled.main`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
    width: 100vw;
    align-items: center;
    justify-content: center;

    .divButtonsFilter{
        display: flex;
        gap: 15px;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        
        button{
            background-color: var(--primary-1);
            border: 0;
            border-radius: 5px;
            padding: 4px 10px;
            color: var(--white);
        }
    }

    .filtersAndUl{
        display: flex;
        flex-direction: column;

    }

    @media (min-width: 900px){
        flex-direction: row;
        padding: 0px 100px;
        align-items: flex-start;
        gap: 30px;
    }
`