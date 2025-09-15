import Image from '../assets/Frame.png'
import { animals } from '../data'
// import { animals } from './data'; // Importez les données

export function WhatsNew() {
  return (
    <div className="relative flex flex-col w-full min-h-[400px] xl:min-h-[200px] px-4 md:px-16 xl:px-[130px] py-10 xl:py-[60px] gap-7 ">
        <div className="relative flex flex-col xl:flex-row">
            <div className="flex flex-col w-full h-[60px] gap-0.5 ">
                <span className="w-[91px] h-[24px] text-[#000000] font-medium leading-[24px] tracking-[0] text-[14px] xl:text-[16px]">Whats new?</span>
                <span className="w-full h-[36px] font-bold text-primary leading-[36px] tracking-[0] text-[20px] xl:text-[24px]">Take a look at some of our pets</span>
            </div>
            <button className='lg:flex items-center text-primary hidden absolute right-0 bottom-0 w-[151px] h-12 border rounded-[57px] px-7 gap-2 cursor-pointer'>
                <span className=' w-[67px] h-6 font-medium leading-[20px] tracking-[0] text-[13px] align-bottom '>View more</span>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333" stroke="#003459" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-5 ">
            {animals.map((animal, index) => (
                <div key={index} className="w-full h-[317px] xl:h-[378px] bg-neutral-00 p-2 cursor-pointer">
                    <img 
                        className="min-w-[169px] h-[169px] xl:w-full xl:h-[264px] rounded-[10px] object-cover" 
                        src={animal.image} 
                        alt={animal.name} 
                    />
                    <div className="min-w-[169px] h-[124px] xl:w-full xl:h-[98px] p-1 xl:pt-2 xl:px-2 xl:pb-5 gap-4 ">
                        <div className="flex flex-col min-w-[161px] h-[84px] xl:w-[248px] xl:h-[70px] gap-1 ">
                            <span className="w-full h-[40px] xl:h-[24px] text-neutral-100 font-bold leading-[20px] xl:leading-[24px] tracking-[0] text-[14px] xl:text-[16px]">
                                {animal.sku} - {animal.name}
                            </span>
                            <span className="flex flex-col xl:flex-row xl:items-center w-full h-[40px] xl:h-[24px] text-neutral-60 leading-[24px] tracking-[0] text-[16px] gap-1 xl:gap-0 ">
                                <span className="flex items-center h-[18px] gap-1.5">
                                    <span className="font-medium text-[12px] xl:font-normal xl:text-[16px]">Gene: </span>
                                    <span className="font-bold text-[12px] xl:text-[16px] ">{animal.gender}</span>
                                </span>
                                <span className="font-bold h-[18px] items-center hidden xl:flex p-2">
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.95813 2.748C3.22213 2.484 3.35413 2.16 3.35413 1.788C3.35413 1.416 3.22213 1.092 2.95813 0.84C2.70613 0.576 2.38213 0.444 2.01013 0.444C1.63813 0.444 1.31413 0.576 1.05013 0.84C0.786125 1.092 0.654125 1.416 0.654125 1.788C0.654125 2.16 0.786125 2.484 1.05013 2.748C1.31413 3.012 1.63813 3.144 2.01013 3.144C2.38213 3.144 2.70613 3.012 2.95813 2.748Z" fill="#667479"/>
                                    </svg>
                                </span>
                                <span className="flex items-center h-[18px] gap-1.5 ">
                                    <span className="font-medium text-[12px] xl:font-normal xl:text-[16px]">Age: </span>
                                    <span className="font-bold text-[12px] xl:text-[16px] ">{animal.age}</span>
                                </span>
                            </span>
                            <span className="w-full h-[24px] text-neutral-100 font-bold leading-[24px] xl:leading-[20px] tracking-[0] text-[16px] xl:text-[14px]">
                                {animal.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button className='flex justify-center items-center lg:hidden w-full h-12 border rounded-[57px] px-7 gap-2 '>
            <span className='text-primary w-[77px] h-6 font-medium leading-[24px] tracking-[0] text-[15px] align-bottom '>View more</span>
            <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333" stroke="#003459" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
        </button>
    </div>
  )
}