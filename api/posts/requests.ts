import { Post } from '../common.types'
import { PostsResponse } from './types'

export async function fetchPosts(page = 1, limit = 10): Promise<PostsResponse> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=${page}&limit=${limit}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error('Не удалось загрузить посты')
	}

	return response.json()
}

export async function fetchPost(id: string): Promise<Post> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error('Не удалось получить пост')
	}

	return response.json()
}
