

export function OurProducts() {
  return (
    <div className="lg:flex flex-col hidden min-h-[200px] md:px-16 xl:px-[130px] py-[60px] gap-7 ">
        <div className="relative flex flex-row">
            <div className="flex flex-col w-[367px] h-[60px] gap-0.5 ">
                <span className="w-[326px] h-[24px] text-[#000000] font-medium leading-[24px] tracking-[0] text-[16px]">Hard to choose right products for your pets?</span>
                <span className="w-[367px] h-[36px] font-bold text-primary leading-[36px] tracking-[0] text-[24px]">Our Products</span>
            </div>
            <button className='flex items-center absolute right-0 bottom-0 w-[151px] h-12 border rounded-[57px] px-7 gap-2 '>
                <span className='text-primary w-[67px] h-6 font-medium leading-[20px] tracking-[0] text-[13px] align-bottom '>View more</span>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333" stroke="#003459" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </button>
        </div>
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
            <div className="w-[280px] h-[446px] bg-neutral-00 p-2 ">
                <img className="w-[264px] h-[264px] rounded-[10px] " src="" alt="" />
                <div className="flex flex-col w-[264px] h-[166px] pt-2 px-2 pb-5 gap-2.5 ">
                    <div className="flex flex-col w-[248px] h-[94px] gap-1 ">
                        <span className="w-full h-[48px] text-neutral-100 font-bold leading-[24px] tracking-[0] text-[16px]">Reflex Plus Adult Cat Food Salmon</span>
                        <span className="flex items-center w-full h-[18px] text-neutral-60  leading-[24px] tracking-[0] text-[12px] gap-1">
                            <span className="flex items-center h-[18px] gap-1.5">
                                <span className="text-[12px]">Product: </span>
                                <span className="text-[12px] font-bold">Dog Food</span>
                            </span>
                            <span className="font-bold h-[18px] items-center flex p-2">
                                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.95813 2.748C3.22213 2.484 3.35413 2.16 3.35413 1.788C3.35413 1.416 3.22213 1.092 2.95813 0.84C2.70613 0.576 2.38213 0.444 2.01013 0.444C1.63813 0.444 1.31413 0.576 1.05013 0.84C0.786125 1.092 0.654125 1.416 0.654125 1.788C0.654125 2.16 0.786125 2.484 1.05013 2.748C1.31413 3.012 1.63813 3.144 2.01013 3.144C2.38213 3.144 2.70613 3.012 2.95813 2.748Z" fill="#667479"/>
                                </svg>
                            </span>
                            <span className="flex items-center h-[18px] gap-1.5 ">
                                <span>Size: </span>
                                <span className="font-bold">385gm</span>
                            </span>
                        </span>
                        <span className="w-full h-[24px] text-neutral-100 font-bold leading-[20px] tracking-[0] text-[14px]">6.900.000 VND</span>
                    </div>
                    <span className="flex items-center bg-secondary-40 w-full h-[34px] rounded-[8px] px-2 pt-1.5 pb-1 text-primary-80  leading-[24px] tracking-[0] text-[12px] gap-0.5">
                        <span className="flex items-center h-[18px] gap-1.5">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.7682 10.1406L5.66663 9.44918C5.72523 9.42578 5.79554 9.41406 5.86581 9.41406H18.0299C18.358 9.41406 18.6158 9.67184 18.6158 10V18.2422C18.6158 19.2148 17.8307 20 16.858 20H5.13925C4.16656 20 3.38144 19.2148 3.38144 18.2422V10.6914C3.38144 10.4453 3.53382 10.2227 3.7682 10.1406Z" fill="#FC1A40"/>
                                <path d="M3.38144 10.6914V18.2422C3.38144 19.2148 4.16656 20 5.13925 20H10.9986V9.41406H5.86581C5.7955 9.41406 5.72519 9.42578 5.66663 9.44918L3.7682 10.1406C3.53382 10.2227 3.38144 10.4453 3.38144 10.6914Z" fill="#C60034"/>
                                <path d="M3.59238 3.81984C3.79156 3.01124 4.38925 2.37847 5.19785 2.12062C5.99472 1.87449 6.85023 2.05031 7.47129 2.61277L8.8307 3.80812L9.10019 2.01519C9.2291 1.19488 9.75644 0.50343 10.5416 0.175344C10.6939 0.116712 10.8462 0.0698366 10.9986 0.0463991C11.6431 -0.0825072 12.3111 0.0581178 12.8502 0.456594C13.565 0.972219 13.9283 1.83941 13.8111 2.70656C13.6822 3.57374 13.0962 4.31202 12.2643 4.60499L10.9986 5.06202L9.44 5.63624C9.42828 5.63624 9.42828 5.63624 9.42828 5.63624L6.72125 6.6323C6.45175 6.72609 6.1705 6.773 5.90097 6.773C5.32668 6.773 4.76421 6.56199 4.3189 6.16359C3.66269 5.57765 3.38144 4.67527 3.59238 3.81984Z" fill="#FE9923"/>
                                <path d="M4.31894 6.16361C4.76425 6.56201 5.32675 6.77303 5.90101 6.77303C6.1705 6.77303 6.45175 6.72611 6.72128 6.63232L9.42831 5.63627C9.42831 5.63627 9.42831 5.63627 9.44003 5.63627L10.9986 5.06205V0.0463867C10.8463 0.0698633 10.6939 0.116699 10.5416 0.175332C9.75648 0.503418 9.2291 1.19486 9.10023 2.01518L8.83074 3.80811L7.47132 2.61275C6.85027 2.05029 5.99476 1.87447 5.19788 2.12061C4.38929 2.37846 3.79163 3.01123 3.59242 3.81982C3.38144 4.67529 3.66269 5.57768 4.31894 6.16361Z" fill="#FE8821"/>
                                <path d="M1.37755 9.1445L2.17443 11.3476C2.26821 11.582 2.49087 11.7226 2.72524 11.7226C2.79556 11.7226 2.86587 11.7109 2.92442 11.6875L8.98306 9.48439L9.5338 7.66798L10.9986 7.99607L12.2877 8.28904L18.3463 6.08591C18.651 5.96876 18.8033 5.62888 18.6979 5.33591L17.8893 3.13286C17.7369 2.68755 17.4088 2.33591 16.9869 2.13673C16.565 1.93755 16.0846 1.91408 15.6393 2.07814L10.9986 3.76564L10.6822 3.88279C10.6822 3.88279 9.41657 6.1797 9.38138 6.1797C9.3579 6.1797 8.85403 5.89845 8.36185 5.62888C7.86978 5.35935 7.37755 5.07814 7.37755 5.07814L2.43228 6.88279C1.98696 7.04685 1.6354 7.37501 1.43622 7.79689C1.23693 8.21872 1.21353 8.69923 1.37755 9.1445Z" fill="#FF3E75"/>
                                <path d="M1.37753 9.14449L2.17441 11.3476C2.2682 11.582 2.49085 11.7226 2.72523 11.7226C2.79554 11.7226 2.86585 11.7109 2.92441 11.6875L8.98304 9.48438L9.53378 7.66797L10.9986 7.99605V3.76562L10.6822 3.88277C10.6822 3.88277 9.4166 6.17969 9.3814 6.17969C9.35792 6.17969 8.85406 5.89844 8.36187 5.62887C7.86976 5.35934 7.37753 5.07812 7.37753 5.07812L2.43226 6.88277C1.98695 7.04684 1.63538 7.375 1.4362 7.79688C1.23691 8.21871 1.21351 8.69922 1.37753 9.14449Z" fill="#FC1A40"/>
                                <path d="M12.7564 9.41406V20H9.24081V9.41406H12.7564Z" fill="#FCBF29"/>
                                <path d="M10.6822 3.88281L10.9987 4.75L12.2877 8.2891L10.9987 8.75789L9.53382 9.28523L8.98308 9.48441L7.37753 5.07816L10.6822 3.88281Z" fill="#FCBF29"/>
                                <path d="M9.24066 9.41406H10.9985V20H9.24066V9.41406Z" fill="#FE9923"/>
                                <path d="M7.37753 5.07816L8.98304 9.48441L9.53378 9.2852L10.9986 8.75785V4.75L10.6822 3.88281L7.37753 5.07816Z" fill="#FE9923"/>
                            </svg>
                        </span>
                        <span className="font-bold h-[18px] items-center flex p-2">
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="8" y="10" width="4" height="4" rx="2" fill="#003459"/>
                            </svg>
                        </span>
                        <span className="flex items-center h-[20px] text-[14px] font-bold ">
                            <span>Free Toy & Free Shaker</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}