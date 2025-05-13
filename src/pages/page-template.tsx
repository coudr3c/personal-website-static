import Header from '../components/header';
import type { PropsWithChildren } from 'react';

type pageTemplateProps = {
    pageTitle: string
}

export default function PageTemplate(props: PropsWithChildren<pageTemplateProps>) {
    return (
        <>
            <head title="coudr3c">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </head>
            <div className="flex min-h-screen flex-col items-center bg-zinc-200 text-gray-950 lg:justify-center lg:p-8">
                <Header>
                </Header>
                <div className="flex grid grid-cols-3 w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <div className='col-start-2 grid grid-rows gap-5'>
                        <h1 className="flex text-5xl justify-center ">{props.pageTitle}</h1>
                        {props.children}
                    </div>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
