import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const MotionLink = motion.create(Link)

const base = 'shrink-0 items-center justify-center whitespace-nowrap rounded-[57px] font-medium transition-colors duration-200'

// Tailles « Button L » (48px) et « Button M » (44px) de la maquette.
const sizes = {
  lg: 'h-12 gap-2 px-7 pt-[14px] pb-[10px] text-[16px] leading-6',
  md: 'h-11 gap-2 px-7 py-3 text-[14px] leading-5',
}

const variants = {
  filled: 'bg-primary text-neutral-00 hover:bg-primary-60',
  outline: 'border-[1.5px] border-primary text-primary hover:bg-primary hover:text-neutral-00',
  // Variantes sur fond sombre (bannière de la page catégorie).
  'filled-light': 'bg-neutral-00 text-primary hover:bg-secondary-40',
  'outline-light': 'border-[1.5px] border-neutral-00 text-neutral-00 hover:bg-neutral-00 hover:text-primary',
}

export function Button({ variant = 'filled', size = 'lg', to, className = '', children, ...props }) {
  // `inline-flex` par défaut, sauf si l'appelant gère lui-même l'affichage (ex. « hidden lg:inline-flex »).
  const display = /(^|\s)hidden(\s|$)/.test(className) ? '' : 'inline-flex'
  const classes = `${display} ${base} ${sizes[size]} ${variants[variant]} ${className}`
  const motionProps = { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 } }

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps} {...props}>
        {children}
      </MotionLink>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
