import { Link, Route, Routes } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Category } from "./pages/Category"
import { CategoryDetail } from "./pages/CategoryDetail"

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header flottant au-dessus du contenu */}
      <Header className="absolute top-0 left-0 w-full z-10" />

      {/* Pages */}
      <main className="flex-1 relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category-detail" element={<CategoryDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
