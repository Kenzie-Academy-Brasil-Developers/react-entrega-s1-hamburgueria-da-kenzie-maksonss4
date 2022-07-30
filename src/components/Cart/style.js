import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--gray-4);
    border-radius: 0 0 5px 5px;
    width: 100%;   
    max-width: 450px;

    .cartTitle{
        background-color: var(--primary-1);
        padding: 5px;
        border-radius: 5px 5px 0 0px;
        color: var(--white);
    }
`

export const CartWithoutItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    padding: 60px 0;
    animation-duration: .7s;
    animation-name: cartVazio;

    @keyframes cartVazio {
        from{
            padding-left: 100px;
        }

        to{
            padding-left: 0px;
        }
    }

    p{
        font-size: 18px;
        font-weight: 700;
    }

    span{
        font-size: 14px;
        color: var(--gray-2);
    }
`

export const CartWithItens = styled.ul`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow-y: scroll;
    height: 150px;
    border-bottom: 2px solid var(--gray-3);

    @media (min-width: 900px) {
        height: 210px;
    }
`

export const ItemsCart = styled.li`
    display: flex;
    justify-content: space-between;
    animation-duration: .4s;
    animation-name: slidein;
    padding: 2px;

    @keyframes slidein {
        from {
            margin-left: 200px;
        }

        to {
            margin-left: 0;
        }
    }

    figure{
        background-color: var(--gray-3);
        border-radius: 10px;
    }

    img{
        width: 50px;
    }

    .descItemCart{
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-width: 110px;
    }

    .descItemCart p{
        font-size: 12px;
        color: var(--gray-2);
    }

    h3{
        max-width: 12ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
    }

    .divButtons{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .buttonRemove{
        height: max-content;
        border: 0;
        color: var(--gray-remover);
        border-radius: 10px;
        padding: 1px 10px;
    }

    .divQtd{
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;

        button{
            border: 0;
            border-radius: 50%;
            background-color: var(--primary-2);
            width: 15px;
            height: 15px;
        }
    }

    @media (min-width: 900px) {
        img{
            width: 85px;
        }
    }
`

export const DivTotalPrice = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    div{
        display: flex;
        justify-content: space-between;
    }

    button{
        border: 0;
        background-color: var(--gray-3);
        font-size: 16px;
        color: var(--gray-2);
        border-radius: 5px;
        padding: 5px 0;
    }

    p{
        color: var(--gray-1);
    }

    span{
        color: var(--gray-2);
    }

    
    
`