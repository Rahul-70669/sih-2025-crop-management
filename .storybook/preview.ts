import type { Preview } from '@storybook/react-vite';
import '../src/index.css'; // Import global styles

const preview: Preview = {
  parameters: {
    // Control panel configuration
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    // Background color options
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
      ],
    },
  },
  decorators: [],
};

export default preview;