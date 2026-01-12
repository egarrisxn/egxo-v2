import styles from './resume.module.css'

export const metadata = {
  title: 'Resume',
  description: 'My current resume.',
  alternates: {
    canonical: 'https://egxo-v2.vercel.app/resume',
  },
}

export default function ResumePage() {
  return (
    <>
      <header>
        <h1>My resume _</h1>
      </header>

      <section>
        <p>Standard US Letter Format</p>
        <object data='/other/EG-US-RESUME-2026.pdf' type='application/pdf' className={styles.pdfUS}>
          <p>
            Your browser does not support PDFs.
            <a href='/other/EG-US-RESUME-2026.pdf' download>
              Download the resume
            </a>
            .
          </p>
        </object>
      </section>
    </>
  )
}
