import Image from '../assets/035a16de8e1aa9a0522d0cebb4144a5ceda0344a.webp'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { Button } from './ui/Button'
import { PlayCircleIcon } from './ui/Icons'

// Forme décorative : un carré arrondi, tourné, centré dans sa boîte englobante (cotes Figma).
function Shape({ box, size, rotate, radius, className }) {
    return (
        <span aria-hidden="true" className={`absolute flex items-center justify-center ${box}`}>
            <span className={`block flex-none ${className}`} style={{ width: size, height: size, borderRadius: radius, rotate: `${rotate}deg` }} />
        </span>
    )
}

export function Hero() {
    return (
        <section
            className="relative h-[794px] overflow-hidden rounded-b-[20px] lg:h-[695px] lg:rounded-b-[40px]"
            style={{ backgroundImage: 'linear-gradient(115.33deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)' }}
        >
            {/* Décor mobile & tablette — frame 414×794, centrée */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute top-0 left-1/2 h-full w-[414px] -translate-x-1/2 lg:hidden"
            >
                <Shape box="left-[-396.3px] top-[-671px] size-[810.03px]" size={608.7} rotate={25.23} radius={95} className="bg-secondary" />
                <Shape box="left-[-15.3px] top-[497.2px] size-[576.14px]" size={501.3} rotate={9.35} radius={78} className="bg-primary" />
                <Shape box="left-0 top-[408px] size-[704px]" size={529} rotate={25.23} radius={82.5} className="bg-secondary" />
                <Shape box="left-[349px] top-[180px] size-[18.87px]" size={14.63} rotate={20.79} radius={4} className="bg-secondary" />
                <Shape box="left-[304.4px] top-[202.2px] size-[18.37px]" size={14.02} rotate={-22.85} radius={4} className="bg-secondary" />
                <Shape box="left-[302px] top-[207.1px] size-[17.04px]" size={12.05} rotate={-43} radius={4} className="bg-primary-80" />
                <motion.div
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="absolute top-[408px] left-0 h-[386px] w-[414px]"
                >
                    <img src={Image} alt="" className="absolute top-0 left-[-108px] h-full w-[579px] max-w-none" />
                </motion.div>
            </motion.div>

            <div className="page-container relative h-full">
                {/* Décor desktop — frame 1440×695, alignée sur le conteneur (130px de marge dans la maquette) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="pointer-events-none absolute top-0 left-[-90px] hidden h-full w-[1440px] lg:block xl:left-[-80px]"
                >
                    <Shape box="left-[-91px] top-[564px] size-[880.09px]" size={635} rotate={56.47} radius={99} className="bg-secondary opacity-40" />
                    <Shape box="left-[-335px] top-[-697px] size-[845.09px]" size={635} rotate={25.23} radius={99} className="bg-secondary" />
                    <Shape box="left-[112px] top-[163px] size-[89.31px]" size={67.1} rotate={25.23} radius={20} className="bg-secondary" />
                    <Shape box="left-[757px] top-[148px] size-[18.87px]" size={14.63} rotate={20.79} radius={4} className="bg-secondary" />
                    <Shape box="left-[728px] top-[200px] size-[36.02px]" size={27.5} rotate={-22.85} radius={9} className="bg-secondary" />
                    <Shape box="left-[727px] top-[209px] size-[30.35px]" size={21.47} rotate={-43} radius={6} className="bg-primary-80" />
                    {/* Entre 1024 et 1279px, la photo et ses deux grandes formes glissent vers la gauche pour rester dans le cadre. */}
                    <div className="absolute inset-0 lg:-translate-x-[130px] xl:translate-x-0">
                        <Shape box="left-[596px] top-[268px] size-[729.77px]" size={635} rotate={9.35} radius={99} className="bg-primary" />
                        <Shape box="left-[595px] top-[180px] size-[845.09px]" size={635} rotate={25.23} radius={99} className="bg-secondary" />
                        <motion.div
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="absolute top-[84px] left-[530px] h-[693px] w-[944px] overflow-hidden"
                        >
                            <img src={Image} alt="" className="absolute top-0 left-[-10.15%] h-full w-[110.17%] max-w-none" />
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative flex flex-col pt-[139px] lg:pt-[180px]"
                >
                    <h1 className="flex flex-col font-bold text-primary-80 capitalize lg:gap-1">
                        <span className="text-[clamp(34px,11.1vw,46px)] leading-[60px] whitespace-nowrap lg:text-[60px] lg:leading-[68px]">One more friend</span>
                        <span className="text-[clamp(23px,6.76vw,28px)] leading-[38px] whitespace-nowrap lg:text-[46px] lg:leading-[60px]">Thousands more fun!</span>
                    </h1>
                    <p className="mt-3 max-w-[382px] text-[12px] leading-[18px] font-medium text-neutral-80 lg:mt-6 lg:max-w-[420px] lg:text-[16px] lg:leading-6 xl:max-w-[480px]">
                        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 lg:mt-[34px] lg:gap-5">
                        <Button variant="outline" className="max-[389px]:px-4!">
                            View Intro
                            <PlayCircleIcon />
                        </Button>
                        <Button to="/category" className="w-[163px] max-[389px]:w-auto max-[389px]:px-5!">
                            Explore Now
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
