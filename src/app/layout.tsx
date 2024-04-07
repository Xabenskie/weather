import { Sidebar } from '@/components/sidebar/Sidebar'
import { SITE_NAME } from '@/constants/seo.constants'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({
	weight: ['200', '300', '500', '700', '800'],
	style: ['normal'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: `${SITE_NAME}`,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Sidebar />
				{children}
			</body>
		</html>
	)
}
