type SkillCardProps = {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function SkillCard({ title, children, className = '' }: SkillCardProps) {
    return (
        <div className={`relative rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm ${className}`}
        >
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                    {title}
                </h2>
                <div className="text-gray-700 dark:text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
} 