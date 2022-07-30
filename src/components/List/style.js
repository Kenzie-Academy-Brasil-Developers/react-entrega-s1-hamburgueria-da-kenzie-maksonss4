import styled from "styled-components";

export const UlContainer = styled.ul`
    display: flex;
    overflow-x: scroll;
    gap: 10px;
    padding-bottom: 10px;
    width: 100vw;
    padding-left: 10px;

    @media (min-width: 900px){
        flex-wrap: wrap;
        padding: 0;
        width: inherit;
        overflow: unset;
    }
`