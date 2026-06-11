import { create } from 'storybook/theming/create';

/**
 * Tema da interface do Storybook com a identidade FICMA.
 * (Estiliza a "casca" do Storybook — não os componentes.)
 */
export default create({
  base: 'light',

  brandTitle: 'FICMA · Design System',
  brandTarget: '_self',

  // Marca
  colorPrimary: '#02395C',   // brand/primary
  colorSecondary: '#2AAC5E', // brand/secondary (acentos e seleção)

  // App
  appBg: '#FCFCFC',          // neutral/50
  appContentBg: '#FFFFFF',   // neutral/0
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#F4F4F4', // neutral/150
  appBorderRadius: 8,

  // Tipografia
  fontBase: '"Blinker", system-ui, sans-serif',
  fontCode: 'ui-monospace, "SFMono-Regular", Menlo, monospace',

  // Texto
  textColor: '#262626',      // neutral/900
  textInverseColor: '#FFFFFF',
  textMutedColor: '#8F8F8F', // neutral/500

  // Toolbar
  barBg: '#FFFFFF',
  barTextColor: '#666666',   // neutral/600
  barSelectedColor: '#02395C',
  barHoverColor: '#2AAC5E',

  // Inputs
  inputBg: '#FFFFFF',
  inputBorder: '#D8D8D8',    // neutral/200
  inputTextColor: '#262626',
  inputBorderRadius: 8,
});
