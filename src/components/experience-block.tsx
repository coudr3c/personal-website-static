type ExperienceBlockProps = {
    position: string;
    company: string;
    location: string;
    timePeriodFrom: string;
    timePeriodTo: string;
    keywords?: string;
    children: React.ReactNode;
}

export default function ExperienceBlock(props: ExperienceBlockProps) {
    return (
        <div className="relative">
            <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm"
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{props.position}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{props.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-500">
                        <span>{props.timePeriodFrom} - {props.timePeriodTo}</span>
                        <div className="text-gray-500 dark:text-gray-400">{props.location}</div>
                    </div>
                </div>
                
                <div className="prose dark:prose-dark max-w-none">
                    {props.children}
                </div>
                
                {props.keywords && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {props.keywords.split(', ').map((keyword, index) => (
                            <span 
                                key={index}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
