export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'soft-3d': '0 32px 80px rgba(15, 23, 42, 0.15)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(255,255,255,0.25), transparent 40%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.9s ease-out both',
      },
    },
  },
  plugins: [],
};
