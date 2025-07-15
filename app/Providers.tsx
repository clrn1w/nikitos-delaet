import { Provider } from '@/components/ui/provider'
import { ReactNode } from 'react'

export default function Providers({ children }: { children: ReactNode }) {
	return <Provider>{children}</Provider>
}
