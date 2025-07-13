import { memo, useCallback } from 'react';

type ThemeToggleProps = {
    toggleTheme: () => void;
    getEmojiContent: () => string;
    getTitle: () => string;
};

function ThemeToggle({ toggleTheme, getEmojiContent, getTitle }: ThemeToggleProps) {
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    }, [toggleTheme]);

    return (
        <span
            onClick={toggleTheme}
            className="text-2xl cursor-pointer transition-opacity hover:opacity-75"
            title={getTitle()}
            role="button"
            tabIndex={0}
            aria-label={getTitle()}
            onKeyDown={handleKeyDown}
        >
            {getEmojiContent()}
        </span>
    );
}

export default memo(ThemeToggle);