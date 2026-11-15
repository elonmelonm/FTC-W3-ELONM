import Sheba from '../assets/petsellersicons/02b6b26658915815ebfb624ccd4b8f8bc9d06ecf.webp'
import Whiskas from '../assets/petsellersicons/69262552e00bed606afe9e77f1cc9c7f2e95597b.webp'
import Bakers from '../assets/petsellersicons/4400db70058110bfc32e5bc6e602a644bb081932.webp'
import Felix from '../assets/petsellersicons/e25c6f9e2a2af258ba0090ef77ead6e78aec992d.webp'
import GoodBoy from '../assets/petsellersicons/abf81bf3b261ca3e4e94dccf723b6ed12db2575b.webp'
import Butchers from '../assets/petsellersicons/a10a1b4370e851524fa4db43a4f7d590708a8d8b.webp'
import Pedigree from '../assets/petsellersicons/d46b554b89025a0019d8f8d0409d4bc87affc11e.webp'
import { Button } from './ui/Button'
import { ChevronRightIcon } from './ui/Icons'

// Dimensions des logos dans la maquette (cellules de 151.43×112, espacées de 20px).
const sellers = [
    { name: 'Sheba', image: Sheba, width: 88, height: 64 },
    { name: 'Whiskas', image: Whiskas, width: 114, height: 114 },
    { name: 'Bakers', image: Bakers, width: 104, height: 46 },
    { name: 'Felix', image: Felix, width: 92, height: 64 },
    { name: 'Good Boy', image: GoodBoy, width: 92, height: 92 },
    { name: "Butcher's", image: Butchers, width: 130, height: 56 },
    { name: 'Pedigree', image: Pedigree, width: 116, height: 72 },
]

function SellerRow({ hidden = false }) {
    return (
        <ul aria-hidden={hidden || undefined} className="flex shrink-0 gap-5 pr-5">
            {sellers.map((seller) => (
                <li key={seller.name} className="flex h-28 w-[151.43px] shrink-0 items-center justify-center">
                    <img
                        src={seller.image}
                        alt={hidden ? '' : seller.name}
                        loading="lazy"
                        width={seller.width}
                        height={seller.height}
                        style={{ width: seller.width, height: seller.height }}
                        className="max-w-none object-contain"
                    />
                </li>
            ))}
        </ul>
    )
}

// Section absente des maquettes mobiles : affichée à partir de la tablette paysage.
export function PetSellers() {
    return (
        <section className="page-container hidden flex-col gap-[15px] py-10 lg:flex">
            <div className="flex items-center justify-between">
                <h2 className="flex items-baseline gap-2">
                    <span className="text-[16px] leading-6 font-medium text-black">Proud to be part of</span>
                    <span className="text-[24px] leading-9 font-bold text-primary capitalize">Pet Sellers</span>
                </h2>
                <Button variant="outline" size="md">
                    View all our sellers
                    <ChevronRightIcon />
                </Button>
            </div>
            {/* Défilement infini : la rangée est dupliquée et translatée de -50%. */}
            <div className="overflow-hidden">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    <SellerRow />
                    <SellerRow hidden />
                </div>
            </div>
        </section>
    )
}
