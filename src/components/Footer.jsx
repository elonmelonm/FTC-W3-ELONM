import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Frame.png'
import { Button } from './ui/Button'
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './ui/Icons'

const links = [
    { label: 'Home', to: '/' },
    { label: 'Category', to: '/category' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
]

const socials = [
    { label: 'Facebook', Icon: FacebookIcon },
    { label: 'Twitter', Icon: TwitterIcon },
    { label: 'Instagram', Icon: InstagramIcon },
    { label: 'YouTube', Icon: YoutubeIcon },
]

export function Footer() {
    const [subscribed, setSubscribed] = useState(false)

    // Démo front uniquement : aucune donnée n'est envoyée. La validation du format est faite par le navigateur.
    const handleSubmit = (event) => {
        event.preventDefault()
        setSubscribed(true)
        event.currentTarget.reset()
    }

    return (
        <footer
            className="rounded-t-[40px] pt-10 pb-5 xl:pt-20 xl:pb-10"
            style={{ backgroundImage: 'linear-gradient(126.78deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)' }}
        >
            <div className="page-container">
                <div className="flex flex-col gap-10 border-b border-neutral-20 pb-[39px]">
                    <div className="flex flex-col gap-4 rounded-[16px] bg-primary p-4 lg:flex-row lg:items-start lg:gap-5 lg:p-8">
                        <h2 className="text-[20px] leading-8 font-bold text-neutral-00 capitalize lg:w-[389px] lg:shrink-0 lg:text-[24px] lg:leading-9">
                            Register now so you don't miss our programs
                        </h2>
                        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-3 rounded-[14px] bg-white p-3 lg:flex-row lg:items-center">
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="newsletter-email"
                                type="email"
                                name="email"
                                required
                                maxLength={254}
                                autoComplete="email"
                                placeholder="Enter your Email"
                                onChange={() => setSubscribed(false)}
                                className="h-12 w-full min-w-0 shrink-0 rounded-[8px] lg:w-auto lg:flex-1 lg:shrink border border-neutral-40 bg-white px-7 py-3.5 text-[14px] leading-5 font-medium text-neutral-100 placeholder:text-neutral-40"
                            />
                            <Button type="submit" className="w-full rounded-[8px]! lg:w-[163px]">
                                Subcribe Now
                            </Button>
                        </form>
                    </div>
                    <p role="status" className={subscribed ? '-mt-6 text-[14px] leading-5 font-medium text-primary' : 'sr-only'}>
                        {subscribed ? 'Thanks! You are on the list.' : ''}
                    </p>
                    <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
                        <nav aria-label="Footer" className="flex w-full justify-between text-[16px] leading-6 font-medium text-neutral-100 lg:w-auto lg:justify-start lg:gap-[60px]">
                            {links.map((link) => (
                                <Link key={link.label} to={link.to} className="min-w-[63.67px] transition-colors duration-200 hover:text-primary-40 lg:min-w-0">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <ul className="flex gap-10 text-neutral-100">
                            {socials.map((social) => (
                                <li key={social.label}>
                                    <a href="#" aria-label={social.label} className="block transition-colors duration-200 hover:text-primary-40">
                                        <social.Icon className="size-5 lg:size-6" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center pt-9 text-neutral-60 lg:grid lg:grid-cols-3 lg:pt-10">
                    <p className="order-3 mt-2 text-[10px] leading-4 lg:order-1 lg:mt-0 lg:justify-self-start lg:text-[14px] lg:leading-5 lg:font-medium">
                        © 2022 Monito. All rights reserved.
                    </p>
                    <Link to="/" aria-label="Monito — Home" className="order-1 lg:order-2 lg:justify-self-center">
                        <img src={Logo} alt="Monito, pets for best" width="115" height="40" loading="lazy" />
                    </Link>
                    <p className="order-2 mt-8 flex gap-3 text-[12px] leading-[18px] font-medium lg:order-3 lg:mt-0 lg:justify-self-end lg:gap-[30px] lg:text-[14px] lg:leading-5">
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
