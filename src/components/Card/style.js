import styled from "styled-components";

export const LiContainer = styled.li`
    border: 1px solid var(--gray-3);
    border-radius: 5px;
    min-width: 200px;
    animation-duration: 0.7s;
    animation-name: card;

    @keyframes card {
        from {
            padding-right: 50px;
        }

        to {
            padding-right: 0;
        }
    }

    figure{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--gray-4);
    }

    img{
        width: 150px;
    }

    h3{
        font-size: 19px;
        font-weight: 700;
        max-width: 18ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    span{
        color: var(--gray-2);
        font-size: 12px;
    }

    p{
        color: var(--primary-1);
        font-size: 14px;
    }

    div{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (min-width: 900px) {
        max-width: 200px;
    }
`