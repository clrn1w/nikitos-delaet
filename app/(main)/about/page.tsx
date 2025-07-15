'use client'
import Image from 'next/image'
import { HStack, Strong, Text, Box } from '@chakra-ui/react'
import logo from '@/public/imgs/logo.png'
import { motion } from 'motion/react'

const MotionImage = motion(Image)
const MotionHStack = motion(HStack)
const MotionBox = motion(Box)

export default function About() {
	return (
		<MotionHStack
			gap="9rem"
			align="center"
			layoutId="main-content"
			layout
		>
			<MotionImage
				layoutId="logo"
				src={logo}
				alt="Никитос делает"
				animate={{
					y: [0, -10, 0],
				}}
				transition={{
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

			<MotionBox
				initial={{ opacity: 0, x: 100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 20,
					delay: 0,
				}}
				maxW="340px"
				p="2.4rem"
				borderRadius="2.4rem"
				bgColor="white"
			>
				<Text>
					Привет, меня зовут Никита. <br />
					<br /> Так получилось, что я что-то делаю. <Strong>«Никитос делает»</Strong> — бренд-хаб собственных проектов. <br />
					<br /> Кроме этого, под этим именем я поддерживаю интересные мне медийные и культурные авторские работы и инициативы.
				</Text>
			</MotionBox>
		</MotionHStack>
	)
}
