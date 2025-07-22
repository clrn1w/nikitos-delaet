'use client'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { motion } from 'motion/react'
import { Children, ReactNode } from 'react'
import Image from '../base/Image'
import bgImg from '@/public/imgs/cardBg.png'

interface ImageData {
	src: string
	alt?: string
}

interface WorkCardProps {
	images: ImageData[]
	children: ReactNode
}

const MotionBox = motion.create(Box)
const MotionGridItem = motion.create(GridItem)

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
						columns: '2fr 1fr 1fr',
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
	const hasContent = children && Children.count(children) > 0

	return (
		<MotionBox
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			w={{
				base: '35rem',
				md: '38rem',
				lg: '45rem',
			}}
			maxW="100%"
			flexShrink="0"
			borderRadius="2.4rem"
			overflow="hidden"
			position="relative"
		>
			<Box
				h={{
					base: '30rem',
					md: '35rem',
					lg: '40rem',
				}}
			>
				<Grid
					h="100%"
					templateColumns={layoutConfig.template.columns}
					templateRows={layoutConfig.template.rows}
					templateAreas={layoutConfig.template.areas}
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
			{hasContent && (
				<Box
					bg="white"
					p={{
						base: '1.6rem',
						lg: '2.4rem',
					}}
					fontSize="1.4rem"
				>
					{children}
				</Box>
			)}
		</MotionBox>
	)
}
