import { Link, Route, Routes } from "react-router-dom"
import { Adoption } from "./components/Adoption"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Knowledge } from "./components/Knowledge"
import { OneMoreFriend } from "./components/OneMoreFriend"
import { OurProducts } from "./components/OurProducts"
import { PetSellers } from "./components/PetSellers"
import { WhatsNew } from "./components/WhatsNew"
import { Home } from "./pages/home"
import { About } from "./pages/About"

function App() {

  return (
    <>
      <Header />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      
      {/* <HeaderHero /> */}
      {/* <WhatsNew />
      <OneMoreFriend />
      <OurProducts />
      <PetSellers />
      <Adoption />
      <Knowledge />
      <Footer /> */}
    </>
  )
}

export default App
