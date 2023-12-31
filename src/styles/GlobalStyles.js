import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        // $color-primary: #f59a83;
        --color-primary: #f38e82;
        --color-grad-1: #fbdb89;
        --color-grad-2: #f48982;
    
        --color-grey-light-1: #f9f5f3; // Light background
        --color-grey-light-2: #f2efee; // Light lines
        --color-grey-light-3: #d3c7c3; // Light text (placeholder)
        --color-grey-dark-1: #615551; // Normal text
        --color-grey-dark-2: #918581; // Lighter text
    
        --gradient: linear-gradient(to right bottom, var(--color-grad-1), var(--color-grad-2));
    
        --bp-large: 78.15em; // 1250px
        --bp-medium: 61.25em; // 980px
        --bp-small: 37.5em; // 600px
        --bp-smallest: 31.25em; // 500px
    }
    

    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;

        @media only screen and (max-width: $bp-medium) {
            font-size: 50%;
        }
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        color: var(--color-grey-dark-1);
        background-image: var(--gradient);
        background-size: cover;
        background-repeat: no-repeat;
        min-height: calc(100vh - 2 * 4vw);
    } 
`;

export default GlobalStyles;
