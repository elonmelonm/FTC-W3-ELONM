import { Link } from 'react-router-dom'
import Logo from '../assets/Frame.png'
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"


export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log('effzff: ', menuOpen)
    return (
        <>

            {/* header en desktop */}
            <motion.div initial={{ y: -70 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 z-10 hidden xl:flex lg:flex-row lg:justify-between h-[100px] gap-9 bg-transparent px-[130px] py-7 ">
                <div className="flex items-center lg:w-[529px] h-10 gap-12 ">
                    <img className='w-[115px] z-20 ' src={Logo} alt="" />
                    <div className='flex w-[366px] h-6 gap-12 items-center '>
                        <motion.span whileHover={{ scale: 1.1 }} className='w-11 h-6 text-primary font-bold size-4 hover:text-primary-40 '><Link to="/">Home</Link></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} className='w-[71px] h-6 text-primary font-bold size-4 hover:text-primary-40 '><Link to="/category">Category</Link></motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} className='w-[46px] h-6 text-primary font-bold size-4 hover:text-primary-40 '>About</motion.span>
                        <motion.span whileHover={{ scale: 1.1 }} className='w-[61px] h-6 text-primary font-bold size-4 hover:text-primary-40 '>Contact</motion.span>
                    </div>
                </div>
                <div className="flex lg:w-[615px] h-11 gap-3.5 ">
                    <div className='flex bg-neutral-00 w-[280px] h-11 rounded-[46px] px-5 py-3 gap-3 '>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.281 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0916 18.0667C18.2418 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2418 17.0637 18.0916 16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15Z" fill="#667479" />
                        </svg>
                        <input className='' type="text" placeholder='Search something here!' />
                    </div>
                    <motion.button whileHover={{ scale: 1.1 }} className='w-[203px] h-11 items-center rounded-[57px] text-neutral-00 hover:text-primary bg-primary hover:bg-neutral-10 cursor-pointer px-6 gap-2.5'>
                        <span className='font-medium size-4 '>Join the Community</span>
                    </motion.button>
                    <div className='flex w-[104px] h-11 pt-2.5 pb-2  gap-1'>
                        <div className='flex w-[60px] h-[23px] gap-1.5 '>
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1221_518)">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" fill="#D80027" />
                                    <path d="M11 7.17392L11.8634 9.83108H14.6573L12.397 11.4733L13.2603 14.1305L11 12.4882L8.73971 14.1305L9.60309 11.4733L7.34277 9.83108H10.1366L11 7.17392Z" fill="#FFDA44" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1221_518">
                                        <rect width="16" height="16" fill="white" transform="translate(3 3)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='flex w-[33px] font-medium size-4 text-primary '>VND</span>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 11L12 14L9 11" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </motion.div>

            {/* header en mobile & tablet */}
            <motion.div initial={{ y: -70 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }} 
                className='flex xl:hidden z-10 items-center justify-between h-[57px] bg-transparent absolute top-[33px] w-full pr-3.5 pl-2.5 pt-0.5 md:px-16'>
                <span onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    { !menuOpen && (
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.6665 23.1667H25.3332M6.6665 16.5H25.3332M6.6665 9.83334H25.3332" stroke="#00171F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>)
                    }
                    { menuOpen && (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#00171F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="#00171F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    )}
                </span>
                <img src={Logo} alt="" />
                <span>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6771 21.061L18.4131 16.8283C20.0682 14.763 20.8698 12.1416 20.6529 9.5031C20.436 6.86457 19.2172 4.40946 17.2471 2.64261C15.277 0.875762 12.7054 -0.0685392 10.0609 0.00387725C7.41647 0.0762937 4.90025 1.15992 3.02965 3.03195C1.15904 4.90398 0.0762357 7.42211 0.0038743 10.0686C-0.0684871 12.715 0.875097 15.2886 2.64061 17.2602C4.40612 19.2318 6.85935 20.4515 9.49588 20.6686C12.1324 20.8856 14.7518 20.0835 16.8155 18.4271L21.045 22.6598C21.1519 22.7676 21.279 22.8531 21.419 22.9115C21.5591 22.9699 21.7093 23 21.861 23C22.0128 23 22.163 22.9699 22.303 22.9115C22.4431 22.8531 22.5702 22.7676 22.6771 22.6598C22.8842 22.4453 23 22.1587 23 21.8604C23 21.5621 22.8842 21.2755 22.6771 21.061ZM10.3679 18.4271C8.77668 18.4271 7.22122 17.9549 5.89819 17.0702C4.57516 16.1855 3.54398 14.928 2.93506 13.4569C2.32614 11.9857 2.16681 10.3668 2.47724 8.80501C2.78767 7.24321 3.5539 5.8086 4.67904 4.6826C5.80419 3.5566 7.23771 2.78979 8.79833 2.47912C10.3589 2.16846 11.9766 2.3279 13.4466 2.93729C14.9167 3.54668 16.1732 4.57864 17.0572 5.90267C17.9412 7.2267 18.4131 8.78335 18.4131 10.3757C18.4131 12.5111 17.5655 14.559 16.0567 16.0689C14.5479 17.5788 12.5016 18.4271 10.3679 18.4271Z" fill="#00171F" />
                    </svg>
                </span>
            </motion.div>

            {/* Mobile menu dropdown */}
            {menuOpen && (
                    <div className="xl:hidden absolute top-[100px] left-0 w-full h-full border-b z-10 border-[#FFFFFF29] animate-slideDown">
                        <div className="flex flex-col gap-4 px-4 justify-center bg-brand-gradient rounded-2xl h-[50%] items-center pt-2 text-primary-0">
                            <Link to="/" className='w-11 h-6 text-primary font-bold size-4 hover:text-primary-40 '>Home</Link>
                            <Link to="/category" className='w-[71px] h-6 text-primary font-bold size-4 hover:text-primary-40 '>Category</Link>
                            <span className='w-[46px] h-6 text-primary font-bold size-4 hover:text-primary-40 '>About</span>
                            <div className='w-[61px] h-6 text-primary font-bold size-4 hover:text-primary-40 '>Contact</div>
                            <button className='w-[203px] h-11 items-center rounded-[57px] bg-primary px-6 gap-2.5'>
                                <span className='font-medium size-4 text-neutral-00'>Join the Community</span>
                            </button>
                        </div>
                    </div>
            )}
        </>
    )
}