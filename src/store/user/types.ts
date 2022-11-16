export interface IUserStore {
  error?: string
  loading?: boolean
  user?: {
    email: string
    token?: string
    avatar?: string
    full_name: string
    register?: string
    created_at: string
    updated_at: string
  }
}
