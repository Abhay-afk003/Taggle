/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			'primary-light': '#6366F1',
  			'primary-dark': '#8B5CF6',
  			'surface-light': 'rgba(255, 255, 255, 0.05)',
  			'surface-medium': 'rgba(255, 255, 255, 0.08)',
  			'surface-dark': 'rgba(255, 255, 255, 0.12)',
  			success: '#10B981',
  			warning: '#F59E0B',
  			error: '#EF4444',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: 'hsl(var(--muted))',
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			brand: 'hsl(var(--brand))',
  			'brand-foreground': 'hsl(var(--brand-foreground))',
  			'muted-foreground': 'hsl(var(--muted-foreground))'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'"Segoe UI"',
  				'Roboto',
  				'"Helvetica Neue"',
  				'Arial',
  				'sans-serif'
  			],
  			heading: [
  				'Poppins',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		fontSize: {
  			'responsive-xs': 'clamp(0.75rem, 1vw, 0.875rem)',
  			'responsive-sm': 'clamp(0.875rem, 1.5vw, 1rem)',
  			'responsive-base': 'clamp(1rem, 2vw, 1.125rem)',
  			'responsive-lg': 'clamp(1.125rem, 2.5vw, 1.25rem)',
  			'responsive-xl': 'clamp(1.25rem, 3vw, 1.5rem)',
  			'responsive-2xl': 'clamp(1.5rem, 3.5vw, 2rem)',
  			'responsive-3xl': 'clamp(1.875rem, 4vw, 2.5rem)',
  			'responsive-4xl': 'clamp(2.25rem, 5vw, 3rem)'
  		},
  		spacing: {
  			'responsive-sm': 'clamp(0.5rem, 2vw, 1rem)',
  			'responsive-md': 'clamp(1rem, 3vw, 1.5rem)',
  			'responsive-lg': 'clamp(1.5rem, 4vw, 2rem)',
  			'responsive-xl': 'clamp(2rem, 5vw, 3rem)',
  			'responsive-2xl': 'clamp(3rem, 6vw, 4rem)'
  		},
  		animation: {
  			'gradient-flow': 'gradient-flow 4s ease-in-out infinite',
  			'pulse-slow': 'pulse-optimized 4s ease-in-out infinite',
  			'fade-in': 'fade-in 0.6s ease-out forwards',
  			'slide-up': 'slide-up 0.6s ease-out forwards',
  			'scale-in': 'scale-in 0.6s ease-out forwards'
  		},
  		keyframes: {
  			'gradient-flow': {
  				'0%, 100%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				}
  			},
  			'pulse-optimized': {
  				'0%, 100%': {
  					opacity: '0.4',
  					transform: 'scale(1)'
  				},
  				'50%': {
  					opacity: '0.8',
  					transform: 'scale(1.05)'
  				}
  			},
  			'fade-in': {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			'slide-up': {
  				from: {
  					opacity: '0',
  					transform: 'translateY(2rem)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'scale-in': {
  				from: {
  					opacity: '0',
  					transform: 'scale(0.95)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		maxWidth: {
  			container: '1280px',
  			'8xl': '88rem',
  			'9xl': '96rem'
  		},
  		screens: {
  			'xs': '320px',
  			'sm': '640px',
  			'md': '768px',
  			'lg': '1024px',
  			'xl': '1280px',
  			'2xl': '1536px',
  			'3xl': '1920px'
  		},
  		transitionDuration: {
  			'150': '150ms',
  			'200': '200ms',
  			'250': '250ms'
  		},
  		backdropBlur: {
  			'xs': '2px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};