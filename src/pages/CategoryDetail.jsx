import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { animals, featuredAnimal, findAnimal, lovelycustomers } from '../data'
import { Breadcrumb } from '../components/ui/Breadcrumb'
import { Button } from '../components/ui/Button'
import {
  BackIcon,
  ChatIcon,
  FacebookSmallIcon,
  HealthGuaranteeIcon,
  IdentificationIcon,
  InfoIcon,
  InstagramSmallIcon,
  ShareIcon,
  SlideNextIcon,
  SlidePrevIcon,
  TwitterSmallIcon,
  YoutubeSmallIcon,
} from '../components/ui/Icons'
import { PetCard } from '../components/ui/PetCard'
import { SectionHeading } from '../components/ui/SectionHeading'

const yesNo = (value) => (value ? 'Yes' : 'No')

const shareLinks = [
  { label: 'Facebook', Icon: FacebookSmallIcon },
  { label: 'Twitter', Icon: TwitterSmallIcon },
  { label: 'Instagram', Icon: InstagramSmallIcon },
  { label: 'YouTube', Icon: YoutubeSmallIcon },
]

function SlideButton({ direction, onClick, className = '' }) {
  const Icon = direction === 'prev' ? SlidePrevIcon : SlideNextIcon
  return (
    <button
      type="button"
      aria-label={direction === 'prev' ? 'Previous photo' : 'Next photo'}
      onClick={onClick}
      className={`absolute flex size-[42px] items-center justify-center rounded-full bg-white/40 text-white transition-colors hover:bg-white/60 ${className}`}
    >
      <Icon className="size-[52px] max-w-none shrink-0" />
    </button>
  )
}

function Thumbnails({ gallery, selected, onSelect, name, size }) {
  return (
    <ul className="scrollbar-none flex overflow-x-auto">
      {gallery.map((image, index) => (
        <li key={index} className="shrink-0">
          <button
            type="button"
            aria-label={`Show photo ${index + 1} of ${name}`}
            aria-pressed={index === selected}
            onClick={() => onSelect(index)}
            className={`block overflow-hidden rounded-[6px] border-[3px] transition-colors ${size} ${index === selected ? 'border-secondary' : 'border-transparent'}`}
          >
            <img src={image} alt="" className="size-full rounded-[3px] object-cover" />
          </button>
        </li>
      ))}
    </ul>
  )
}

function Guarantees({ className = '' }) {
  return (
    <div className={`bg-brand-gradient rounded-[10px] px-3 text-[14px] leading-5 font-bold text-primary-80 ${className}`}>
      <p className="flex items-center gap-[9px]">
        <HealthGuaranteeIcon className="shrink-0" />
        100% health guarantee for pets
      </p>
      <p className="flex items-center gap-[9px]">
        <IdentificationIcon className="shrink-0" />
        100% guarantee of pet identification
      </p>
    </div>
  )
}

function InfoRow({ label, children }) {
  return (
    <div className="flex border-b border-neutral-10 pt-2 pb-[7px] text-[14px] leading-5 font-medium text-neutral-60">
      <dt className="w-[min(194px,51%)] shrink-0 px-[11px] pt-1 pb-0.5">{label}</dt>
      <dd className="min-w-0 flex-1 px-[11px] pt-1 pb-0.5">: {children}</dd>
    </div>
  )
}

