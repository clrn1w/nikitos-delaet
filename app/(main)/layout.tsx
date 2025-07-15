'use client'

import Header from '@/components/Header'
import { LayoutProps } from '@/types/NextTypes'
import { Box, VStack } from '@chakra-ui/react'

export default function Layout({ children }: LayoutProps) {
	return (
		<VStack
			minH="100vh"
			h="100%"
			position="relative"
		>
			<Header />

			<Box
				w="100%"
				flex={1}
				display="flex"
				alignItems="center"
				justifyContent="center"
				pt="20rem"
				pb="5rem"
			>
				{children}
			</Box>
		</VStack>
	)
}
