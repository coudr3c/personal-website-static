import { memo } from 'react';

type BaseBlockProps = {
    title: string;
    subtitle: string;
    location: string;
    timePeriodFrom: string;
    timePeriodTo: string;
    keywords?: string;
    children: React.ReactNode;
}

function BaseBlock(props: BaseBlockProps) {
    const keywords = props.keywords ? props.keywords.split(',').map(keyword => keyword.trim()) : [];

    return (
        <div className="relative">
            <div className="relative rounded-lg border border-theme-border bg-theme-surface p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-theme-text-primary">{props.title}</h3>
                        <p className="text-theme-text-secondary">{props.subtitle}</p>
                    </div>
                    <div className="text-sm text-theme-text-secondary sm:text-right">
                        <div>{props.timePeriodFrom} — {props.timePeriodTo}</div>
                        <div className="text-theme-text-secondary">{props.location}</div>
                    </div>
                </div>
                <div className="prose max-w-none text-theme-text-secondary">
                    {props.children}
                    {keywords.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {keywords.map((keyword, index) => (
                                <span
                                    key={index}
                                    className="tech-tag text-xs"
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default memo(BaseBlock);