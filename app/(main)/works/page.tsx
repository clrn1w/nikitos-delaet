'use client'

import { Text, Strong, Span, Em, Box } from '@chakra-ui/react'
import testImg from '@/public/imgs/test.png'
import WorkCard from '@/components/WorkCard'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const MotionBox = motion(Box)

function AnimatedWorkCard({
	children,
	index,
	totalCards,
	isAnimating,
}: {
	children: React.ReactNode
	index: number
	totalCards: number
	isAnimating: boolean
}) {
	const spreadPosition = (index - (totalCards - 1) / 2) * 480

	return (
		<MotionBox
			position="absolute"
			initial={{
				x: 0,
				y: 0,
				rotate: index * 2 - 4,
				scale: 1 - index * 0.02,
			}}
			animate={{
				x: isAnimating ? spreadPosition : 0,
				y: isAnimating ? 0 : -index * 3,
				rotate: isAnimating ? 0 : index * 2 - 4,
				scale: isAnimating ? 1 : 1 - index * 0.02,
			}}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 20,
				delay: isAnimating ? index * 0.1 : 0,
			}}
			style={{
				zIndex: totalCards - index,
			}}
			whileHover={isAnimating ? { y: -10, transition: { duration: 0.2 } } : {}}
		>
			{children}
		</MotionBox>
	)
}

const cards = [
	{
		images: [testImg, testImg, testImg, testImg, testImg],
		content: (
			<Text textWrap="balance">
				В 2012 году я основал литературное издание <Strong color="#1c37be">«Дистопия»</Strong>, сочетавшее в себе фикшн и нон-фикшн. В публицистике преобладала
				эссеистика, true story, психоанализ и философия. <br />
				<br />
				Редакция публиковала ранее неизданные переводы Хантера Томпсона, Сэлинджера, Кафки, Дэвида Фостера Уоллеса, Бротигана, а также ранее неизданные работы
				русских авторов - Поляринова, Козлова, Алехина, Данишевского, Вилисова, Керви и др. <br />
				<br />В 2019 году <Strong>«Дистопия»</Strong> также стала издательством, начав печатать книги. Тогда же вышли альманахи{' '}
				<Em color="#1c37be">«Принятие»</Em> и <Em color="#1c37be">«Трикстер»</Em>, включившие в себя знаковые работы авторов издания.
				<br />
				<br />
				<Span
					color="#a1a1a1"
					fontSize="1.4rem"
				>
					На момент консервирования проекта в 2022 году, аудитория превышала 120 000 подписчиков.
				</Span>
			</Text>
		),
	},
	{
		images: [testImg, testImg, testImg],
		content: (
			<Text textWrap="balance">
				В 2016 вышла игра <Strong color="#1c37be">«Меня зовут Ты»</Strong>, давшая мне старт как разработчику и издателю под именем Nikita Kaf Productions /
				Publishing. <br />
				<br /> В 2020 году я издал игру, которая получила название <Strong color="#1c37be">Milk inside a bag of milk inside a bag of milk</Strong> и в ближайшие
				полдекады продалась тиражом более 1 000 000 копий. <br />
				<br /> С 2021 года издательство и студия приобрели название <Strong color="#1c37be">Missing Calm</Strong>. <br />
				<br /> По состоянию на 2025 год, в разработке находится несколько проектов, в том числе с использованием Unreal Engine 5.
			</Text>
		),
	},
	{
		images: [testImg, testImg, testImg, testImg, testImg],
		content: (
			<Text textWrap="balance">
				В 2012 году я основал литературное издание <Strong color="#1c37be">«Дистопия»</Strong>, сочетавшее в себе фикшн и нон-фикшн. В публицистике преобладала
				эссеистика, true story, психоанализ и философия. <br />
				<br />
				Редакция публиковала ранее неизданные переводы Хантера Томпсона, Сэлинджера, Кафки, Дэвида Фостера Уоллеса, Бротигана, а также ранее неизданные работы
				русских авторов - Поляринова, Козлова, Алехина, Данишевского, Вилисова, Керви и др. <br />
				<br />В 2019 году <Strong>«Дистопия»</Strong> также стала издательством, начав печатать книги. Тогда же вышли альманахи{' '}
				<Em color="#1c37be">«Принятие»</Em> и <Em color="#1c37be">«Трикстер»</Em>, включившие в себя знаковые работы авторов издания.
				<br />
				<br />
				<Span
					color="#a1a1a1"
					fontSize="1.4rem"
				>
					На момент консервирования проекта в 2022 году, аудитория превышала 120 000 подписчиков.
				</Span>
			</Text>
		),
	},
]

export default function WorksPage() {
	const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsAnimating(true)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	const containerWidth = isAnimating ? cards.length * 480 + 200 : 600

	return (
		<Box
			w="100%"
			minH="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			overflow="auto"
			px="2rem"
			py="8rem"
		>
			<Box
				position="relative"
				w={`${containerWidth}px`}
				h="100vh"
				transition="width 1s ease-out"
				display="flex"
				alignItems="flex-start"
				justifyContent="center"
			>
				<AnimatePresence>
					{cards.map((card, index) => (
						<AnimatedWorkCard
							key={index}
							index={index}
							totalCards={cards.length}
							isAnimating={isAnimating}
						>
							<WorkCard images={card.images}>{card.content}</WorkCard>
						</AnimatedWorkCard>
					))}
				</AnimatePresence>
			</Box>
		</Box>
	)
}
