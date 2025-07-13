import BaseBlock from './base-block';

type EducationBlockProps = {
    diploma: string;
    university: string;
    location: string;
    timePeriodFrom: string;
    timePeriodTo: string;
    children: React.ReactNode;
}

export default function EducationBlock(props: EducationBlockProps) {
    return (
        <BaseBlock
            title={props.diploma}
            subtitle={props.university}
            location={props.location}
            timePeriodFrom={props.timePeriodFrom}
            timePeriodTo={props.timePeriodTo}
        >
            {props.children}
        </BaseBlock>
    );
}
