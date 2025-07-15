import type { ReactNode } from 'react'

export interface LayoutProps<Params = undefined> {
	children: ReactNode
	params: Params
}

export interface PageProps<Params = undefined, SearchParams = undefined> {
	params?: Params
	searchParams?: SearchParams
}
