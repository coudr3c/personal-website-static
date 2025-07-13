import { memo } from 'react';
import { Link } from 'react-router';

type NavigationLinkProps = {
    children: React.ReactNode;
    to?: string;
    href?: string;
    external?: boolean;
    onClick?: () => void;
    isMobile?: boolean;
};

function NavigationLink({ children, to, href, external, onClick, isMobile = false }: NavigationLinkProps) {
    const baseClasses = "px-3 py-2 font-medium text-theme-text-secondary hover:text-blue-600 hover:bg-theme-surface-hover rounded-md transition-colors";
    const sizeClasses = isMobile ? "block text-base" : "text-sm";
    const className = `${baseClasses} ${sizeClasses}`;
    
    if (external && href) {
        return (
            <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                {children}
            </a>
        );
    }
    
    return to ? (
        <Link to={to} className={className} onClick={onClick}>
            {children}
        </Link>
    ) : null;
}

export default memo(NavigationLink);