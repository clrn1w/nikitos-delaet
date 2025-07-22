'use client'

import menuItems from '@/constants/menuItems'
import { HStack, Link, Text } from '@chakra-ui/react'
import { motion } from 'motion/react'
import React from 'react'

const MotionLink = motion.create(Link)
const MotionText = motion.create(Text)
const MotionHStack = motion.create(HStack)

export default function Header({ ...props }) {
	return (
		<MotionHStack
			gap="1.2rem"
			variants={styles.containerVariants}
			initial="hidden"
			animate="visible"
			position="fixed"
			top={{ base: '4.8rem', md: '8rem', lg: '12rem' }}
			zIndex={10}
		>
			{menuItems.map(({ label, href }, index) => (
				<React.Fragment key={href}>
					<MotionLink
						href={href}
						textTransform="uppercase"
						fontFamily="heading"
						color="#ecc300"
						fontSize="2.5rem"
						textShadow="3px 3px 0px rgba(0, 0, 0, 0.8), 6px 6px 0px rgba(0, 0, 0, 0.4)"
						_hover={{
							textDecoration: 'none',
							textShadow: '4px 4px 0px rgba(0, 0, 0, 0.8), 7px 7px 0px rgba(0, 0, 0, 0.4)',
						}}
						_focus={{
							outline: 0,
						}}
						transition="all 0.2s ease"
						css={{
							WebkitTextStroke: '1px rgba(0, 0, 0, 1)',
							textStroke: '1px rgba(0, 0, 0, 0.3)',
						}}
						variants={styles.itemVariants}
						whileHover={{
							scale: 1.1,
							skewY: 0,
							y: -1,
							transition: { duration: 0.2 },
						}}
						whileTap={{ scale: 0.95 }}
					>
						{label}
					</MotionLink>
					{index < menuItems.length - 1 && (
						<MotionText
							color="#ecc300"
							fontSize="2.5rem"
							css={{
								WebkitTextStroke: '1px rgba(0, 0, 0, 1)',
								textStroke: '1px rgba(0, 0, 0, 0.3)',
							}}
							textShadow="3px 3px 0px rgba(0, 0, 0, 0.8), 6px 6px 0px rgba(0, 0, 0, 0.4)"
							variants={styles.itemVariants}
							// whileHover={{
							// 	scale: 1.3,
							// 	rotate: 360,
							// 	transition: { duration: 0.4 },
							// }}
						>
							•
						</MotionText>
					)}
				</React.Fragment>
			))}
		</MotionHStack>
	)
}

const styles = {
	containerVariants: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	},

	itemVariants: {
		hidden: {
			opacity: 0,
			y: -20,
			scale: 0.8,
			rotateX: -90,
			skewY: -4,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			rotateX: 0,
			skewY: -4,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 200,
			},
		},
	},
}
