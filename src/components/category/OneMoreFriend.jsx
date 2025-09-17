import Image from "../../assets/63ed2cc97ebd1b80435a9c0d9051f445ecc741d3.png";
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"

export function OneMoreFriend() {
  return (
    <div className="px-4 md:px-16 xl:px-[130px]  ">
        <div className="flex text-[14px] font-medium leading-[20px] text-neutral-60 mb-[9px] w-[204px] h-6 gap-1.5 ">
            <span className="h-5">Home</span>
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9L14 12L11 15" stroke="#667479" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span className="h-5">Dog</span>
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9L14 12L11 15" stroke="#667479" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span className="h-5">Small Dog</span>
        </div>
        <div className="relative overflow-hidden rounded-[20px] h-[441px] lg:h-[378px] bg-brand-gradient ">
            {/* <span className="w-[787.54px] h-[787.54px] bg-primary-80 rounded-t-[99px] rotate-[28.25deg] lg:rotate-[28.25deg] absolute top-[550px] lg:top-[180px] left-[-201px] lg:left-[-401.28px] xl:left-[-201.28px] "></span> */}
            <span className="w-[816.54px] h-[830.54px] xl:h-[930.54px] bg-primary-80 rounded-b-[99px] rotate-[190.41deg] md:rotate-[380.41deg] lg:rotate-[70.23deg] absolute top-[330px] md:top-[-490px] lg:top-[-40px] left-[-255px] md:left-[-155px] lg:left-[406px] xl:left-[576px] "></span>
            <img className="w-[460px] h-[213px] lg:w-[500px] xl:w-[650px] lg:h-[301px] absolute top-[235px] lg:top-[77px] left-[-10px] lg:left-[-40px] xl:left-[20px] " src={Image} alt="" />

            <div className="flex flex-col md:text-center lg:text-end absolute w-[342px] lg:w-[403px] top-8 lg:top-[64px] sm:right-5 md:right-[155px] lg:right-[55px] xl:right-[85px] gap-3 lg:gap-2">
                <div className="p-2 md:p-0 flex flex-col md:text-center lg:text-end w-[342px] lg:w-[413px] h-[90px] lg:h-[132px] gap-1">
                    <span className='text-primary md:text-neutral-00 text-[36px] lg:text-[52px] leading-[68px] h-[54px] lg:h-[68px] font-bold '>One More Friend</span>
                    <span className='text-primary md:text-neutral-00 text-[24px] lg:text-[36px] leading-[54px] h-[36px] lg:h-[60px] font-bold '>Thousands more fun!</span>
                </div>
                <p className='p-2 sm:p-0 w-full h-[54px] text-[12px] font-medium leading-[18px] text-primary md:text-neutral-00 '>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                <div className="flex flex-row mt-4 gap-2 sm:gap-5 justify-center sm:justify-end">
                    <motion.button whileHover={{ scale: 1.1 }} className='flex items-center w-[161px] h-12 border border-primary md:border-neutral-00 rounded-[57px] px-7 gap-2 '>
                        <span className='text-primary md:text-neutral-00 w-[73px] h-6 font-medium leading-[24px] tracking-[0] text-[15px] align-bottom '>View Intro</span>
                        <span className="rounded-full border-[1.5px] border-primary md:border-neutral-00">
                            <svg className="hidden md:block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 7V13L13 10L8 7Z" fill="#FDFDFD" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className="flex md:hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 7V13L13 10L8 7Z" fill="#003459" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className='flex items-center bg-primary md:bg-neutral-00 w-[163px] h-12 border rounded-[57px] px-7 gap-2 '>
                        <span className='text-neutral-00 md:text-primary w-[92px] h-6 font-medium leading-[24px] tracking-[0] text-[15px] align-bottom '>Explore Now</span>
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}