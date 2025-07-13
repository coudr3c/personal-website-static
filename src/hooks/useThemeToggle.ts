import { useTheme } from '../contexts/theme-context';

export function useThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    const getEmojiContent = (): string => {
        return theme === 'dark' ? '🌙' : '☀️';
    };

    const getTitle = (): string => {
        return theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    };

    return {
        theme,
        toggleTheme,
        getEmojiContent,
        getTitle,
    };
}