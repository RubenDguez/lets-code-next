import Section, { ISection } from './Section';

export interface ISections {
	sections: ISection[];
}

export default function Sections({ sections }: ISections) {
	return <>{sections && sections.map((s) => <Section key={s.title} title={s.title} text={s.text} code={s.code} />)}</>;
}
