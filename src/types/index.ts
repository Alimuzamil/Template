// Common utility types for the application

export type ApiResponse<T> = {
  data: T
  success: boolean
  message?: string
}

export type PaginatedResponse<T> = ApiResponse<{
  items: T[]
  total: number
  page: number
  limit: number
}>

export type User = {
  id: string
  email: string
  username: string
  firstName?: string
  lastName?: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

export type AuthState = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export type Theme = 'light' | 'dark' | 'system'

export type ComponentProps<T extends React.ElementType> = {
  as?: T
} & React.ComponentPropsWithoutRef<T>

// Form field types
export type FormFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'

export interface FormField {
  id: string
  label: string
  type: FormFieldType
  placeholder?: string
  required?: boolean
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
}

// API error types
export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
}

// Navigation types
export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}
