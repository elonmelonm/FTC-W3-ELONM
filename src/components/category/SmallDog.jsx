import { useState } from "react";
import { animals } from "../../data";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"

export function SmallDog() {
    const [selected, setSelected] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedBreed, setSelectedBreed] = useState(null);
    const navigate = useNavigate(); 

    // Fonction pour gérer le clic sur un animal
    const handleAnimalClick = (animal) => {
        // Navigation vers la page de détail avec les données de l'animal
        navigate('/category-detail', { 
            state: { animal } // Passage des données via l'état de navigation
        });
    };

    return (
        <div className="pt-[35px] pb-[60px] px-4 md:px-16 xl:px-[130px] ">
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="hidden lg:flex flex-col w-[280px] gap-3.5">
                    <div>
                        {/* filter */}
                        <span className="w-full h-9 leading-9 text-[16px] font-bold text-primary ">Filter</span>
                        <div className="w-full flex flex-col">
                            {/* Gender */}
                            <div className="w-full flex flex-col border-b border-neutral-10 pb-4 gap-2.5 ">
                                <span className="w-full h-9 leading-6 text-[16px] font-bold text-neutral-100 ">Gender</span>
                                <div className="flex flex-col gap-2">
                                    {/* Male */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selected === "male"}
                                            onChange={() => setSelected(selected === "male" ? null : "male")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="text-neutral-100 font-medium text-sm leading-5">
                                            Male
                                        </span>
                                    </label>

                                    {/* Female */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selected === "female"}
                                            onChange={() => setSelected(selected === "female" ? null : "female")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Female
                                        </span>
                                    </label>
                                </div>
                            </div>
                            {/* Color */}
                            <div className="w-full flex flex-col border-b border-neutral-10 py-4 pb-4 gap-2.5 ">
                                <span className="w-full h-9 leading-6 text-[16px] font-bold text-neutral-100 ">Color</span>
                                <div className="flex flex-col gap-2">
                                    {/* Red */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedColor === "red"}
                                            onChange={() => setSelectedColor(selectedColor === "red" ? null : "red")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="w-4 h-4 bg-pink-red rounded-full"></span>
                                        <span className="text-neutral-100 font-medium text-sm leading-5">
                                            Red
                                        </span>
                                    </label>

                                    {/* Apricot */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedColor === "apricot"}
                                            onChange={() => setSelectedColor(selectedColor === "apricot" ? null : "apricot")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="w-4 h-4 bg-[#FFB672] rounded-full"></span>
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Apricot
                                        </span>
                                    </label>
                                    {/* black */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedColor === "black"}
                                            onChange={() => setSelectedColor(selectedColor === "black" ? null : "black")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="w-4 h-4 bg-neutral-80 rounded-full"></span>
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Black
                                        </span>
                                    </label>
                                    {/* Black && White */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedColor === "blackWhite"}
                                            onChange={() => setSelectedColor(selectedColor === "blackWhite" ? null : "blackWhite")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="w-4 h-4 bg-split rounded-full"></span>
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Black & White
                                        </span>
                                    </label>
                                    {/* Silver */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedColor === "silver"}
                                            onChange={() => setSelectedColor(selectedColor === "silver" ? null : "silver")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="w-4 h-4 bg-[#CECECE] rounded-full"></span>
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Silver
                                        </span>
                                    </label>
                                    {/* tan */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedColor === "tan"}
                                            onChange={() => setSelectedColor(selected === "tan" ? null : "tan")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="w-4 h-4 bg-[#FFF7CE] rounded-full"></span>
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Tan
                                        </span>
                                    </label>
                                </div>
                            </div>
                            {/* Price */}
                            <div className="w-full flex flex-col border-b border-neutral-10 py-4 pb-4 gap-2.5 ">
                                <span className="w-full h-9 leading-6 text-[16px] font-bold text-neutral-100 ">Price</span>
                                <div className="flex flex-col gap-2">
                                    <div class="flex flex-row justify-between items-start gap-[10px] w-full h-[40px]">
                                        {/* <!-- Frame 76 : Min --> */}
                                        <div class="flex flex-col items-start py-2.5 gap-[10px] w-full h-[40px] mx-auto border-b border-[#EBEEEF]">
                                            <div class="flex flex-row justify-between items-center gap-[10px] w-[115px] h-[20px]">
                                                <input className="w-full h-[20px] font-[var(--font-gilroy)] font-medium text-[14px] leading-[20px] text-[#242B33] flex items-end" placeholder="Min" type="number" />
                                            </div>
                                        </div>

                                        {/* <!-- Frame 76 : Max --> */}
                                        <div class="flex flex-col items-start p-[10px] gap-[10px] w-[135px] h-[40px] mx-auto border-b border-[#EBEEEF]">
                                            <div class="flex flex-row justify-between items-center gap-[10px] w-[115px] h-[20px]">
                                                <input className="w-full h-[20px] font-[var(--font-gilroy)] font-medium text-[14px] leading-[20px] text-[#242B33] flex items-end" placeholder="Max" type="number" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Breed */}
                            <div className="w-full flex flex-col border-b border-neutral-10 py-4 pb-4 gap-2.5 ">
                                <span className="w-full h-9 leading-6 text-[16px] font-bold text-neutral-100 ">Breed</span>
                                <div className="flex flex-col gap-2">
                                    {/* Small */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedBreed === "small"}
                                            onChange={() => setSelectedBreed(selectedBreed === "small" ? null : "small")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="text-neutral-100 font-medium text-sm leading-5">
                                            Small
                                        </span>
                                    </label>

                                    {/* Medium */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedBreed === "medium"}
                                            onChange={() => setSelectedBreed(selectedBreed === "medium" ? null : "medium")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Medium
                                        </span>
                                    </label>
                                    {/* Large */}
                                    <label className="flex flex-row items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedBreed === "large"}
                                            onChange={() => setSelectedBreed(selectedBreed === "large" ? null : "large")}
                                            className="w-4 h-4 border border-neutral-10 rounded"
                                        />
                                        <span className="text-primary-100 font-medium text-sm leading-5">
                                            Large
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex lg:hidden flex-row justify-between">
                    <span className="flex lg:hidden w-[166px] h-[34px] border rounded-[20px] items-center pr-2.5 pl-5 text-neutral-20 gap-2 ">
                        <span className="text-neutral-60 font-medium leading-5 text-[14px] h-5 ">Sort by: Popular</span>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 10L12 14L8 10" stroke="#667479" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                    </span>
                    <span className="flex flex-row items-center gap-2">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6.33723V5.59998C20 5.03992 19.9996 4.75993 19.8906 4.54602C19.7948 4.35786 19.6425 4.20487 19.4544 4.10899C19.2405 4 18.9597 4 18.3996 4H5.59961C5.03956 4 4.75981 4 4.5459 4.10899C4.35774 4.20487 4.20487 4.35786 4.10899 4.54602C4 4.75993 4 5.03992 4 5.59998V6.33723C4 6.58182 4 6.70417 4.02763 6.81925C4.05213 6.92129 4.09263 7.0188 4.14746 7.10828C4.20928 7.20916 4.29574 7.29562 4.46859 7.46846L4.46875 7.46863L9.53149 12.5314C9.70444 12.7043 9.79068 12.7908 9.85252 12.8917C9.90735 12.9812 9.94816 13.0787 9.97266 13.1808C10 13.2947 10 13.4156 10 13.6553V13.6627V18.4111C10 19.2683 10 19.697 10.1805 19.9551C10.3382 20.1805 10.5814 20.3311 10.8535 20.3713C11.1651 20.4173 11.5487 20.2256 12.3154 19.8423L13.1154 19.4423C13.4365 19.2817 13.5968 19.2014 13.7141 19.0817C13.8178 18.9758 13.897 18.8481 13.9453 18.708C14 18.5495 14 18.3701 14 18.0111V13.6627C14 13.4181 14 13.2959 14.0276 13.1808C14.0521 13.0787 14.0926 12.9812 14.1475 12.8917C14.2093 12.7908 14.2957 12.7044 14.4685 12.5316L14.4688 12.5314L19.5315 7.46863C19.7044 7.29568 19.7907 7.20919 19.8525 7.10828C19.9073 7.0188 19.9482 6.92129 19.9727 6.81925C20 6.70534 20 6.58431 20 6.34468V6.33723Z" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span className="text-primary-80 font-bold leading-6 text-[16px] h-5 ">Filter</span>
                    </span>
                </div>

                <div className="flex-1 flex-col gap-3.5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-center gap-3.5">
                            <span className="h-9 font-bold leading-9 text-[24px] text-primary ">Small Dog</span>
                            <span className="h-4 font-medium leading-5 text-[14px] text-neutral-60 ">52 puppies</span>
                        </div>
                        <span className="hidden lg:flex w-[166px] h-[34px] border rounded-[20px] items-center pr-2.5 pl-5 text-neutral-20 gap-2 ">
                            <span className="text-neutral-60 font-medium leading-5 text-[14px] h-5 ">Sort by: Popular</span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 10L12 14L8 10" stroke="#667479" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-[18px]">
                            {animals.map((animal, index) => (
                                <motion.div key={index} whileHover={{ scale: 1.1 }} className="w-full h-[317px] xl:w-full xl:min-h-[378px] bg-neutral-00 p-2 cursor-pointer"
                                    onClick={() => handleAnimalClick(animal)}
                                >
                                    <img className="min-w-[169px] h-[169px] xl:w-full xl:min-h-[264px] rounded-[10px] " src={animal.image} alt="" />
                                    <div className="min-w-[169px] h-[124px] xl:w-[264px] xl:h-[98px] p-1 xl:pt-2 xl:px-2 xl:pb-5 gap-4 ">
                                        <div className="flex flex-col min-w-[161px] h-[84px] xl:w-[248px] xl:h-[70px] gap-1 ">
                                            <span className="w-full h-[40px] xl:h-[24px] text-neutral-100 font-bold leading-[20px] xl:leading-[24px] tracking-[0] text-[14px] xl:text-[16px]">{animal.sku} - {animal.name}</span>
                                            <span className="flex flex-col xl:flex-row xl:items-center w-full h-[40px] xl:h-[24px] text-neutral-60  leading-[24px] tracking-[0] text-[16px] gap-1 xl:gap-0 ">
                                                <span className="flex items-center h-[18px] gap-1.5">
                                                    <span className="font-medium text-[12px] xl:font-normal xl:text-[16px]">Gene: </span>
                                                    <span className="font-bold text-[12px] xl:text-[16px] ">{animal.gender}</span>
                                                </span>
                                                <span className="font-bold h-[18px] items-center hidden xl:flex p-2">
                                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.95813 2.748C3.22213 2.484 3.35413 2.16 3.35413 1.788C3.35413 1.416 3.22213 1.092 2.95813 0.84C2.70613 0.576 2.38213 0.444 2.01013 0.444C1.63813 0.444 1.31413 0.576 1.05013 0.84C0.786125 1.092 0.654125 1.416 0.654125 1.788C0.654125 2.16 0.786125 2.484 1.05013 2.748C1.31413 3.012 1.63813 3.144 2.01013 3.144C2.38213 3.144 2.70613 3.012 2.95813 2.748Z" fill="#667479" />
                                                    </svg>
                                                </span>
                                                <span className="flex items-center h-[18px] gap-1.5 ">
                                                    <span className="font-medium text-[12px] xl:font-normal xl:text-[16px]">Age: </span>
                                                    <span className="font-bold text-[12px] xl:text-[16px] ">{animal.age}</span>
                                                </span>
                                            </span>
                                            <span className="w-full h-[24px] text-neutral-100 font-bold leading-[24px] xl:leading-[20px] tracking-[0] text-[16px] xl:text-[14px]">{animal.price}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* pargination */}
                        <div className="flex justify-center w-full h-full">
                            <div className="flex flex-row justify-center items-center w-[356px] h-[34px] gap-3 ">
                                <button className="flex justify-center items-center w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 12L7 12M7 12L11 16M7 12L11 8" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                                <button className="flex justify-center items-center bg-primary font-bold text-neutral-00 w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    1
                                </button>
                                <button className="flex justify-center items-center text-primary font-bold w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    2
                                </button>
                                <button className="flex justify-center items-center text-primary font-bold w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    3
                                </button>
                                <button className="flex justify-center items-center text-primary font-bold w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    4
                                </button>
                                <button className="flex justify-center items-center text-primary font-bold w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    ...
                                </button>
                                <button className="flex justify-center items-center text-primary font-bold w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    28
                                </button>
                                <button className="flex justify-center items-center w-[34px] h-[34px] px-0.5 rounded-[8px] gap-2.5 ">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 12L17 12M17 12L13 16M17 12L13 8" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}