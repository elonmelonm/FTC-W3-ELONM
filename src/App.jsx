import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Category } from './pages/Category'
import { CategoryDetail } from './pages/CategoryDetail'

function App() {
  const { pathname, search } = useLocation()
  const isDetailPage = pathname === '/category-detail'

  // Chaque navigation repart du haut de la page.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, search])

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header desktopOnly={isDetailPage} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category-detail" element={<CategoryDetail />} />
          <Route path="/about" element={<About title="About us" />} />
          <Route path="/contact" element={<About title="Contact" />} />
          <Route path="*" element={<About title="Page not found" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
