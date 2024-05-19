import CodeX from "./CodeX";

export interface ISection {
	title?: string;
	text: string;
	code?: string;
}

export default function Section({ title, text, code }: ISection) {
	return (
		<div className="my-10">
			{title && (<h3 className="text-2xl">{title}</h3>)}
			<p>{text}</p>
			{code && <CodeX text={code} />}
		</div>
	);
}
