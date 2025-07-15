'use client'

import './telegram.css'
import { useIsClient } from 'usehooks-ts'

export default function Page() {
	const isClient = useIsClient()

	const initWebApp = () => {
		const webApp = window.Telegram?.WebApp
		if (!webApp || webApp.platform === 'unknown') return

		webApp.ready()
	}

	if (!isClient) return null

	return (
		<>
			<Script
				src='https://telegram.org/js/telegram-web-app.js'
				strategy='afterInteractive'
				onLoad={initWebApp}
			/>
		</>
	)
}
