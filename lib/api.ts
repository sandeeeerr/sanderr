import type { Project, Skill, About, Experience, BlogPost } from "@/types/api"

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://dev.sanderr.nl/api/portfolio'
const API_KEY = process.env.NEXT_PUBLIC_PORTFOLIO_API_KEY || ''

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE}/projects`, {
      headers: {
        'x-api-key': API_KEY,
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    if (!res.ok) {
      console.error('Failed to fetch projects:', res.statusText)
      return []
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const res = await fetch(`${API_BASE}/skills`, {
      headers: {
        'x-api-key': API_KEY,
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    if (!res.ok) {
      console.error('Failed to fetch skills:', res.statusText)
      return []
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

export async function getAbout(): Promise<About | null> {
  try {
    const res = await fetch(`${API_BASE}/about`, {
      headers: {
        'x-api-key': API_KEY,
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    if (!res.ok) {
      console.error('Failed to fetch about:', res.statusText)
      return null
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching about:', error)
    return null
  }
}

export async function getExperience(): Promise<Experience[]> {
  try {
    const res = await fetch(`${API_BASE}/experience`, {
      headers: {
        'x-api-key': API_KEY,
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    if (!res.ok) {
      console.error('Failed to fetch experience:', res.statusText)
      return []
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching experience:', error)
    return []
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE}/blog`, {
      headers: {
        'x-api-key': API_KEY,
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    if (!res.ok) {
      console.error('Failed to fetch blog posts:', res.statusText)
      return []
    }
    return res.json()
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

