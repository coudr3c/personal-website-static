import PageTemplate from './page-template';
import KomugiLink from '../components/komugi-link';

export default function About() {                                   
    return (
        <>
            <PageTemplate pageTitle='About me'>
                <div className="gap-3 grid grid-rows text-justify">
                    <p>My name is Rémi Coudert [ʁemi kudɛʁ], I’m a Software Engineer/Computer Scientist based in French Chablais, by the leman lake.</p>
                    <p>I graduated from EPFL (Ecole Polytechnique Federale de Lausanne) with a MSc in Computer Science and an engineering diploma in 2020 and am currently employed as a Software Engineer at <KomugiLink/> in Thonon-les-Bains, France.</p>
                    <p>Komugi is a B2B startup providing an <a className='underline' href='https://www.planilog.com/support/advanced-planning-scheduling-aps/'>
                                    APS (Advanced Planning and Scheduling)
                                </a> SaaS solution helping manufacturing industries better pilot their production with task scheduling, people and machine management, KPI feedback, scenario capabilities etc…</p>
                    <p>Before that I worked at ELCA Security as a Security engineer, at Lausanne University’s Information Security and Privacy lab as a research engineer.</p>
                    <p>I defended my Master thesis in the field of privacy at <a href='https://team.inria.fr/privatics/'>PRIVATICS lab</a> in Grenoble under the supervision of <a href='https://team.inria.fr/privatics/claude-castelluccia/'>Claude Castelluccia</a>.</p>
                    <p>I am particularly interested in privacy, on both its technical side and its ethical/social one and security in general. I also have a keen interest in compilers and programming languages.</p>
                    <p>On a more personal note, I am a former member of <a href='https://polyquity.ch/'>Polyquity</a>, EPFL’s association for gender equality for which I have been its Vice-President from January to September 2019.</p>
                    <p>During my High School years, I was part of Thonon Black Panthers American Football Team, as a U19 and later a starter Running Back in Team France U19 and took part of 2014 U19 World Championship in Kuwait City (Kuwait).</p>
                    <p>I have been coaching Black Panthers’s U17 team between Sept. 2021 and July 2024. We reached the swiss national championship semi-finals in 2023.</p>
                    <p>Last site update : April 21, 2025</p>
                </div>
            </PageTemplate>
        </>
    );
}
