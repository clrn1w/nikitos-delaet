'use client'

import { Box, Image, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

const MotionBox = motion(Box)
const MotionGridItem = motion(GridItem)

interface ImageData {
	src: string
	alt?: string
}

interface WorkCardProps {
	images: ImageData[]
	children: ReactNode
}

export default function WorkCard({ images, children }: WorkCardProps) {
	const getLayoutConfig = (imageCount: number) => {
		switch (imageCount) {
			case 1:
				return {
					template: {
						columns: '1fr',
						rows: '1fr',
						areas: `"img1"`,
					},
					items: [{ area: 'img1', index: 0 }],
				}

			case 2:
				return {
					template: {
						columns: '1fr',
						rows: '1fr 1fr',
						areas: `
							"img1"
							"img2"
						`,
					},
					items: [
						{ area: 'img1', index: 0 },
						{ area: 'img2', index: 1 },
					],
				}

			case 3:
				return {
					template: {
						columns: '1fr 1fr',
						rows: '1.5fr 1fr',
						areas: `
              "img1 img1"
              "img2 img3"
            `,
					},
					items: [
						{ area: 'img1', index: 0 },
						{ area: 'img2', index: 1 },
						{ area: 'img3', index: 2 },
					],
				}

			case 4:
				return {
					template: {
						columns: '2fr 1fr',
						rows: '2fr 1fr 1fr',
						areas: `
              "img1 img1"
              "img2 img3"
							"img2 img4"
            `,
					},
					items: [
						{ area: 'img1', index: 0 },
						{ area: 'img2', index: 1 },
						{ area: 'img3', index: 2 },
						{ area: 'img4', index: 3 },
					],
				}

			case 5:
			default:
				return {
					template: {
						columns: '3fr 1fr 1fr',
						rows: '2fr 1fr 1fr',
						areas: `
              "img1 img1 img1"
              "img2 img3 img3"
							"img2 img4 img5"
            `,
					},
					items: [
						{ area: 'img1', index: 0 },
						{ area: 'img2', index: 1 },
						{ area: 'img3', index: 2 },
						{ area: 'img4', index: 3 },
						{ area: 'img5', index: 4 },
					],
				}
		}
	}

	const layoutConfig = getLayoutConfig(images.length)

	return (
		<MotionBox
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			maxW="45rem"
			w="100%"
			bg="white"
			borderRadius="2.4rem"
			overflow="hidden"
		>
			<Box
				h="40rem"
				bg="white"
			>
				<Grid
					h="100%"
					templateColumns={layoutConfig.template.columns}
					templateRows={layoutConfig.template.rows}
					templateAreas={layoutConfig.template.areas}
					gap="0.1rem"
				>
					{layoutConfig.items.map((item, idx) => {
						const image = images[item.index] || images[images.length - 1]
						return (
							<MotionGridItem
								key={`${item.area}-${idx}`}
								area={item.area}
								position="relative"
								overflow="hidden"
								transition={{ duration: 0.2 }}
							>
								<Image
									src={image.src}
									alt={image.alt || `Image ${item.index + 1}`}
									objectFit="cover"
									w="100%"
									h="100%"
								/>
							</MotionGridItem>
						)
					})}
				</Grid>
			</Box>
			<Box p="2.4rem">{children}</Box>
		</MotionBox>
	)
}
