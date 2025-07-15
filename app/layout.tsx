import { LayoutProps } from '@/types/NextTypes'
import type { Metadata } from 'next'
import Providers from './Providers'
import './fonts.css'

export const metadata: Metadata = {
	title: 'Никитос делает',
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html
			lang="ru"
			suppressHydrationWarning
		>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
