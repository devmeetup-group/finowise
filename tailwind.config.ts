/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx,tsx}',
    './components/**/*.{js,jsx,tsx}',
    './app/**/*.{js,jsx,tsx}',
    './src/**/*.{js,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',    
    },
    extend: {
      screens: {
        '2xl': '1440px',
      },
      fontFamily: {
        Urbanist: ['Urbanist', 'sans-serif'],
        Cabin: ['Cabin', 'Poppins', 'san-serif'],
        TurretRoad: ['Turret Road', 'sans-serif'],
      },
      colors: {
        'fino-green-100': '#2AAE7E',
        'fino-green-90': '#2EBD89',
        'fino-green-80': '#BFFFE8',
        'fino-green-70': '#00FFAA',
        'fino-blue-green': '#3CDED7',
        'fino-purple': '#C331E0',
        'fino-yellow': '#EDBA28',
        'fino-orange': '#F7562A',
        'fino-blue-70': '#4EC8F5',
        'fino-blue-100': '#2A61F7',
        'fino-grey': '#BCBCBC',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
