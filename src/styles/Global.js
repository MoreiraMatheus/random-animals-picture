import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    main{
        background-color: #ccc;
        width: 600px;
        height: 600px;
        border-radius: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
`