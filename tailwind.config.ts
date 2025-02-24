import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajusta las rutas según la estructura de tu proyecto
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        // eslint-disable-next-line quotes
        'options-icon': "url('/src/assets/images/options-icon.svg')",
      },
    },
  },
  plugins: [],
};

export default config;