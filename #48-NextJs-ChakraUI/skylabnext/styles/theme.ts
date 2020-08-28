import { theme, DefaultTheme } from '@chakra-ui/core';

/*Copiando o tema padrão do Chakra UI.*/
const customTheme: DefaultTheme = {
  ...theme,
  fonts: { /*Definindo as fontes.*/
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights, /*Copiando o padrão.*/
    normal: 400,
    medium: 600,
    bold: 700,
  },
  radii: { /*Border Radius.*/
    ...theme.radii,
    sm: '5px',
    md: '8px',
  },
  colors: {
    ...theme.colors,
    purple: {
      ...theme.colors.purple,
      500: '#8257e5', /*No Chakra UI as cores variam de 100 a 1000 (mais claro ao mais escuro).*/
    },
    gray: {
      ...theme.colors.gray,
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: '#121214'
    },
  },
}

export default customTheme;