function LovelyCustomers() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (index) => {
    const track = trackRef.current
    const item = track?.children[index]
    if (item) track.scrollTo({ left: item.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const step = track.children[0].offsetWidth + 12
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2
    setActive(atEnd ? lovelycustomers.length - 1 : Math.round(track.scrollLeft / step))
  }

  return (
    <section className="pt-6 pb-[26px] xl:px-[31.5px]">
      <h2 className="text-[24px] leading-9 font-bold text-primary xl:text-neutral-100">Our lovely customer</h2>
      <ul ref={trackRef} onScroll={handleScroll} className="scrollbar-none -mr-4 mt-3 flex snap-x gap-3 overflow-x-auto pr-4 md:-mr-10 md:pr-10 xl:mr-0 xl:pr-0">
        {lovelycustomers.map((customer, index) => (
          <li key={index} className="shrink-0 snap-start">
            <img src={customer.image} alt={`Happy customer ${index + 1} with their dog`} loading="lazy" width="248" height="340" className="h-[340px] w-[248px] rounded-[10px] object-cover" />
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-center gap-1.5">
        {lovelycustomers.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to customer photo ${index + 1}`}
            aria-current={index === active}
            onClick={() => scrollToIndex(index)}
            className={`h-[9px] rounded-full transition-all duration-300 ${index === active ? 'w-[22.5px] bg-primary' : 'w-[9px] bg-neutral-20'}`}
          />
        ))}
      </div>
    </section>
  )
}

export function CategoryDetail() {
  const [searchParams] = useSearchParams()
  // L'identifiant vient de l'URL : il n'est utilisé que pour chercher dans le catalogue connu.
  const animal = findAnimal(searchParams.get('pet')) ?? featuredAnimal
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setSelected(0)
  }, [animal.id])

  const { gallery } = animal
  const mainImage = gallery[selected] ?? animal.image
  const step = (delta) => setSelected((current) => (current + delta + gallery.length) % gallery.length)

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Dog', to: '/category' },
    { label: animal.category ?? 'Small Dog', to: '/category' },
    { label: animal.name },
  ]
  const morePuppies = animals.filter((item) => item.id !== animal.id).slice(0, 6)

  return (
    <div className="xl:pt-[120px]">
      {/* Galerie mobile & tablette : photo pleine largeur sous la barre d'état */}
      <div className="xl:hidden">
        <div className="relative h-[523px] bg-neutral-10">
          <img src={mainImage} alt={animal.name} className="size-full object-cover" />
          <div className="absolute inset-x-0 top-[47px] flex h-[57px] items-center justify-between pr-4 pl-[3px] text-white md:px-8">
            <Link to="/category" aria-label="Back to category" className="flex size-14 items-center justify-center">
              <BackIcon />
            </Link>
            <button type="button" aria-label="More information" className="flex size-[25px] items-center justify-center">
              <InfoIcon />
            </button>
          </div>
          <SlideButton direction="prev" onClick={() => step(-1)} className="top-[273px] left-4" />
          <SlideButton direction="next" onClick={() => step(1)} className="top-[273px] right-4" />
        </div>
        <div className="mt-[6px] pl-2">
          <Thumbnails gallery={gallery} selected={selected} onSelect={setSelected} name={animal.name} size="mr-[2.64px] size-[73.65px]" />
        </div>
      </div>

      <div className="page-container relative mt-[22px] rounded-t-[20px] bg-neutral-00 shadow-[0px_-6px_12px_0px_rgba(0,0,0,0.04)] xl:mt-0 xl:rounded-none xl:shadow-none">
        <span aria-hidden="true" className="absolute top-2.5 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-neutral-20 xl:hidden" />

        <div className="flex flex-col xl:flex-row xl:gap-[34px] xl:rounded-[20px] xl:border xl:border-neutral-10 xl:py-[21px] xl:pr-[48px] xl:pl-[19px]">
          {/* Colonne gauche (desktop) */}
          <div className="hidden w-[560px] shrink-0 flex-col xl:flex">
            <div className="relative">
              <motion.img
                key={mainImage}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={mainImage}
                alt={animal.name}
                width="560"
                height="476"
                className="h-[476px] w-full rounded-[10px] object-cover"
              />
              <SlideButton direction="prev" onClick={() => step(-1)} className="top-[226px] left-4" />
              <SlideButton direction="next" onClick={() => step(1)} className="top-[226px] right-4" />
            </div>
            <div className="mt-[9px] -ml-[3px]">
              <Thumbnails gallery={gallery} selected={selected} onSelect={setSelected} name={animal.name} size="mr-1.5 size-[100px]" />
            </div>
            <Guarantees className="mt-6 flex h-12 items-center justify-between" />
            <div className="mt-[17px] flex h-8 items-center gap-[21px] px-2.5 text-[14px] leading-5 font-bold text-primary-80">
              <span className="flex items-center gap-2">
                <ShareIcon />
                Share:
              </span>
              <ul className="flex w-[129px] items-center justify-between text-neutral-40">
                {shareLinks.map((link) => (
                  <li key={link.label}>
                    <a href="#" aria-label={`Share on ${link.label}`} className="block transition-colors hover:text-primary">
                      <link.Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Colonne informations */}
          <div className="flex min-w-0 flex-1 flex-col pt-8 xl:pt-0">
            <Breadcrumb items={crumbs} />
            <p className="mt-[18px] hidden text-[14px] leading-5 font-medium text-neutral-40 xl:block">SKU #{animal.sku}</p>
            <h1 className="mt-2 text-[24px] leading-9 font-bold text-neutral-100 xl:mt-0.5">{animal.name}</h1>
            <p className="mt-0.5 text-[20px] leading-8 font-bold text-primary-80 xl:mt-1.5">{animal.price}</p>

            <div className="mt-4 flex gap-3 xl:mt-[18px] xl:gap-[18px]">
              <Button className="w-[138px] font-bold! xl:h-11!">Contact us</Button>
              <Button variant="outline" className="max-w-[260px] min-w-0 flex-1 gap-2.5! border-2! border-primary-80! px-4! font-bold! text-primary-80! hover:text-neutral-00! xl:h-11! xl:w-[217px] xl:flex-none">
                <ChatIcon className="-mt-1 shrink-0" />
                Chat with Monito
              </Button>
            </div>

            <div className="mt-[26px] flex items-center justify-between xl:hidden">
              <h2 className="pl-[5px] text-[18px] leading-6 font-bold text-primary-80">Information</h2>
              <button type="button" className="flex items-center gap-2 pr-[7px] text-[14px] leading-5 font-bold text-primary-80">
                <ShareIcon />
                Share
              </button>
            </div>

            <dl className="mt-[18px] flex flex-col">
              <InfoRow label="SKU">#{animal.sku}</InfoRow>
              <InfoRow label="Gender">{animal.gender}</InfoRow>
              <InfoRow label="Age">{animal.age}</InfoRow>
              <InfoRow label="Size">{animal.size}</InfoRow>
              <InfoRow label="Color">{animal.color}</InfoRow>
              <InfoRow label="Vaccinated">{yesNo(animal.vaccinated)}</InfoRow>
              <InfoRow label="Dewormed">{yesNo(animal.dewormed)}</InfoRow>
              <InfoRow label="Cert">{animal.cert ? 'Yes (MKA)' : 'No'}</InfoRow>
              <InfoRow label="Microchip">{yesNo(animal.microchip)}</InfoRow>
              <InfoRow label="Location">{animal.location}</InfoRow>
              <InfoRow label="Published Date">{animal.Publicate_date}</InfoRow>
              <InfoRow label="Additional Information">
                {/* Une phrase par ligne sur desktop ; retour à la ligne naturel sur mobile. */}
                <span className="xl:inline-block xl:align-top">
                  {animal.Additionnal_Informations.split(/(?<=\.)\s+/).map((sentence) => (
                    <span key={sentence} className="xl:block">
                      {sentence}{' '}
                    </span>
                  ))}
                </span>
              </InfoRow>
            </dl>
          </div>
        </div>

        <Guarantees className="mt-[26px] flex h-24 flex-col justify-center gap-2 xl:hidden" />

        <div className="mt-5">
          <LovelyCustomers />
        </div>
      </div>

      <section className="page-container flex flex-col pt-4 pb-[60px] xl:pt-20 xl:pb-20">
        {/* Mobile : titre seul en 24px ; desktop : sur-titre + titre de section standard. */}
        <h2 className="text-[24px] leading-9 font-bold text-primary xl:hidden">See more puppies</h2>
        <div className="hidden xl:block">
          <SectionHeading eyebrow="Whats new?" title="See more puppies" />
        </div>
        <div className="mt-[18px] grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5 xl:mt-7 xl:grid-cols-4">
          {morePuppies.map((item, index) => (
            <div key={item.id} className={index >= 4 ? 'grid xl:hidden' : 'grid'}>
              <PetCard animal={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
