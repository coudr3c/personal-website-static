import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react';

export type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Function to get the system preference
    const getSystemPreference = (): boolean => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    // Initialize theme with system preference or saved theme
    const getInitialTheme = (): Theme => {
        if (typeof window === 'undefined') return 'light';
        
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
            return savedTheme;
        }
        
        // If no saved theme, use system preference
        return getSystemPreference() ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    // Apply theme whenever it changes
    useEffect(() => {
        // If this is the first load and no saved theme exists, get system preference
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as Theme;
            if (!savedTheme || !['light', 'dark'].includes(savedTheme)) {
                const systemPreference = getSystemPreference() ? 'dark' : 'light';
                setTheme(systemPreference);
                return;
            }
        }
        
        // Apply theme to DOM - force override system preferences
        const root = document.documentElement;
        
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
        
        // Remove any existing theme classes
        root.classList.remove('dark', 'light');
        
        // Add the selected theme class
        root.classList.add(theme);
        
        // Force color-scheme to override browser defaults
        root.style.colorScheme = theme;
        
        // Set data attribute for additional CSS targeting
        root.setAttribute('data-theme', theme);
    }, [theme]);

    // Simple toggle between light and dark
    const toggleTheme = useCallback(() => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }, [theme]);

    const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}