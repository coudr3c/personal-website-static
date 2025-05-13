import PageTemplate from './page-template';
import ExperienceBlock from '../components/experience-block';
import EducationBlock from '../components/education-block';

export default function CV() {

    return (
        <>
            <PageTemplate pageTitle='CV'>
                <h3>Click <a className='underline' href={'resume_cv.pdf'}>HERE</a> for a one-pager PDF, this is a detailed CV/Resume</h3>
                <div>
                    <h1 className='text-4xl'>Education</h1>
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
                    <h1 className='text-4xl pb-4'>Past Experiences</h1>
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
                            keywords='Privacy, Research, Scraping, OpenWPM, Python, Pandas, Dark Patterns, Cookie Banners'
                        >
                            <p>During my Master Thesis in the PRIVATICS lab at INRIA Grenoble, I developed a tool to detect and analyze Dark Patterns in cookie banners from thousands of websites</p>
                            <br/>
                            <p>As part of the analysis, I crawled over 100.000 of the most visited websites using the <a className='underline' href='https://github.com/openwpm/OpenWPM'>OpenWPM</a> tool and
                            extracted DOM HTML components, assigned them a likelihood score of being the outermost component containing a Cookie Banner</p>
                            <br/>
                            <p>Using this data, I analyzed Dark Pattern in these DOM components, UI patterns making use of human biases to "force" them to accept cookies</p>
                            <br/>
                            <p>A detailed analysis is available in my report, but this work showed that from 9344 banners found, 96% of them had at least one form of Dark Pattern</p>
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
                    <h1 className='text-4xl'>Miscellaneous Experience</h1>
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
