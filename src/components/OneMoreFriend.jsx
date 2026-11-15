import Image from '../assets/cc4b282612bf9db02e233aa64a34946d9a9aed4d.webp'
import { Button } from './ui/Button'
import { PlayCircleIcon } from './ui/Icons'

// Bannière « One more friend » : 1180×378 sur desktop, 382×640 sur mobile.
export function OneMoreFriend() {
    return (
        <section className="page-container">
            <div className="relative h-[640px] overflow-hidden rounded-[20px] bg-primary lg:h-[378px]">
                {/* Décor mobile & tablette (frame 382×640, centrée) */}
                <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 h-full w-[382px] -translate-x-1/2 lg:hidden">
                    <span className="absolute top-[400.72px] left-[-331.3px] flex size-[1066.5px] items-center justify-center">
                        <span className="block size-[787.54px] flex-none rotate-[28.25deg] rounded-[99px] bg-primary-80" />
                    </span>
                    <span className="absolute top-[-354px] left-[-210.6px] flex h-[742.15px] w-[718.69px] items-center justify-center md:scale-x-[2.4]">
                        <span className="block h-[631.1px] w-[600.6px] flex-none rotate-[12deg] rounded-[80px] bg-secondary-40" />
                    </span>
                </div>

                {/* Décor desktop (frame 1180×378) */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
                    <span className="absolute top-[-360px] right-[-304.3px] flex h-[907.88px] w-[978.34px] items-center justify-center">
                        <span className="block h-[635px] w-[782.29px] flex-none rotate-[25.23deg] rounded-[99px] bg-secondary-40" />
                    </span>
                    <span className="absolute top-[28.72px] left-[-567px] flex size-[1066.5px] items-center justify-center xl:left-[-331.28px]">
                        <span className="block size-[787.54px] flex-none rotate-[28.25deg] rounded-[99px] bg-primary-80" />
                    </span>
                </div>

                <img
                    src={Image}
                    alt="Woman lifting her puppy to kiss it"
                    loading="lazy"
                    className="absolute top-[291px] left-1/2 h-[349px] w-[524px] max-w-none -translate-x-1/2 object-cover lg:top-[36px] lg:left-[-60px] lg:h-[342px] lg:w-[513px] lg:translate-x-0 xl:left-5"
                />

                <div className="relative flex flex-col items-center px-5 pt-8 text-center lg:absolute lg:top-16 lg:right-[72px] lg:items-end lg:p-0 lg:text-right">
                    <h2 className="flex flex-col font-bold text-primary capitalize lg:mr-[13px] lg:gap-0.5">
                        <span className="text-[36px] leading-[54px] lg:text-[52px] lg:leading-[68px] lg:font-extrabold lg:tracking-[0.25px] lg:[-webkit-text-stroke:0.4px_currentColor]">One more friend</span>
                        <span className="text-[24px] leading-9 lg:text-[36px] lg:leading-[54px]">Thousands more fun!</span>
                    </h2>
                    <p className="mt-3 max-w-[342px] text-[12px] leading-[18px] font-medium text-neutral-80 lg:mt-2 lg:mr-[13px] lg:max-w-[394px]">
                        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:mt-6 lg:gap-5">
                        <Button variant="outline" className="max-[389px]:px-4!">
                            View Intro
                            <PlayCircleIcon />
                        </Button>
                        <Button to="/category" className="w-[163px] max-[389px]:w-auto max-[389px]:px-5!">
                            Explore Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
