import { createGlobalStyle } from 'styled-components'

export const cores = {
  Corfundo: '#FFF8F2',
  CorPrincipal: ' #E66767'
}

export const GlobalCss = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Roboto", serif;
text-decoration: none;
list-style: none;

}
body {
background-color: ${cores.Corfundo};
color: ${cores.CorPrincipal};
}
`
