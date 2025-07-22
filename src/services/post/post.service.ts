import { type AxiosResponse } from 'axios'
import { useDelete, useGet, usePost, usePut } from '@/services/api.service'
import { type Post } from './types'
export function getPosts(params: Post.Params): Promise<AxiosResponse> {
  return useGet('/api/sections', params)
}
export function createPost(data: Post.CreatePostDTO): Promise<AxiosResponse> {
  return usePost('/api/sections', data)
}
export function updatePost(id: number, data: Post.CreatePostDTO): Promise<AxiosResponse> {
  return usePut(`/api/sections/${id}`, data)
}

export function deletePost(id: number): Promise<AxiosResponse> {
  return useDelete(`/api/sections/${id}`)
}

export function getPostById(id: number): Promise<AxiosResponse> {
  return useGet(`/api/sections/${id}`)
}
