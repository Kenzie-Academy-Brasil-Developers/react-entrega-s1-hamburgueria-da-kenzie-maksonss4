import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --primary-1: #27AE60;
        --primary-2: #93D7AF;
        --second: #EB5757;
        --gray-1: #333333;
        --gray-2: #828282;
        --gray-3: #E0E0E0;
        --gray-4: #F5F5F5;
        --gray-remover: #BDBDBD;
        --white: #FFFFFF;
        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }
    
    button{
        cursor: pointer;
    }
`