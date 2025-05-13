import type { PropsWithChildren } from 'react'

type ExperienceBlockProps = {
    position: string,
    company: string,
    location: string,
    keywords: string,
    timePeriodFrom: string,
    timePeriodTo: string
}

export default function ExperienceBlock(props: PropsWithChildren<ExperienceBlockProps>) {
    return (
        <div className='border rounded-md border-[#1915014a] hover:border-black'>
            <div className='p-5 text-justify'>
                <h2><strong>Position :</strong> {props.position}</h2>
                <h3><strong>Company :</strong> {props.company}</h3>
                <h2><strong>Location :</strong> {props.location}</h2>
                <h4><strong>Time period :</strong> {props.timePeriodFrom} - {props.timePeriodTo}</h4>
                <h4><strong>Key words : {props.keywords}</strong></h4>
                <div className='pt-2'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
