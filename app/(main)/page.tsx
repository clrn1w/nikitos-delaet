'use client'
import { HStack, Strong, Text, Box, VStack } from '@chakra-ui/react'
import logo from '@/public/imgs/logo.png'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Image from '@/components/base/Image'

const MotionImage = motion.create(Image)
const MotionHStack = motion.create(HStack)
const MotionBox = motion.create(Box)

export default function HomePage() {
	const [animationStarted, setAnimationStarted] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationStarted(true)
		}, 1000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<Box
			px={{ base: '1.6rem', md: 0 }}
			pb={{ base: '4.8rem', md: 0 }}
		>
			<MotionHStack
				gap={{
					base: animationStarted ? '4rem' : '0',
					lg: animationStarted ? '9rem' : '0',
				}}
				align="center"
				justify="center"
				layoutId="main-content"
				layout
				transition={{ duration: 0.8, ease: 'easeInOut' }}
				w="100%"
				flexDirection={{
					base: 'column',
					md: 'row',
				}}
			>
				<MotionImage
					layoutId="logo"
					src={logo.src}
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
					whileTap={{ scale: 0.95 }}
					w={{
						base: '20rem',
						md: '25rem',
						lg: 'auto',
					}}
					h="auto"
				/>

				<MotionBox
					display={animationStarted ? 'block' : 'none'}
					initial={{
						opacity: 0,
						x: { base: 0, md: 100 },
						y: { base: 50, md: 0 },
					}}
					animate={{
						opacity: animationStarted ? 1 : 0,
						x: animationStarted ? 0 : { base: 0, md: 100 },
						y: animationStarted ? 0 : { base: -100, md: 0 },
					}}
					transition={{
						type: 'spring',
						stiffness: 100,
						damping: 20,
						delay: animationStarted ? 0.3 : 0,
					}}
					maxW={{
						base: '100%',
						sm: '340px',
					}}
					p={{
						base: '1.6rem',
						lg: '2.4rem',
					}}
					borderRadius={{
						base: '1.6rem',
						md: '2.4rem',
					}}
					bgColor="white"
				>
					<Text
						fontSize={{
							base: '1.4rem',
							md: '1.5rem',
							lg: '1.6rem',
						}}
					>
						Привет, меня зовут Никита. <br />
						<br /> Так получилось, что я что-то делаю. <Strong>«Никитос делает»</Strong> — бренд-хаб собственных проектов. <br />
						<br /> Кроме этого, под этим именем я поддерживаю интересные мне медийные и культурные авторские работы и инициативы.
					</Text>
				</MotionBox>
			</MotionHStack>

			<MotionBox
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 2 }}
				position="absolute"
				bottom={{
					base: '3rem',
					md: '6rem',
					lg: '9rem',
				}}
				left="0"
				right="0"
				px={{ base: '1.6rem', md: 0 }}
			>
				<Text
					textAlign="center"
					color="#ecc300"
					fontSize={{ base: '1.2rem', md: '1.4rem' }}
				>
					<strong>«Никитос делает»</strong> — бренд-хаб собственных проектов и неформальный фонд поддержки авторских медийных и культурных инициатив.
				</Text>
			</MotionBox>
		</Box>
	)
}
