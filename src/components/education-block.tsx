import type { PropsWithChildren } from 'react'

type EducationBlockProps = {
    diploma: string,
    university: string,
    location: string,
    timePeriodFrom: string,
    timePeriodTo: string
}

export default function EducationBlock(props: PropsWithChildren<EducationBlockProps>) {
    return (
        <div className='border rounded-md border-[#1915014a] hover:border-black'>
            <div className='p-5 text-justify'>
                <h2><strong>Diploma :</strong> {props.diploma}</h2>
                <h3><strong>University :</strong> {props.university}</h3>
                <h2><strong>Location :</strong> {props.location}</h2>
                <h4><strong>Time period :</strong> {props.timePeriodFrom} - {props.timePeriodTo}</h4>
                <div className='pt-2'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
