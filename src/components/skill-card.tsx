import { memo } from 'react';

type SkillCardProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
}

function SkillCard({ title, children, className = '' }: SkillCardProps) {
    return (
        <div className={`relative rounded-lg border border-theme-border bg-theme-surface p-6 shadow-sm ${className}`}
        >
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-theme-text-primary">
                    {title}
                </h2>
                <div className="text-theme-text-secondary">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default memo(SkillCard); 