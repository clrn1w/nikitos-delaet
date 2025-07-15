'use client'
import Image from 'next/image'
import { VStack, Text } from '@chakra-ui/react'
import logo from '@/public/imgs/logo.png'
import { motion } from 'motion/react'

const MotionImage = motion(Image)

export default function Home() {
	return (
		<VStack gap="4.6rem">
			<MotionImage
				src={logo}
				alt="Никитос делает"
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{
					scale: 1,
					opacity: 1,
					y: [0, -10, 0],
				}}
				transition={{
					scale: { duration: 0.5, ease: 'easeOut' },
					opacity: { duration: 0.5 },
					y: {
						duration: 4,
						repeat: Infinity,
						repeatType: 'loop',
						ease: 'easeInOut',
					},
				}}
				whileHover={{
					scale: 1.05,
					rotate: [0, -3, 3, -3, 0],
					transition: {
						scale: { duration: 0.1 },
						rotate: { duration: 0.5 },
					},
				}}
				whileTap={{ scale: 0.95 }}
			/>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.3 }}
			>
				<Text
					maxW="360px"
					textAlign="center"
				>
					<strong>«Никитос делает»</strong> — бренд-хаб собственных проектов и неформальный фонд поддержки авторских медийных и культурных инициатив.
				</Text>
			</motion.div>
		</VStack>
	)
}
