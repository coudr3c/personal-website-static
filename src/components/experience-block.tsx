import BaseBlock from './base-block';

type ExperienceBlockProps = {
    position: string;
    company: string;
    location: string;
    timePeriodFrom: string;
    timePeriodTo: string;
    keywords?: string;
    children: React.ReactNode;
}

export default function ExperienceBlock(props: ExperienceBlockProps) {
    return (
        <BaseBlock
            title={props.position}
            subtitle={props.company}
            location={props.location}
            timePeriodFrom={props.timePeriodFrom}
            timePeriodTo={props.timePeriodTo}
            keywords={props.keywords}
        >
            {props.children}
        </BaseBlock>
    );
}
