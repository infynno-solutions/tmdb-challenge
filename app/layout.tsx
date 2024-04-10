import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import Footer from '@/components/Structure/Footer'
import './raw.css'

const DMSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'TMDB Challenge',
	description: 'A challenge to build a app using TMDB API',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={DMSans.className}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
