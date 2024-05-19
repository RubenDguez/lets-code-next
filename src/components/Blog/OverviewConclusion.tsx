export interface IOverviewConclusion {
	type: 'Overview' | 'Conclusion';
	text: string;
}
export default function OverviewConclusion({ type, text }: IOverviewConclusion) {
	return (
		<div className="my-5">
			<h2 className="text-3xl mb-3">{type}</h2>
			<p>{text}</p>
		</div>
	);
}
