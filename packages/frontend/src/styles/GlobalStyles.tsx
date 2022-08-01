import { Global } from '@emotion/react'
import 'nprogress/nprogress.css'
import 'react-tippy/dist/tippy.css'
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    ${tw`bg-white text-black`}
    ${tw`min-h-screen h-screen relative`}
  }
  #__next,
  #__next > div {
  }
  #nprogress > .bar {
  }
  #nprogress > .spinner {
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
