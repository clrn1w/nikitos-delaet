export const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL || ''
export const cdnImagesUrl = `${cdnUrl}/imgs`
export const apiUrl = process.env.NEXT_PUBLIC_API_URL

export function resolveCdnImage(src: string | undefined): string | undefined {
	if (!src || typeof src !== 'string') return src

	if (src.startsWith('@/')) {
		return `${cdnImagesUrl}/${src.slice(2)}`
	}

	if (src.startsWith('@public/')) {
		return `/imgs/${src.replace('@public/', '')}`
	}

	if (src.startsWith('@api/')) {
		return `${apiUrl}${src.replace('@api/', '/')}`
	}

	if (src.startsWith('/api/') || src.startsWith('/media/')) {
		return `${apiUrl}${src}`
	}

	if (src.startsWith('http://') || src.startsWith('https://')) {
		return src
	}

	return src
}
