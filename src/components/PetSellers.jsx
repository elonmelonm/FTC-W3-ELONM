import Icon1 from "../assets/petsellersicons/02b6b26658915815ebfb624ccd4b8f8bc9d06ecf.png";
import Icon2 from "../assets/petsellersicons/69262552e00bed606afe9e77f1cc9c7f2e95597b.png";
import Icon3 from "../assets/petsellersicons/4400db70058110bfc32e5bc6e602a644bb081932.png";
import Icon4 from "../assets/petsellersicons/e25c6f9e2a2af258ba0090ef77ead6e78aec992d.png";
import Icon5 from "../assets/petsellersicons/abf81bf3b261ca3e4e94dccf723b6ed12db2575b.png";
import Icon6 from "../assets/petsellersicons/a10a1b4370e851524fa4db43a4f7d590708a8d8b.png";
import Icon7 from "../assets/petsellersicons/d46b554b89025a0019d8f8d0409d4bc87affc11e.png";

export function PetSellers() {
    return (
        <div className="lg:flex flex-col hidden h-[251px] md:px-16 xl:px-[130px] py-[40px] gap-[15px] ">
            <div className="relative flex flex-row justify-between h-[44px] ">
                <div className="flex flex-row items-center w-[266px] h-[36px] gap-2 ">
                    <span className="w-[141px] h-[31px] text-[#000000] font-medium leading-[31px] tracking-[0] text-[16px]">Proud to be part of</span>
                    <span className=" h-[36px] font-bold text-primary leading-[36px] tracking-[0] text-[24px]">Pet Sellers</span>
                </div>
                <button className='flex text-primary items-center w-[201px] h-11 border-[1.5px] rounded-[57px] px-7 gap-2 cursor-pointer'>
                    <span className='w-[117px] h-5 font-medium leading-[20px] tracking-[0] text-[13px] align-bottom '>View all our sellers</span>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
            <div className="grid grid-cols-7 gap-5">
                <div className="flex items-center w-[151.43px] h-[112px] px-4 gap-2.5 ">
                    <img src={Icon1} alt="" />
                </div>
                <div className="flex items-center w-[151.43px] h-[112px] px-4 gap-2.5 ">
                    <img src={Icon2} alt="" />
                </div>
                <div className="flex items-center w-[151.43px] h-[112px] px-4 gap-2.5 ">
                    <img src={Icon3} alt="" />
                </div>
                <div className="flex items-center w-[151.43px] h-[112px] px-4 gap-2.5 ">
                    <img src={Icon4} alt="" />
                </div>
                <div className="flex items-center w-[151.43px] h-[112px] px-4 gap-2.5 ">
                    <img src={Icon5} alt="" />
                </div>
                <div className="flex items-center w-[151.43px] h-[112px] px-4 gap-2.5 ">
                    <img src={Icon6} alt="" />
                </div>
                <div className="flex items-center w-[151.43px] h-[112px] px-4 gap-2.5 ">
                    <img src={Icon7} alt="" />
                </div>
            </div>
        </div>
    )
}