import Link from 'next/link'
import {
	FaSquareFacebook,
	FaInstagram,
	FaSquareXTwitter,
	FaYoutube,
} from 'react-icons/fa6'

const footerLinks = [
	{ name: 'Conditions of Use', url: '/conditions-of-use' },
	{ name: 'Privacy & Policy', url: '/privacy-policy' },
	{ name: 'Press Room', url: '/press-room' },
]

const socialLinks = [
	{ name: 'Facebook', url: '/facebook', icon: <FaSquareFacebook /> },
	{ name: 'Instagram', url: '/instagram', icon: <FaInstagram /> },
	{ name: 'Twitter', url: '/twitter', icon: <FaSquareXTwitter /> },
	{ name: 'YouTube', url: '/youtube', icon: <FaYoutube /> },
]

export default function Footer() {
	return (
		<footer className="bg-gray-100">
			<div className="mx-auto max-w-screen-xl space-y-5 px-5 py-16 md:space-y-9">
				<ul className="flex justify-center gap-6 md:gap-8">
					{socialLinks.map((data, _i) => {
						return (
							<li key={_i}>
								<a
									href={data.url}
									className="text-2xl text-gray-900 transition hover:text-gray-700/75">
									{data.icon}
								</a>
							</li>
						)
					})}
				</ul>
				<ul className="flex flex-wrap justify-center gap-5 md:gap-12">
					{footerLinks.map((data, _i) => {
						return (
							<li key={_i}>
								<Link
									className="font-bold text-gray-900 transition-colors hover:text-gray-700/75"
									href={data.url}>
									{' '}
									{data.name}{' '}
								</Link>
							</li>
						)
					})}
				</ul>
				<p className="text-center font-bold text-gray-500">
					&copy; {new Date().getFullYear()} MovieBox by{' '}
					<a
						href="https://nisargkavi.in/"
						className="underline"
						target="_blank">
						Nisarg
					</a>
				</p>
			</div>
		</footer>
	)
}
