import { ThemeProvider } from '../contexts/theme-context';

type LayoutProps = {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
} 