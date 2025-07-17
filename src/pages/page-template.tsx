import Header from '../components/header';
import SEOHead from '../components/seo-head';
import type { PropsWithChildren } from 'react';

type pageTemplateProps = {
    pageTitle: string;
    seoPageKey?: 'home' | 'about' | 'skills' | 'cv' | 'projects' | 'gsoc' | 'vm-connect' | 'master-thesis';
}

export default function PageTemplate(props: PropsWithChildren<pageTemplateProps>) {
    return (
        <>
            <SEOHead pageKey={props.seoPageKey} />
            <div className="min-h-screen w-full bg-theme-bg-primary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Header />
                    <main className="py-8 sm:py-12">
                        <div className="max-w-2xl mx-auto w-full">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-6 sm:mb-8 gradient-text">
                                {props.pageTitle}
                            </h1>
                            <div className="space-y-4 sm:space-y-6 w-full">
                                {props.children}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
