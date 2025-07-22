'use client'
import { Box } from '@chakra-ui/react'
import WorkCard from '@/components/WorkCard'
import { motion } from 'motion/react'
import { cards } from '@/constants/mockdata'

const MotionBox = motion.create(Box)

type PostWithIndex = {
	id: number
	images: any[]
	content?: any
	originalIndex: number
}

export default function WorksPage() {
	const posts = cards
	const columns = 3

	const postsByColumn: PostWithIndex[][] = Array.from({ length: columns }, () => [])

	posts.forEach((post, index) => {
		postsByColumn[index % columns].push({ ...post, originalIndex: index })
	})

	return (
		<>
			<Box
				display="flex"
				gap="2.4rem"
				mx="auto"
				maxW="140rem"
				flexWrap="wrap"
				justifyContent="center"
			>
				{postsByColumn.map((column, columnIndex) => (
					<Box
						key={`column-${columnIndex}`}
						flex={{
							base: '1 1 100%',
							md: '1 1 calc(50% - 1.2rem)',
							lg: '1 1 calc(33.333% - 1.6rem)',
						}}
						display="flex"
						flexDirection="column"
						gap="2.4rem"
						alignItems="center"
					>
						{column.map((post) => {
							const minHeightMobile = ['200px', '250px', '220px', '280px', '240px']
							const minHeightTablet = ['250px', '320px', '280px', '350px', '300px']
							const minHeightDesktop = ['300px', '400px', '350px', '450px', '380px']

							return (
								<MotionBox
									key={`post-id-${post.id}`}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: post.originalIndex * 0.1,
										ease: 'easeOut',
									}}
									// whileHover={{
									// 	y: -5,
									// 	transition: { duration: 0.2 },
									// }}
									minH={{
										base: minHeightMobile[post.originalIndex % minHeightMobile.length],
										md: minHeightTablet[post.originalIndex % minHeightTablet.length],
										lg: minHeightDesktop[post.originalIndex % minHeightDesktop.length],
									}}
								>
									<WorkCard images={post.images}>{post.content}</WorkCard>
								</MotionBox>
							)
						})}
					</Box>
				))}
			</Box>
		</>
	)
}
