import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import Logo from '../assets/Frame.png'
import { Button } from './ui/Button'
import { CaretDownIcon, CloseIcon, FlagVnIcon, MenuIcon, SearchIcon, SearchLargeIcon } from './ui/Icons'

const links = [
    { label: 'Home', to: '/' },
    { label: 'Category', to: '/category' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
]

// `desktopOnly` : la page détail affiche ses propres boutons par-dessus la photo sur mobile.
export function Header({ desktopOnly = false }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const { pathname } = useLocation()

    // Le menu mobile se referme à chaque changement de page.
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    return (
        <motion.header
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="absolute inset-x-0 top-0 z-30"
        >
            {/* Header Desktop — 1440×100 */}
            <div className="page-container hidden h-[100px] items-center justify-between gap-6 xl:flex">
                <div className="flex items-center gap-12">
                    <Link to="/" aria-label="Monito — Home" className="shrink-0">
                        <img src={Logo} alt="Monito, pets for best" width="115" height="40" />
                    </Link>
                    <nav aria-label="Main" className="flex items-center gap-12 text-[16px] leading-6 font-bold text-primary">
                        {links.map((link) => (
                            <Link key={link.label} to={link.to} className="transition-colors duration-200 hover:text-primary-40">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-3.5">
                    <label className="flex h-11 w-[280px] items-center gap-3 rounded-[46px] bg-neutral-00 py-3 pr-5 pl-4 text-neutral-60">
                        <SearchIcon className="shrink-0" />
                        <span className="sr-only">Search</span>
                        <input
                            type="search"
                            name="q"
                            placeholder="Search something here!"
                            autoComplete="off"
                            maxLength={80}
                            className="w-full min-w-0 bg-transparent text-[14px] leading-5 font-medium text-neutral-100 outline-none placeholder:text-neutral-40"
                        />
                    </label>
                    <Button className="h-11! w-[203px] font-bold!">Join the community</Button>
                    <button type="button" aria-label="Currency: VND" className="flex h-11 items-center gap-1 px-2 pt-2.5 pb-2">
                        <span className="flex items-center gap-1.5">
                            <FlagVnIcon />
                            <span className="text-[16px] leading-[23px] font-medium text-primary-80">VND</span>
                        </span>
                        <CaretDownIcon className="text-primary-80" />
                    </button>
                </div>
            </div>

            {/* Header mobile & tablette — 57px sous la barre d'état (47px) */}
            <div className={`${desktopOnly ? 'hidden' : 'flex'} relative mt-[47px] h-[57px] items-center justify-between pr-3.5 pl-2.5 text-neutral-100 md:px-10 xl:hidden`}>
                <button
                    type="button"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex h-8 w-8 items-center justify-center"
                >
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <Link to="/" aria-label="Monito — Home" className="absolute left-1/2 -translate-x-1/2">
                    <img src={Logo} alt="Monito, pets for best" width="92" height="32" className="h-8 w-[92px]" />
                </Link>
                <button type="button" aria-label="Search" className="flex h-8 w-8 items-center justify-center">
                    <SearchLargeIcon />
                </button>
            </div>

            {menuOpen && !desktopOnly && (
                <motion.nav
                    id="mobile-menu"
                    aria-label="Main"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mx-4 mt-2 flex flex-col items-center gap-5 rounded-[20px] bg-neutral-00 px-4 py-6 shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.12)] md:mx-10 xl:hidden"
                >
                    {links.map((link) => (
                        <Link key={link.label} to={link.to} className="text-[16px] leading-6 font-bold text-primary hover:text-primary-40">
                            {link.label}
                        </Link>
                    ))}
                    <Button className="h-11! w-[203px] font-bold!">Join the community</Button>
                </motion.nav>
            )}
        </motion.header>
    )
}
