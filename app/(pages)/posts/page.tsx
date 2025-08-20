import {ThePostsList} from '@/components/posts-list/thepostslist/index'
import Socials from '@/components/socials/index'

export const metadata = {
  title: 'Posts',
  description: 'Blog posts I have written.',
  alternates: {
    canonical: 'https://egxo-v2.vercel.app/posts',
  },
}

export default async function PostsPage() {
  return (
    <>
      <header>
        <h1>Blog posts _</h1>
      </header>
      <hr />
      <ThePostsList paginate={true} />
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
