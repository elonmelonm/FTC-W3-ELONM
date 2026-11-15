import Image from '../assets/dcc94436190409de921d3586c62ceebc4d4890f1.webp'
import { Button } from './ui/Button'
import { PawIcon, PlayCircleIcon } from './ui/Icons'

// Bannière « Adoption » (1180×378) — miroir horizontal de la bannière « One more friend ».
// Absente des maquettes mobiles : affichée à partir de la tablette paysage.
export function Adoption() {
    return (
        <section className="page-container hidden lg:block">
            <div className="relative h-[378px] overflow-hidden rounded-[20px] bg-[#FFB775]">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <span className="absolute top-[-360px] left-[-304.3px] flex h-[907.88px] w-[978.34px] items-center justify-center">
                        <span className="block h-[635px] w-[782.29px] flex-none rotate-[-25.23deg] rounded-[99px] bg-secondary-40" />
                    </span>
                    <span className="absolute top-[28.72px] right-[-567px] flex size-[1066.5px] items-center justify-center xl:right-[-331.28px]">
                        <span className="block size-[787.54px] flex-none rotate-[-28.25deg] rounded-[99px] bg-brand-gradient opacity-30" />
                    </span>
                </div>

                <span className="pointer-events-none absolute top-[-127.09px] right-[-22.48px] flex h-[646.6px] w-[606.53px] items-center justify-center lg:right-[-140px] xl:right-[-22.48px]">
                    <img
                    src={Image}
                        alt="A hand holding a dog's paw"
                        loading="lazy"
                        className="h-[358.79px] w-[538.53px] max-w-none flex-none -scale-x-100 rotate-[54.07deg] object-cover"
                    />
                </span>

                <div className="absolute top-16 left-[72px] flex flex-col items-start">
                    <h2 className="ml-[13px] flex flex-col gap-0.5 font-bold text-primary capitalize">
                        <span className="flex items-center gap-4 text-[52px] leading-[68px] font-extrabold tracking-[0.25px] [-webkit-text-stroke:0.4px_currentColor]">
                            Adoption
                            <PawIcon className="mb-2.5" />
                        </span>
                        <span className="text-[36px] leading-[54px]">We need help. so do they.</span>
                    </h2>
                    <p className="mt-2 ml-[13px] text-[12px] leading-[18px] font-medium text-neutral-80">
                        Adopt a pet and give it a home,
                        <br />
                        it will be love you back unconditionally.
                    </p>
                    <div className="mt-[42px] flex gap-5">
                        <Button className="w-[163px]">Explore Now</Button>
                        <Button variant="outline">
                            View Intro
                            <PlayCircleIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
