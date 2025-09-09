import Image from '../assets/035a16de8e1aa9a0522d0cebb4144a5ceda0344a.png'
import Rectangle2 from '../assets/Rectangle 2.png'
import Logo from '../assets/Frame.png'

export function HeaderHero() {
  return (
    <div className="relative items-center font-[var(--font-gilroy)] overflow-hidden bg-brand-gradient w-[414px] min-h-[623px] lg:w-full lg:min-h-[695px] rounded-b-[20px] ">
        <span className="w-[634.99px] h-[634.99px] bg-secondary rounded-[99px] rotate-[25.23deg] absolute top-[-597px] left-[-235px] z-0 "></span>
        <span className="w-[67.10330080821123px] h-[67.10330080821123px] bg-secondary rounded-[20px] rotate-[25.23deg] absolute top-[163px] left-[112px] z-0 "></span>
        <span className="w-[528.98px] h-[528.98px] bg-secondary rounded-[99px] rotate-[56.47deg] absolute top-[664px] right-[884.91px]  "></span>
        <span className="w-[528.98px] h-[528.98px] bg-primary rounded-t-[99px] rotate-[9.35deg] absolute top-[298px] right-[348.23px] "></span>
        <span className="w-[635px] h-[635px] bg-secondary rounded-t-[99px] rotate-[25.23deg] absolute top-[280px] right-[163.91px] "></span>
        <span className="w-[27.5px] h-[27.5px] bg-secondary rounded-[9px] rotate-[22.85deg] absolute top-[200px] left-[728px] z-0 "></span>
        <span className="w-[21.47px] h-[21.47px] bg-primary rounded-[6px] rotate-[43deg] absolute top-[209px] left-[727px] z-0 "></span>
        <span className="w-[14.63px] h-[14.63px] bg-secondary rounded-[4px] rotate-[20.79deg] absolute top-[148px] left-[757px] z-0 "></span>
        <span className='w-[944px] h-[693px] absolute top-[84px] left-[520px] '>
            <img src={Image} alt="" />
        </span>
        <header className="flex lg:flex-row lg:justify-between h-[100px] bg-transparent px-[130px] py-7 ">
            <div className="flex items-center lg:w-[529px] h-10 gap-12 ">
                <img className='w-[115px] z-20 ' src={Logo} alt="" />
                <div className='flex w-[366px] h-6 gap-12 items-center '>
                    <div className='w-11 h-6 text-primary font-bold size-4 '>Home</div>
                    <div className='w-[71px] h-6 text-primary font-bold size-4 '>Category</div>
                    <div className='w-[46px] h-6 text-primary font-bold size-4 '>About</div>
                    <div className='w-[61px] h-6 text-primary font-bold size-4 '>Contact</div>
                </div>
            </div>
            <div className="flex lg:w-[615px] h-11 gap-3.5 ">
                <div className='flex bg-neutral-00 w-[280px] h-11 rounded-[46px] px-5 py-3 gap-3 '>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.281 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0916 18.0667C18.2418 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2418 17.0637 18.0916 16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15Z" fill="#667479"/>
                    </svg>
                    <input className='' type="text" placeholder='Search something here!' />
                </div>
                <button className='w-[203px] h-11 items-center rounded-[57px] bg-primary px-6 gap-2.5'>
                    <span className='font-medium size-4 text-neutral-00'>Join the Community</span> 
                </button>
                <div className='flex w-[104px] h-11 pt-2.5 pb-2  gap-1'>
                    <div className='flex w-[60px] h-[23px] gap-1.5 '>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1221_518)">
                            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" fill="#D80027"/>
                            <path d="M11 7.17392L11.8634 9.83108H14.6573L12.397 11.4733L13.2603 14.1305L11 12.4882L8.73971 14.1305L9.60309 11.4733L7.34277 9.83108H10.1366L11 7.17392Z" fill="#FFDA44"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1221_518">
                            <rect width="16" height="16" fill="white" transform="translate(3 3)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span className='flex w-[33px] font-medium size-4 text-primary '>VND</span>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 11L12 14L9 11" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <div className="flex flex-col absolute w-[480px] top-[150px] left-[125px] gap-6">
                <div className="flex flex-col w-[480px] h-[132px] gap-1">
                    <span className='text-primary-80 text-[60px] h-[68px] font-bold '>One More Friend</span>
                    <span className='text-primary-80 text-[46px] h-[60px] font-bold '>Thousands more fun!</span>
                </div>
                <p className='w-full h-[72px] text-[16px] font-medium text-neutral-80 '>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                <div className="flex flex-row gap-5">
                    <button className='flex items-center w-[161px] h-12 border rounded-[57px] px-7 gap-2 '>
                        <span className='text-primary w-[73px] h-6 font-medium leading-[24px] tracking-[0] text-[15px] align-bottom '>View Intro</span>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 9V15L15 12L10 9Z" fill="#003459" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <button className='flex items-center bg-primary w-[163px] h-12 border rounded-[57px] px-7 gap-2 '>
                        <span className='text-neutral-00 w-[92px] h-6 font-medium leading-[24px] tracking-[0] text-[15px] align-bottom '>Explore Now</span>
                    </button>
                </div>
            </div>
            {/* <div className="w-[528.98px] h-[528.98px] bg-primary rounded-[48px] rotate-[5.37deg] absolute top-[497.2px] left-[16.73px] ">

            </div> */}
            {/* <div className=''> */}
                {/* <div className="w-[528.98px] h-[528.98px] bg-secondary rounded-[48px] rotate-[20.23deg] absolute top-[408px] left-20  ">

                </div>
                <img className='w-[414px] h-[386px] absolute top-[408px] ' src={Image} alt="" /> */}
            {/* </div> */}
        </header>
    </div>
  );
}