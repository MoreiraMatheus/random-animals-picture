import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`