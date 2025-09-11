import Image from "../assets/cc4b282612bf9db02e233aa64a34946d9a9aed4d.png";

export function OneMoreFriend() {
  return (
    <div className="px-4 md:px-16 xl:px-[130px]  ">
        <div className="relative overflow-hidden rounded-[20px] h-[640px] lg:h-[378px] bg-primary ">
            <span className="w-[787.54px] h-[787.54px] bg-primary-80 rounded-t-[99px] rotate-[28.25deg] lg:rotate-[28.25deg] absolute top-[550px] lg:top-[180px] left-[-201px] lg:left-[-401.28px] xl:left-[-201.28px] "></span>
            <span className="w-[787.54px] h-[787.54px] bg-secondary-40 rounded-b-[99px] rotate-[380.41deg] xl:rotate-[25.23deg] absolute top-[-490px] lg:top-[-360px] left-[-255px] md:left-[-155px] lg:left-[406px] xl:left-[606px] "></span>
            <img className="w-[524px] h-[349px] lg:w-[513px] lg:h-[342px] absolute top-[300px] lg:top-[36px] left-[-10px] lg:left-[-40px] xl:left-[20px] " src={Image} alt="" />

            <div className="flex flex-col text-center lg:text-end absolute w-[342px] lg:w-[403px] top-8 lg:top-[64px] sm:right-5 md:right-[155px] lg:right-[55px] xl:right-[85px] gap-3 lg:gap-2">
                <div className="flex flex-col text-center lg:text-end w-[342px] lg:w-[413px] h-[90px] lg:h-[132px] gap-1">
                    <span className='text-primary text-[36px] lg:text-[52px] leading-[68px] h-[54px] lg:h-[68px] font-bold '>One More Friend</span>
                    <span className='text-primary text-[24px] lg:text-[36px] leading-[54px] h-[36px] lg:h-[60px] font-bold '>Thousands more fun!</span>
                </div>
                <p className='p-2 sm:p-0 w-full h-[54px] text-[12px] font-medium leading-[18px] text-neutral-80 '>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                <div className="flex flex-row mt-4 gap-2 sm:gap-5 justify-center sm:justify-end">
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
        </div>
    </div>
  )
}