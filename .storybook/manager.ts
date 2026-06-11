import { addons } from 'storybook/manager-api';
import ficmaTheme from './theme';

addons.setConfig({
  theme: ficmaTheme,
  sidebar: { showRoots: true },
});
