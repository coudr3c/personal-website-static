import PageTemplate from './page-template';
import KomugiLink from '../components/komugi-link';

export default function Home() {
    return (
        <>
            <PageTemplate pageTitle='Home'>
                <div className="grid grid-row gap-3">
                    <p>Currently a Backend/DevOps/FullStack (in order of importance) Engineer at <KomugiLink/>.</p>
                    <p>Feel free to contact me at <a className='underline' href='mailto:remi-coudert@protonmail.com'>remi-coudert@protonmail.com</a>.</p>
                </div>
                <div className="">
                    <img src='lake.jpg'></img>
                </div>
            </PageTemplate>
        </>
    );
}
