import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${css`
    @font-face {
      font-display: swap;
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('/assets/fonts/static/SpaceGrotesk-Medium.ttf') format('truetype');
    }

    @font-face {
      font-display: swap;
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/assets/fonts/static/SpaceGrotesk-Bold.ttf') format('truetype');
    }

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      font-synthesis: none;
    }
    img,
    picture,
    svg,
    video {
      display: block;
      max-width: 100%;
    }

    ul,
    ol {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button,
    input,
    textarea,
    select {
      font: inherit;
      border: none;
      outline: none;
    }

    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.xsmall};
        min-width: 320px;
        min-height: 100vh;
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        padding: 2rem ${theme.spacings.xsmall} 6rem;
      }
    `}
  `}
`;

export default GlobalStyles;
