// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Post {
  export interface Params {
    page?: number
    limit?: number
  }
  export interface IPost {
    id: number
    full_name: string
    section_name: string
    login: string
    password: string
    created_at: string
    updated_at: string
  }
  export interface CreatePostDTO {
    title: string
    body: string
    userId: number | undefined
  }
}
