export type Wakatime = {
  /**
   * The total coding time of the user.
   */
  seconds: number
}

export type Project = {
  id: string
  title: string
  slug: string
  description: string
  image_url: string | null
  external_url: string | null
  status: string
  status_color: string
  tags: string[]
  is_published: boolean
  order_index: number
  created_at: string
}

export type Skill = {
  id: string
  name: string
  icon_name: string
  category: string
  visible: boolean
  order_index: number
  created_at: string
}

export type About = {
  id: string
  name: string
  bio: string
  avatar_url: string
  location: string
  email: string
}

export type Experience = {
  id: string
  company: string
  position: string
  start_date: string
  end_date: string | null
  description: string
  is_current: boolean
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  published_at: string
  is_published: boolean
}

export type BlogListItem = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  cover_image_url: string | null
  tags: string[] | null
  category: string | null
  published_at: string | null
}

export type BlogPostDetail = BlogListItem & {
  content_html: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: string | null
  }
}

export type BlogListResponse = {
  data: BlogListItem[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}