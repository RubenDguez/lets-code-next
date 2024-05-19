import Image, { StaticImageData } from 'next/image';

export interface IHeader {
	data: {
		title: string;
		image: { src: StaticImageData; alt: string };
		author: string;
		published: string;
	};
}

export default function Header({ data }: IHeader): React.ReactNode {
	return (
		<div className="mb-5 container max-w-screen-sm mx-auto tracking-wide leading-relaxed">
			<h1 className="text-4xl my-4">{data.title}</h1>
			<Image className="w-full" src={data.image.src} width="192" height="100" priority alt={data.image.alt} />
			<p className="text-right leading-tight">
				<small>{`By ${data.author}`}</small>
			</p>
			<p className="text-right leading-tight">
				<small>{data.published}</small>
			</p>
		</div>
	);
}
