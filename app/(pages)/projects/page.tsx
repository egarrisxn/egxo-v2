import Link from '@/components/link'
import Socials from '@/components/socials'
import ProjectList from '@/components/projects'
import {getProjects} from '@/lib/get-projects'
import {Arrow} from '@/components/icons/other'

export const metadata = {
  title: 'Projects',
  description: 'Some Projects of mine.',
  alternates: {
    canonical: 'https://egxo-v2.vercel.app/projects',
  },
}

export default async function ProjectsPage() {
  const projects = await getProjects()
  return (
    <>
      <header>
        <h1>Some projects _</h1>
      </header>
      <ProjectList showYears={true} projects={projects} seeMore={false} />
      <p>
        See all{' '}
        <Link external href='https://github.com/egarrisxn'>
          projects <Arrow />
        </Link>
      </p>
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
