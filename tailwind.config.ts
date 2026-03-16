import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#070709',
        electric: '#00A3FF',
        warm: '#FFB020',
        sunset: '#FF5E7E',
        aqua: '#00E0A4'
      },
      backgroundImage: {
        gradientRio: 'linear-gradient(135deg, #070709 0%, #101430 40%, #1E0A24 100%)'
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(255,255,255,0.05), 0 12px 40px rgba(0,163,255,0.22)'
      }
    }
  },
  plugins: []
};

export default config;
