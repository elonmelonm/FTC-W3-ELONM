import Image from '../../assets/63ed2cc97ebd1b80435a9c0d9051f445ecc741d3.webp'
import { Breadcrumb } from '../ui/Breadcrumb'
import { Button } from '../ui/Button'
import { PlayCircleIcon } from '../ui/Icons'

const crumbs = [{ label: 'Home', to: '/' }, { label: 'Dog', to: '/category' }, { label: 'Small Dog' }]

// Bannière de la page catégorie : 1180×378 sur desktop (texte clair sur bleu), 382×441 sur mobile (texte bleu sur crème).
export function OneMoreFriend() {
  return (
    <section className="page-container pt-[116px] xl:pt-[107px]">
      <Breadcrumb items={crumbs} className="ml-px xl:ml-0" />

      <div className="relative mt-[14px] h-[441px] overflow-hidden rounded-[20px] bg-brand-gradient lg:h-[378px] xl:mt-[9px]">
        {/* Décor mobile & tablette (frame 382×441, centrée) */}
        <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 h-full w-[382px] -translate-x-1/2 lg:hidden">
          <span className="absolute top-[298.6px] left-[-141.4px] flex size-[880.95px] items-center justify-center md:scale-x-[2.4]">
            <span className="block size-[787.54px] flex-none rotate-[7.3deg] rounded-[99px] bg-primary-80" />
          </span>
          <span className="absolute top-[100.1px] left-[285px] flex size-[17.04px] items-center justify-center">
            <span className="block size-[12.05px] flex-none rotate-[-43deg] rounded-[4px] bg-primary-80" />
          </span>
        </div>

        {/* Décor desktop (frame 1180×378) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <span className="absolute top-[-164px] right-[-251.5px] flex h-[1028.64px] w-[1038.81px] items-center justify-center">
            <span className="block h-[788.4px] w-[767.4px] flex-none rotate-[65deg] rounded-[99px] bg-primary-80" />
          </span>
        </div>

        <img
          src={Image}
          alt="Five puppies sitting side by side"
          className="absolute top-[228px] left-1/2 h-[213px] w-[460px] max-w-none -translate-x-1/2 object-cover lg:top-[77px] lg:left-[-70px] lg:h-[301px] lg:w-[650px] lg:translate-x-0 xl:left-[51px]"
        />

        <div className="relative flex flex-col items-start px-4 pt-8 lg:absolute lg:top-16 lg:right-[72px] lg:items-end lg:p-0 lg:text-right">
          <h1 className="flex flex-col font-bold text-primary-80 capitalize lg:mr-[13px] lg:gap-0.5 lg:text-neutral-00">
            <span className="text-[clamp(32px,10.14vw,42px)] leading-[60px] whitespace-nowrap lg:text-[52px] lg:leading-[68px] lg:font-extrabold lg:tracking-[0.25px] lg:[-webkit-text-stroke:0.4px_currentColor]">One more friend</span>
            <span className="text-[clamp(21px,6.28vw,26px)] leading-[38px] whitespace-nowrap lg:text-[36px] lg:leading-[54px]">Thousands more fun!</span>
          </h1>
          <p className="mt-3 max-w-[346px] text-[12px] leading-[18px] font-medium text-neutral-80 lg:mt-2 lg:mr-[13px] lg:max-w-[394px] lg:text-neutral-00">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-6 lg:gap-5">
            <Button variant="outline" className="max-[389px]:px-4! lg:border-neutral-00 lg:text-neutral-00 lg:hover:bg-neutral-00 lg:hover:text-primary">
              View Intro
              <PlayCircleIcon />
            </Button>
            <Button className="w-[163px] max-[389px]:w-auto max-[389px]:px-5! lg:bg-neutral-00 lg:text-primary lg:hover:bg-secondary-40">Explore Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
