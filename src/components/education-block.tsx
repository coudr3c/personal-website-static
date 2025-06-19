type EducationBlockProps = {
    diploma: string;
    university: string;
    location: string;
    timePeriodFrom: string;
    timePeriodTo: string;
    children: React.ReactNode;
}

export default function EducationBlock(props: EducationBlockProps) {
    return (
        <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm"
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{props.diploma}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{props.university}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                    <span>{props.timePeriodFrom} - {props.timePeriodTo}</span>
                    <div className="text-gray-500 dark:text-gray-400">{props.location}</div>
                </div>
            </div>
            
            <div className="prose dark:prose-dark max-w-none text-gray-600 dark:text-gray-400">
                {props.children}
            </div>
        </div>
    );
}
