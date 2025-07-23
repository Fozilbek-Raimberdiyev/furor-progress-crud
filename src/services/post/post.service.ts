import { type AxiosResponse } from 'axios'
import { useDelete, useGet, usePost, usePut } from '@/services/api.service'
import { type Post } from './types'
export function getPosts(params: Post.Params): Promise<AxiosResponse> {
  return useGet('/posts', params as Record<string, string>)
}
export function createPost(data: Post.CreatePostDTO): Promise<AxiosResponse> {
  return usePost('/posts', data)
}
export function updatePost(id: number, data: Post.CreatePostDTO): Promise<AxiosResponse> {
  return usePut(`/posts/${id}`, data)
}

export function deletePost(id: number): Promise<AxiosResponse> {
  return useDelete(`/posts/${id}`)
}

export function getPostById(id: number): Promise<AxiosResponse> {
  return useGet(`/posts/${id}`)
}
export function getUsers(): Promise<AxiosResponse> {
  return useGet('/users')
}
