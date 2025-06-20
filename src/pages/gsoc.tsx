import PageTemplate from './page-template';
import { useTranslation } from '../i18n/context';

export default function GSoC() {
    const { t } = useTranslation();

    return (
        <PageTemplate pageTitle={t.pages.gsoc}>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                        Google Summer of Code 2017
                    </h2>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
                        Implementing Java Concurrency in Scala Native
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 mb-8">
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Project Overview</h3>
                        <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                            <li><strong>Year:</strong> 2017</li>
                            <li><strong>Organization:</strong> Scala Native</li>
                            <li><strong>Mentor:</strong> Denys Shabalin</li>
                            <li><strong>Duration:</strong> Summer 2017</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Scala', 'C++', 'Java', 'POSIX Threads', 'Atomics', 'Compilers'].map((tech, index) => (
                                <span key={index} className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Project Goal</h3>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        The objective was to port Java concurrency components to Scala Native, enabling multithreaded 
                        programming capabilities in the Scala Native ecosystem. This involved implementing low-level 
                        threading primitives and high-level concurrency utilities.
                    </p>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Key Components Implemented</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Low-Level Primitives</h4>
                            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1">
                                <li>• POSIX thread bindings</li>
                                <li>• Low-level atomics using C++ std::atomic</li>
                                <li>• java.util.concurrent.atomic</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg">
                            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">High-Level Components</h4>
                            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1">
                                <li>• java.util.concurrent.locks</li>
                                <li>• java.lang.Thread, ThreadLocal, ThreadGroup</li>
                                <li>• Partial ForkJoinPool implementation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Major Challenges</h3>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <ul className="text-zinc-700 dark:text-zinc-300 space-y-3">
                            <li className="flex items-start">
                                <span className="text-yellow-600 dark:text-yellow-400 mr-3">⚠️</span>
                                <span><strong>Young Project:</strong> Scala Native was still in early development with incomplete compiler support</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-yellow-600 dark:text-yellow-400 mr-3">⚠️</span>
                                <span><strong>Missing Features:</strong> No access to `synchronized` method, requiring creative workarounds</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-yellow-600 dark:text-yellow-400 mr-3">⚠️</span>
                                <span><strong>Complex Dependencies:</strong> Intricate interdependencies between concurrency components</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Technical Achievements</h3>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <ul className="text-zinc-700 dark:text-zinc-300 space-y-3">
                            <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-3">✅</span>
                                <span>Successfully ported Harmony project's concurrency code to Scala Native</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-3">✅</span>
                                <span>Implemented thread-safe atomics using C++ standard library</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-3">✅</span>
                                <span>Created POSIX-based thread implementations with proper lifecycle management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-600 dark:text-green-400 mr-3">✅</span>
                                <span>Contributed merged code that became part of the official Scala Native project</span>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Learning Outcomes</h3>
                    <div className="prose prose-zinc dark:prose-invert">
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            This project provided invaluable experience in multiple domains:
                        </p>
                        <ul className="text-zinc-700 dark:text-zinc-300">
                            <li><strong>Compiler Engineering:</strong> Deep understanding of how compilers handle concurrency</li>
                            <li><strong>Systems Programming:</strong> Extensive work with C++ and POSIX threading</li>
                            <li><strong>Language Design:</strong> Insights into Scala and Java concurrency models</li>
                            <li><strong>Open Source Collaboration:</strong> Experience contributing to a major open source project</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Acknowledgements</h3>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                            Special thanks to <strong>Denys Shabalin</strong> for his excellent mentorship throughout 
                            the project, and to the entire Scala Native community for their support and guidance.
                        </p>
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            Grateful to <strong>Google Summer of Code</strong> for providing this incredible opportunity 
                            to contribute to open source software and gain hands-on experience with cutting-edge technology.
                        </p>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Impact & Future Work</h3>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                        The implementations contributed during GSoC 2017 became part of the official Scala Native project, 
                        enabling multithreaded programming for thousands of developers in the Scala ecosystem.
                    </p>
                    <div className="flex gap-4">
                        <a 
                            href="https://github.com/scala-native/scala-native" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                        >
                            View Scala Native Project →
                        </a>
                        <a 
                            href="https://github.com/coudr3c/scala-native" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                        >
                            View My Contributions →
                        </a>
                    </div>
                </section>
            </div>
        </PageTemplate>
    );
}
