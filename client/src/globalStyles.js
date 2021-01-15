/* https://paletasdecolores.com/paleta-de-colores-2279/ */

import { createGlobalStyle, } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;


    /* ======= */
    --mainClr: #fbe10f;
    --altClr: #1544c0;
    --lightClr: #f9f9f9;
    --darkClr: #5e6072;
    --ctaInvClr: #5210ac;
    --ctaClr: #f86449;

    --yellowClr: #ffc107;
    --blueClr: #007bff;
    --purpleClr: #5210ac;
    --orangeClr: #fd7e14;


    /* other variables  */
    --header-height: 80px;
  }

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--lightClr);
    color: var(--darkclr);
    font-family: 'Encode Sans Expanded', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  .title {
    position: relative;
      margin-bottom: 2rem;

    font-family: 'Bad Script', cursive;
    font-size: 2rem;
    
    color: var(--blueClr);
    text-align: center;

    &:after {
      content: '';
      height:3px;
      width: 5rem;
      background-color: var(--blueClr);

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }

  .error {
    padding: .75rem;
    margin: .75rem 0;
    background-color: rgba(255, 0, 0, 0.658);
    color: white;
    font-size: bolder;
  }

  input {
    display: block;
    height: 45px;
    width: 100%;
    margin: 15px 0;
    border: none;
    padding: 10px;
    font-size: 20px;
    box-shadow: 2px 2px 2px rgba(0,0,0,.6)
}
`;

// export const Button = styled.button`

//   background-color: ${({primary}) => (primary ? 'var(--ctaClr)' : 'var(--ctaInvClr)')};
//   color: var(--lightClr);
//   white-space: nowrap;
//   padding: ${({big}) => (big ? '12px 64px' : '10px 20px' )};
//   cursor: pointer;

//   margin-bottom: 10rem;

//   border: none;
//   outline: none;

//   &:hover {
//     background-color: ${({primary}) => (primary ? 'var(--ctaInvClr)' : 'var(--ctaClr)')};
//     transition: all .5s ease;
//   }
// `;
