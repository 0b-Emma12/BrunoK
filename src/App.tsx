import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteFrame } from './components/layout/SiteFrame'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { CategoryPage } from './pages/CategoryPage'
import { ContactPage } from './pages/ContactPage'
import { GalleryPage } from './pages/GalleryPage'
import { Home2Page } from './pages/Home2Page'
import { HomePage } from './pages/HomePage'
import { LegalPage } from './pages/LegalPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  return (
    <SiteFrame>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-2" element={<Home2Page />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/portfolio" element={<PortfolioPage variant="grid" />} />
        <Route path="/portfolio-6" element={<PortfolioPage variant="grid" />} />
        <Route path="/portfolio-2-2" element={<PortfolioPage variant="wide" />} />
        <Route path="/portfolio-3-2" element={<PortfolioPage variant="carousel" />} />
        <Route path="/portfolio/item/:slug" element={<ProjectDetailPage />} />
        <Route path="/services-6" element={<ServicesPage />} />
        <Route path="/services/item/:slug" element={<ServiceDetailPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/team" element={<Navigate to="/home-2" replace />} />
        <Route path="/media/official-music-videos" element={<Navigate to="/portfolio-6" replace />} />
        <Route path="/media/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<LegalPage pageSlug="privacy-policy" />} />
        <Route path="/terms-and-conditions" element={<LegalPage pageSlug="terms-and-conditions" />} />
        <Route path="/:year/:month/:day/:slug" element={<BlogPostPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteFrame>
  )
}

export default App
