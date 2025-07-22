import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { fetchPost, fetchPosts } from './requests'

export function usePosts(page = 1, limit = 10) {
	return useQuery({
		queryKey: ['posts', page, limit],
		queryFn: () => fetchPosts(page, limit),
		staleTime: 1000 * 60 * 5,
	})
}

export function useInfinitePosts(limit = 10) {
	return useInfiniteQuery({
		queryKey: ['posts', 'infinite'],
		queryFn: ({ pageParam }) => fetchPosts(pageParam, limit),
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			return lastPage.hasNextPage ? lastPage.nextPage : undefined
		},
		staleTime: 1000 * 60 * 5,
	})
}

export function usePost(id: string) {
	return useQuery({
		queryKey: ['post', id],
		queryFn: () => fetchPost(id),
		enabled: !!id,
		staleTime: 1000 * 60 * 5,
	})
}
