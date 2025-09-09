import { Adoption } from "./components/Adoption"
import { Footer } from "./components/Footer"
import { HeaderHero } from "./components/HeaderHero"
import { Knowledge } from "./components/Knowledge"
import { OneMoreFriend } from "./components/OneMoreFriend"
import { OurProducts } from "./components/OurProducts"
import { PetSellers } from "./components/PetSellers"
import { WhatsNew } from "./components/WhatsNew"

function App() {

  return (
    <>
      <HeaderHero />
      <WhatsNew />
      <OneMoreFriend />
      <OurProducts />
      <PetSellers />
      <Adoption />
      <Knowledge />
      <Footer />
    </>
  )
}

export default App
