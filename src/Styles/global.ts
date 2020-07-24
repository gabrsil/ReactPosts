import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Raleway', sans-serif;
        box-sizing: border-box;
       
    }

    body, html, #root {
        max-height: 100vh;
        max-width: 100vw;
        
    }

    :root {
        --bgprimary: #efedf2;
        --color-icons: #a3a3a3;

    }

    input[type="text"] {
        border: 1px solid #cccccc;
        height: 40px;
        border-radius: 5px;
        color: #2b2828;
        background-color: transparent;
        padding: 10px;
      
    }

    select {
     
        border: 1px solid #cccccc;
        height: 40px;
        border-radius: 5px;
        color: #454545;
        background-color: transparent;
        padding: 10px;
    }
    
    input[type="submit"] {
        width: 320px;
        height: 40px;
        border: none;
        margin: 15px 0;
        padding: 10px;
        background-color: #6d40c2;
        /* background-color: transparent; */
        cursor: pointer;
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
        
        /* border: 1px solid #858585; */
    }
   
    

`
