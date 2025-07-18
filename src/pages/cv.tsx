import PageTemplate from './page-template';
import ExperienceBlock from '../components/experience-block';
import EducationBlock from '../components/education-block';
import { useTranslation } from '../i18n/context';

export default function CV() {
    const { t } = useTranslation();

    return (
        <>
            <PageTemplate pageTitle={t.pages.cv} seoPageKey="cv">
                <h3>{t.cv.pdfLinkPart1} <a className='underline' href={'resume_cv.pdf'}>{t.cv.pdfLinkText}</a> {t.cv.pdfLinkPart2}</h3>
                <div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl'>{t.cv.education}</h1>
                    <EducationBlock
                        diploma='MSc Computer Science + Engineer diploma'
                        university='EPFL (Lausanne Institute of Technology/Ecole Polytechnique Federale de Lausanne)'
                        location='Lausanne, Switzerland'
                        timePeriodFrom='September 2014'
                        timePeriodTo='July 2020'
                    >
                        <p>Specialization in Software Systems.</p>
                        <br/>
                        <p>One year abroad at ENS Lyon (Ecole Normale Supérieure)</p>
                    </EducationBlock>
                </div>
                <div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl pb-4'>{t.cv.pastExperiences}</h1>
                    <div className='grid grid-rows gap-4'>
                        <ExperienceBlock
                                position='FullStack/DevOps Engineer'
                                company='Komugi (SaaS, B2B, APS/ERP)'
                                location='Thonon-les-Bains/Remote'
                                timePeriodFrom='September 2022'
                                timePeriodTo='Now'
                                keywords='SaaS, B2B, PHP 8, Symfony, Doctrine, PostgreSQL, React, TypeScript, AWS, Terraform, Agile'
                            >
                                <p>
                                    Komugi is a french B2B startup developing 
                                    an <a className='underline' href='https://www.planilog.com/support/advanced-planning-scheduling-aps/'>
                                        APS (Advanced Planning and Scheduling)
                                    </a>  SaaS solution for industries. 
                                    We provide advanced scheduling with scenarization, load/capacity computations, 
                                    machine and operator management, turnover computation etc...  
                                </p>
                                <br/>
                                <p>
                                    My roles at Komugi are Fullstack and DevOps engineer. We work in Agile with the SCRUM methodology and my User Stories
                                    can involve for the Backend part working in depth on the scheduling algorithm, on database access, optimizations, API development, Data importation
                                    through files etc... On the frontend part, I usually update or create graphs, update data from the backend, or add new logic
                                </p>
                                <br/>
                                <p>
                                    As a DevOps engineer I also make use of Terraform to create and maintain our client environments on AWS, update logs,
                                    or develop new capabilities. For example, I implemented an event based automatic deployment of a docker computation service
                                    in order to use more powerful ECS pods for cheaper. Previous implementation ran on the 24/7 API server.
                                </p>
                            </ExperienceBlock>
                        <ExperienceBlock
                            position='Cyber Security Engineer'
                            company='Elca Security'
                            location='Lausanne'
                            timePeriodFrom='November 2021'
                            timePeriodTo='June 2022'
                            keywords='Azure, Azure Sentinel, Cloud Security, Penetration testing'
                        >
                            <p>During my time at Elca Security and as part of the CloudSec team, I had exposure to Azure, Splunk, Azure Sentinel, Metasploit, the Burp Suite, Penetration testing etc...</p>
                        </ExperienceBlock>
                        <ExperienceBlock
                                position='Research Engineer'
                                company='Information Security and Privacy Lab'
                                location='Lausanne University'
                                timePeriodFrom='September 2020'
                                timePeriodTo='August 2021'
                                keywords='Privacy, Python, OpenWPM, Scraping, Pandas, scikit-learn, Matplotlib, Research, Paper writing'
                        >
                            <p>Following my Master thesis, held a Research engineer position at the Information Security and Privacy Lab, Lausanne University, lead by Prof. Kévin Huguenin.</p>
                            <br/>
                            <p>As part of the lab team, my work consisted in helping with various internal papers (writing, data visualization etc...) and projects</p>
                            <br/>
                            <p>Most of my work was done using Python and libraries such as Pandas, Matplotlib, OpenWPM or scikit-learn</p>
                            <br/>
                            <p>My main paper contributions can be found in <a className='underline' href='https://dl.acm.org/doi/abs/10.1145/3543507.3583326'>"An Empirical Study of the Usage of Checksums for Web Downloads"</a> and <a className='underline' href='https://hal.science/hal-03589894v1'>"KGP Meter: Communicating Kin Genomic Privacy to the Masses"</a>
                            </p>
                        </ExperienceBlock>
                        <ExperienceBlock
                                position='Master Thesis'
                                company='PRIVATICS Lab'
                                location='INRIA Grenoble'
                                timePeriodFrom='February 2020'
                                timePeriodTo='July 2020'
                                keywords='Privacy, Research, Scraping, OpenWPM, Python, Pandas, Dark Patterns, Cookie Banners, DOM Analysis'
                        >
                            <p>During my Master Thesis titled "Automatically detect Dark patterns in cookie banners" at PRIVATICS lab (INRIA Grenoble), I developed a comprehensive tool to detect and analyze dark patterns in cookie consent banners across the web.</p>
                            <br/>
                            <p>The research involved crawling over 100,000 websites from the Tranco top list using the <a className='underline' href='https://github.com/openwpm/OpenWPM'>OpenWPM</a> tool. I extracted DOM HTML components and developed a scoring system to assign likelihood scores for identifying the outermost components containing cookie banners.</p>
                            <br/>
                            <p>From this large-scale analysis, I successfully identified 9,344 cookie banners and conducted detailed analysis of dark patterns - UI design patterns that exploit human cognitive biases to manipulate users into accepting cookies against their best interests.</p>
                            <br/>
                            <p>The research findings revealed that 96% of the analyzed cookie banners contained at least one form of dark pattern, highlighting the widespread nature of manipulative design in web privacy interfaces. The complete methodology and detailed analysis are available in my <a className='underline' href='Master_Thesis.pdf'>thesis report</a>.</p>
                        </ExperienceBlock>
                        <ExperienceBlock
                                position='Engineering Internship'
                                company='Logitech'
                                location='Lausanne'
                                timePeriodFrom='February 2018'
                                timePeriodTo='August 2018'
                                keywords='C++, Valve/CSGo, Machine Learning, scikit-learn, Data Analysis, Data Prediction'
                        >
                            <p>For my mandatory internship, I chose to work at Logitech. Originally a peripherals company, Logitech aims to get into data science and understand better eSports (since they sponsor big teams).</p>
                            <br/>
                            <p>I worked for 6 months on a project involving Machine Learning, Data Analysis, ESports. The goal of the internship was to find the future ESport pro players. To this end, I designed a tool to automatically extract games features from game logs, ran it on a set of such logs and analyzed the result using standard ML techniques.</p>
                            <br/>
                            <p>During this internship, I broadened my technical skills (learnt how to use Docker, GPU farms, Kubernetes, got better at C++ and Makefiles/CMake) as well as my soft skills (I attented several trainings on presentations, had to present my project several times, and got involved in meetings).</p>
                        </ExperienceBlock>
                        <ExperienceBlock
                                position='Google Summer of Code'
                                company='Scala Organization (Scala Native)'
                                location='Lausanne'
                                timePeriodFrom='June 2017'
                                timePeriodTo='August 2017'
                                keywords='Scala, C, Java, Systems Programming, Concurrency, Multithreading'
                        >
                            <p>See <a className='underline' href='gsoc'>the dedicated page</a>, I worked on the multithreading for Scala Native, and ahead of time compiler for Scala.</p>
                        </ExperienceBlock>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl'>{t.cv.miscExperiences}</h1>
                    {/* <ExperienceBlock
                        position='Vice President/Member'
                        company='Polyquity'
                        location='Lausanne'
                        timePeriodFrom='June 2017'
                        timePeriodTo='August 2017'
                        >
                            <p>See <a className='underline' href='gsoc'>the dedicated page</a>, I worked on the multithreading for Scala Native, and ahead of time compiler for Scala.</p>
                    </ExperienceBlock> */}
                </div>
            </PageTemplate>
        </>
    );
}
