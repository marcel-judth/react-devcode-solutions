import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
        h2{
            font-size: 2rem;
        }
    }
    @media (max-width: 1300px){
        font-size: 70%
    }
}

body {
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

button{
    font-weight: bold;
    font-size: 1.1 rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color:  #23d997;
        color: white;
    }
}

h2{
    font-weight: normal;
    font-size: 2.5rem;
}
h3{
    color: white;
}
h4{
    font-weight:bold;
    font-size: 1.8rem;
}
a{
    font-size: 1.1rem;
}
span{
    font-weight: normal;
    color:#23d997;
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

@media (max-width: 800px) {
     p {
      padding: 1rem 0rem !important;
    }

    button {
        padding: 0.8rem 2rem;
            font-size: 0.9 rem;
    }
}
`;

export default GlobalStyle;
