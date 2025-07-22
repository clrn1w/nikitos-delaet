'use client'
import { resolveCdnImage } from '@/helpers/cdn'
import { Image as Img, ImageProps as CImageProps } from '@chakra-ui/react'

export interface ImageProps extends CImageProps {
	width?: number
	height?: number
}

export default function Image({ src, width, height, ...props }: ImageProps) {
	const resolvedSrc = typeof src === 'string' ? resolveCdnImage(src) : src

	return (
		<Img
			src={resolvedSrc}
			htmlWidth={width}
			htmlHeight={height}
			{...props}
		/>
	)
}
