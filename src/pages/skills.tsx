import PageTemplate from './page-template';

export default function Skills() {
    return (
        <>
            <PageTemplate pageTitle='Skills'>
                <div className=''>
                    <div className='border rounded-md border-[#1915014a] hover:border-black p-4'>
                        <h2 className='text-4xl font-bold text-center'>Web</h2>
                        <div className='flex grid grid-cols-3 auto-cols-max gap-4'>
                            <div>
                                <h3 className='text-2xl'>Backend</h3>
                                <ul>
                                    <li>Symfony/PHP 8</li>
                                    <li>Laravel</li>
                                    <li>Doctrine ORM</li>
                                    <li>API Platform</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-2xl'>Frontend</h3>
                                <ul>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>HighCharts</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className='text-2xl'>Infra/DevOps</h3>
                                <ul>
                                    <li>AWS (Cognito, API Gateway, Event Bridge, CloudWatch, ECS, S3, RDS...)</li>
                                    <li>Terraform</li>
                                    <li>Azure</li>
                                    <li>Docker</li>
                                    <li>Github Actions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-md border-[#1915014a] hover:border-black p-4'>
                        <h2 className='text-4xl font-bold text-center'>Programming Languages</h2>
                        <ul>
                            <li>PHP 8</li>
                            <li>Scala/Java</li>
                            <li>C/C++</li>
                            <li>Python</li>
                            <li>Notions of Go, Rust</li>
                        </ul>
                    </div>
                    <div className='border rounded-md border-[#1915014a] hover:border-black p-4'>
                        <h2 className='text-4xl font-bold text-center'>Computer Science</h2>
                        <ul>
                            <li>Design Patterns</li>
                            <li>Data Science/Machine Learning (scikit-learn, Pandas, Jupyter...)</li>
                            <li>Cryptography/Privacy</li>
                            <li>Scientific Communication</li>
                        </ul>
                    </div>
                    <div className='border rounded-md border-[#1915014a] hover:border-black p-4'>
                        <h2 className='text-4xl font-bold text-center'>Languages</h2>
                        <ul>
                            <li>French : Native</li>
                            <li>English : Fluent (C1/C2)</li>
                        </ul>
                    </div>
                </div>
            </PageTemplate>
        </>
    );
}
