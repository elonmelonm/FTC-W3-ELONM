import { Adoption } from "../components/Adoption";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Knowledge } from "../components/Knowledge";
import { OneMoreFriend } from "../components/OneMoreFriend";
import { OurProducts } from "../components/OurProducts";
import { PetSellers } from "../components/PetSellers";
import { WhatsNew } from "../components/WhatsNew";


export function Home() {
    return (
        <>
            {/* <div className='absolute top-0 left-0 w-full h-full'> */}
                <Hero />
                <WhatsNew />
                <OneMoreFriend />
                <OurProducts />
                <PetSellers />
                <Adoption />
                <Knowledge />
                {/* <Footer /> */}
            {/* </div> */}
        </>
    )
}