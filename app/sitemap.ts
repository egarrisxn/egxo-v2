import {MetadataRoute} from 'next'
import getPosts from './lib/get-posts'
import getThoughts from './lib/get-thoughts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const thoughts = await getThoughts()

  const blogs = posts
    .map((post) => ({
      url: `http://egxo-v2.vercel.app/posts/${post.slug}`,
      lastModified: post.lastModified
        ? new Date(post.lastModified).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
    }))
    .concat(
      thoughts.map((thought) => ({
        url: `http://egxo-v2.vercel.app/thoughts/${thought.slug}`,
        lastModified: thought.lastModified
          ? new Date(thought.lastModified).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0],
      })),
    )

  const routes = ['', '/about', '/projects', '/posts', '/thoughts', '/contact'].map((route) => ({
    url: `http://egxo-v2.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
