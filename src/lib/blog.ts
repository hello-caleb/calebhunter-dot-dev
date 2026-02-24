import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
}

export interface Post extends PostMeta {
  content: string
}

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))
  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPost(slug: string): Post | null {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filepath)) return null
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    content,
  }
}
