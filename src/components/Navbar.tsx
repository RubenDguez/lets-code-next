import me from '@/images/myself.png';
import logo from '@/images/favicon-32x32.png';
import Image from 'next/image';

export default function Navbar() {
	return (
		<nav className="container px-4 py-6 flex rounded-b-lg max-w-screen-m mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
			<div className="flex items-center">
				<a href="https://rubendguez.github.io/lets-code/index.html">
					<Image src={logo} alt="Lets Code Logo" width="32" height="32" />
				</a>
			</div>
			<div className="grow text-center flex justify-center items-center"></div>
			<div className="flex flex-col justify-center">
				<Image className="rounded-full mx-auto" height="64" width="64" src={me} alt="Argenis Ruben Dominguez photo" />
				<p className="mx-auto text-lg">Argenis Ruben Dominguez</p>
			</div>
		</nav>
	);
}
