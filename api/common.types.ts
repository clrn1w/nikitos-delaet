import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export interface Image {
	image: {
		id: string
		url: string
		alt?: string
		filename: string
		mimeType: string
		filesize: number
		width: number
		height: number
	}
}

export interface Post {
	id: string
	title: string
	images: Image[]
	content: SerializedEditorState
	status: 'draft' | 'published'
	createdAt: string
	updatedAt: string
}

export interface DataResponse<Data> {
	docs: Data
	totalDocs: number
	limit: number
	totalPages: number
	page: number
	pagingCounter: number
	hasNextPage: boolean
	hasPrevPage: boolean
	prevPage: number | null
	nextPage: number | null
}
