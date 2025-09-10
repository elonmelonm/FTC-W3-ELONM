

export function Knowledge() {
  return (
    <div className="flex flex-col min-h-[634px] p-4 md:px-16 xl:px-[130px] py-10 xl:py-[60px] gap-7 ">
        <div className="relative flex flex-row">
            <div className="flex flex-col w-[367px] h-[62px] gap-0.5 ">
                <span className="w-[145px] h-[24px] text-[#000000] font-medium leading-[24px] tracking-[0] text-[16px]">You already know ?</span>
                <span className="w-full h-[36px] font-bold text-primary leading-[36px] tracking-[0] text-[24px]">Useful pet knowledge</span>
            </div>
            <button className='hidden xl:flex items-center absolute right-0 bottom-0 w-[151px] h-12 border rounded-[57px] px-7 gap-2 '>
                <span className='text-primary w-[67px] h-6 font-medium leading-[20px] tracking-[0] text-[13px] align-bottom '>View more</span>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
            <div className="w-full h-[424px] bg-white p-2 ">
                <img className="w-full h-[240px] rounded-[10px] " src="" alt="" />
                <div className="flex flex-col w-full h-[160px] p-2 gap-2.5 ">
                    <button className='flex flex-col items-center bg-state w-[89px] h-5 rounded-[28px] py-0.5 px-2.5 '>
                        <span className='text-neutral-00 w-[69px] h-4 font-bold leading-[16px] tracking-[0] text-[9px] '>Pet knowledge</span>
                    </button>
                    <div className="flex flex-col w-full h-[114px] gap-1.5 ">
                        <span className="w-full h-[48px] text-neutral-100 font-bold leading-[24px] tracking-[0] text-[16px]">What is a Pomeranian? How to Identify Pomeranian Dogs</span>
                        <span className="flex w-full h-[60px] text-neutral-60  leading-[20px] tracking-[0] text-[14px]">
                            The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[424px] bg-white p-2 ">
                <img className="w-full h-[240px] rounded-[10px] " src="" alt="" />
                <div className="flex flex-col w-full h-[160px] p-2 gap-2.5 ">
                    <button className='flex flex-col items-center bg-state w-[89px] h-5 rounded-[28px] py-0.5 px-2.5 '>
                        <span className='text-neutral-00 w-[69px] h-4 font-bold leading-[16px] tracking-[0] text-[9px] '>Pet knowledge</span>
                    </button>
                    <div className="flex flex-col w-full h-[114px] gap-1.5 ">
                        <span className="w-full h-[48px] text-neutral-100 font-bold leading-[24px] tracking-[0] text-[16px]">What is a Pomeranian? How to Identify Pomeranian Dogs</span>
                        <span className="flex w-full h-[60px] text-neutral-60  leading-[20px] tracking-[0] text-[14px]">
                            The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
                        </span>
                    </div>
                </div>
            </div>
            <div className="w-full h-[424px] bg-white p-2 ">
                <img className="w-full h-[240px] rounded-[10px] " src="" alt="" />
                <div className="flex flex-col w-full h-[160px] p-2 gap-2.5 ">
                    <button className='flex flex-col items-center bg-state w-[89px] h-5 rounded-[28px] py-0.5 px-2.5 '>
                        <span className='text-neutral-00 w-[69px] h-4 font-bold leading-[16px] tracking-[0] text-[9px] '>Pet knowledge</span>
                    </button>
                    <div className="flex flex-col w-full h-[114px] gap-1.5 ">
                        <span className="w-full h-[48px] text-neutral-100 font-bold leading-[24px] tracking-[0] text-[16px]">What is a Pomeranian? How to Identify Pomeranian Dogs</span>
                        <span className="flex w-full h-[60px] text-neutral-60  leading-[20px] tracking-[0] text-[14px]">
                            The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}