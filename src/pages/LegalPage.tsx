import { useLocation, useParams } from 'react-router-dom'
import { InnerBanner } from '../components/shared/InnerBanner'
import { getLegalPage } from '../data/legal'
import { NotFoundPage } from './NotFoundPage'

type LegalPageProps = {
  pageSlug?: string
}

export function LegalPage({ pageSlug }: LegalPageProps) {
  const { slug = '' } = useParams()
  const { pathname } = useLocation()
  const page = getLegalPage(pageSlug || slug || pathname.replace(/^\//, ''))

  if (!page) return <NotFoundPage compact />

  return (
    <div className="legal-page">
      <InnerBanner
        title={page.title}
        eyebrow="Legal"
        crumbs={[{ label: page.title }]}
        centered
      >
        <p className="mil-dark-soft mil-up legal-intro">{page.intro}</p>
      </InnerBanner>

      <section className="mil-p-90-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="legal-content single-post-text" dangerouslySetInnerHTML={{ __html: page.contentHtml }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
