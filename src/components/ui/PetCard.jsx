import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

function Dot() {
  return <span aria-hidden="true" className="hidden h-1 w-1 shrink-0 rounded-full bg-neutral-60 xl:mx-2.5 xl:block" />
}

// « Product Card / Pet » : 280×378 sur desktop, 185×317 sur mobile.
export function PetCard({ animal }) {
  return (
    <MotionLink
      to={`/category-detail?pet=${encodeURIComponent(animal.id)}`}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="card-shadow flex flex-col gap-2 rounded-[12px] bg-neutral-00 p-2 xl:pb-0"
    >
      <img
        className="aspect-square w-full rounded-[10px] object-cover"
        src={animal.image}
        alt={animal.name}
        loading="lazy"
        width="264"
        height="264"
      />
      <div className="flex flex-col gap-2 p-1 xl:gap-1 xl:px-2 xl:pt-2 xl:pb-5">
        <div className="flex flex-col gap-1">
          <h3 className="min-h-10 pr-px text-[14px] leading-5 font-bold text-neutral-100 xl:min-h-0 xl:pr-0 xl:text-[16px] xl:leading-6">
            {animal.sku} - {animal.name}
          </h3>
          <p className="flex flex-col gap-1 text-[12px] leading-[18px] text-neutral-60 xl:flex-row xl:items-center xl:gap-0">
            <span className="flex gap-1 xl:gap-1.5">
              <span className="font-medium">Gene:</span>
              <span className="font-bold">{animal.gender}</span>
            </span>
            <Dot />
            <span className="flex gap-1 xl:gap-1.5">
              <span className="font-medium">Age:</span>
              <span className="font-bold">{animal.age}</span>
            </span>
          </p>
        </div>
        <p className="text-[16px] leading-6 font-bold text-neutral-100 xl:text-[14px] xl:leading-5">{animal.price}</p>
      </div>
    </MotionLink>
  )
}
