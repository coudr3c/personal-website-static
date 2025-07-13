import { Component, type ReactNode } from 'react';
import { useTranslation } from '../i18n/context';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback onRetry={() => this.setState({ hasError: false })} />;
        }

        return this.props.children;
    }
}

function ErrorFallback({ onRetry }: { onRetry: () => void }) {
    const { t } = useTranslation();
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary">
            <div className="text-center p-8">
                <h1 className="text-2xl font-bold text-theme-text-primary mb-4">
                    {t.error.somethingWrong}
                </h1>
                <p className="text-theme-text-secondary mb-6">
                    {t.error.unexpectedError}
                </p>
                <button
                    onClick={onRetry}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {t.error.tryAgain}
                </button>
            </div>
        </div>
    );
}