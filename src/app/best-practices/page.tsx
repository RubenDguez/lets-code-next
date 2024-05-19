import Header, { IHeader } from '@/components/Blog/Header';
import OverviewConclusion from '@/components/Blog/OverviewConclusion';
import Sections from '@/components/Blog/Sections';
import headImage from '@/images/code-signing-best-practices.jpg';
import { Metadata } from 'next';
import { conclusion, overview, sections } from './data';

const keywords = sections.map((s) => (s.title)).join();

export const metadata: Metadata = {
	title: 'Coding Best Practices',
	description: 'Reason behind Coding Best Practices?',
	keywords: 'coding, best practices, software development, code quality, efficiency, scalability, maintainability,'.concat(keywords),
	authors: { name: 'Argenis Ruben Dominguez', url: 'https://www.linkedin.com/in/argenis-dominguez/' },
	robots: 'index, follow',
};

const blogHeader: IHeader = {
	data: {
		author: 'Argenis Ruben Dominguez',
		image: { alt: 'An abstraction logo for coding best practices', src: headImage },
		published: 'Wed, May 15 2024',
		title: `What's the reason behind Coding Best Practices?`,
	},
};

export default function BestPractices() {
	return (
		<div>
			<Header data={blogHeader.data} />
			<div className="container max-w-screen-sm mx-auto tracking-wide leading-relaxed">
				<section>
					<OverviewConclusion type={overview.type} text={overview.text} />
					<Sections sections={sections} />
					<OverviewConclusion type={conclusion.type} text={conclusion.text} />
				</section>
			</div>
		</div>
	);
}
