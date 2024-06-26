import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export interface ICodeX {
	text: string;
}

export default function CodeX({ text }: ICodeX) {
	return (
		<Markdown
			components={{
				code(props) {
					const { children, className, node, ...rest } = props;
					const match = /language-(\w+)/.exec(className || '');
					return match ? (
						<SyntaxHighlighter {...rest} PreTag="div" children={String(children).replace(/\n$/, '')} language={match[1]} />
					) : (
						<code {...rest} className={className}>
							{children}
						</code>
					);
				},
			}}
		>
			{text}
		</Markdown>
	);
}
