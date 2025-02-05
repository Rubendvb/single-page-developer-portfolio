import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-display: swap;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/assets/fonts/static/SpaceGrotesk-Medium.ttf') format('ttf');
  }

  @font-face {
    font-display: swap;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/assets/fonts/static/SpaceGrotesk-Bold.ttf') format('ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-synthesis: none;
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
    }
  `}
  
`
export default GlobalStyles
