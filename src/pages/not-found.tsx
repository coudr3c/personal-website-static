import { Link } from 'react-router';
import { useTranslation } from '../i18n/context';

export default function NotFound() {
    const { t } = useTranslation();
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-theme-bg-primary">
            <div className="text-center p-8">
                <h1 className="text-6xl font-bold text-theme-text-primary mb-4">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-theme-text-secondary mb-6">
                    {t.error.notFound}
                </h2>
                <p className="text-theme-text-secondary mb-8">
                    {t.error.notFoundDescription}
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {t.error.goHome}
                </Link>
            </div>
        </div>
    );
}