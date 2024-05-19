import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer className="container rounded-t-lg max-w-screen-m mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
			<div className="flex align-middle pt-8">
				<div className="text-center text-4xl w-full pt-8">
					<a className="inline-block align-middle px-5" target="_blank" href="https://www.linkedin.com/in/argenis-dominguez/">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a className="inline-block align-middle px-5" target="_blank" href="https://www.facebook.com/argenis.dgz.2008/">
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a className="inline-block align-middle px-5" target="_blank" href="https://twitter.com/ArgenisDoming18/">
						<FontAwesomeIcon icon={faXTwitter} />
					</a>
				</div>
				<div className="w-full text-right inline-block align-middle pt-3 pr-5">
					<p>
						In search of new challenges and opportunities, I am eager to bring my skills and expertise to dynamic organizations where I can drive impactful outcomes and
						contribute to the advancement of cutting-edge technologies.
					</p>
				</div>
			</div>
			<div className="text-center w-full pt-16 pb-8">
				<p>
					<span>&copy;</span>
					<span id="all-right-reserved"></span>
					<span>Argenis Ruben Dominguez</span>
				</p>
			</div>
		</footer>
	);
}
