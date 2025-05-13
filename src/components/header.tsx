import { Link } from 'react-router';

export default function Header() {
    return (
        <header className="grid grid-cols-3 grid-rows-2 mb-6 w-full text-sm not-has-[nav]:hidden">
            <div className='flex justify-start gap-4'>
                <Link
                    to='/'
                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-gray-950 hover:border-[#1915014a]"
                >
                    Home
                </Link>
            </div>
            <div className="col-start-2 row-span-2 flex justify-center object-cover">
                <img className='size-20 rounded-xl'
                    src="bp.jpg" 
                />
            </div>
            <div>
                <nav className="flex items-center justify-end gap-4">
                    <>
                        <Link
                            to='/about'
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-gray-950 hover:border-[#1915014a]"
                        >
                            About
                        </Link>
                        <Link
                            to='/skills'
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-gray-950 hover:border-[#1915014a]"
                        >
                            Skills
                        </Link>
                        <Link
                            to='/cv'
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-gray-950 hover:border-[#1915014a]"
                        >
                            CV
                        </Link>
                        <a
                            href={'resume_cv.pdf'}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-gray-950 hover:border-[#1915014a]"
                        >
                            CV (PDF)
                        </a>
                        <a
                            href='https://github.com/coudr3c/'
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-gray-950 hover:border-[#1915014a]"
                        >
                            Github
                        </a>
                        <Link
                            to='/projects'
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-gray-950 hover:border-[#1915014a]"
                        >
                            Projects
                        </Link>
                    </>
                </nav>
            </div>
        </header>
    );
}
