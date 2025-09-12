import { useLocation, useNavigate } from "react-router-dom";
import Image from "../assets/ed983856e3a6954a2b20e00d7381454e58aa5f21.png";
import { animals, lovelycustomers } from "../data";
import { useEffect, useState } from "react";

export function CategoryDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [animal, setAnimal] = useState(location.state?.animal || null);



    useEffect(() => {
    if (location.state?.animal) {
      setAnimal(location.state.animal);
      setSelectedImage(null); // Réinitialiser l'image sélectionnée
    }
  }, [location.state]);

  const mainImage = selectedImage !== null ? animal.gallery[selectedImage] : animal.image;

  const handleAnimalClick = (newAnimal) => {
    navigate('/category-detail', { 
      state: { animal: newAnimal }
    });
  };

    if (!animal) {
        return <div>Animal non trouvé</div>;
    }

  return (
    <div className="xl:mt-[100px] ">
      <div className="flex xl:hidden flex-col mb-2.5 gap-3">
        <img className="xl:max-w-[560px] h-[476px] " src={mainImage} alt="" />
        <div className='flex xl:hidden z-10 items-center justify-between h-[57px] bg-transparent absolute top-[230px] w-full pr-3.5 pl-2.5 pt-0.5 md:px-16'>
            <button className="rounded-full bg-[#FFFFFF66] opacity-[40%]" 
              onClick={() => {
                if (animal.gallery && animal.gallery.length > 0) {
                  const currentIndex = selectedImage !== null ? selectedImage : -1;
                  const newIndex = currentIndex > 0 ? currentIndex - 1 : animal.gallery.length - 1;
                  setSelectedImage(newIndex);
                }
              }}
            >
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 15L10 12L13 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button className="rounded-full bg-[#FFFFFF66] opacity-[40%]"
              onClick={() => {
                if (animal.gallery && animal.gallery.length > 0) {
                  const currentIndex = selectedImage !== null ? selectedImage : -1;
                  const newIndex = currentIndex < animal.gallery.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(newIndex);
                }
              }}
            >
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9L14 12L11 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        <div className="flex flex-row pl-4 overflow-x-hidden gap-3">
          {animal.gallery && animal.gallery.map((image, index) => (
           <div 
              key={index} 
              className={`cursor-pointer rounded-[6px] overflow-hidden ${
                index === selectedImage 
                  ? "border-[3px] border-secondary" 
                  : "border-[3px] border-transparent"
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={image} 
                alt="" 
                className="max-w-[94px] h-[94px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-4 md:px-16 xl:px-[130px] gap-5 ">
        <div className="xl:py-[22px] xl:pl-5 xl:pr-[49px] flex flex-col xl:flex-row gap-[34px] xl:border border-neutral-10 rounded-[20px]  ">
          <div className="flex flex-col gap-[17px] ">
            <div className="hidden xl:flex overflow-x-hidden flex-col mb-2.5 gap-3">
              <img className="xl:max-w-[560px] h-[476px] rounded-[10px] " src={mainImage} alt="" />
              <div className="flex flex-row gap-3">
                {animal.gallery && animal.gallery.map((image, index) => (
                <div 
                    key={index} 
                    className={`cursor-pointer rounded-[6px] overflow-hidden ${
                      index === selectedImage 
                        ? "border-[3px] border-secondary" 
                        : "border-[3px] border-transparent"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt="" 
                      className="max-w-[94px] h-[94px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden xl:flex flex-row w-full h-12 bg-brand-gradient py-[9px] rounded-[10px] px-3 justify-between gap-[9px] ">
              <div className="flex flex-row items-center h-[30px] gap-[9px]  ">
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" fill="#FCEED5" />
                    <g clip-path="url(#clip0_108_1538)">
                      <path d="M27 11.9462C27.0004 12.3527 26.9783 12.7588 26.9338 13.1628C26.4 18.2111 22.531 23.52 15 25.9655C7.48139 23.5324 3.60001 18.24 3.06622 13.1628C3.02158 12.7588 2.99948 12.3527 3.00001 11.9462C3.00001 7.93243 5.44966 4.44829 9.00001 4.44829C10.1563 4.44605 11.299 4.69747 12.3476 5.18484L18.2979 4.92002C19.1641 4.60597 20.0787 4.44631 21 4.44829C24.5504 4.44829 27 7.93243 27 11.9462Z" fill="#DF4D60" />
                      <path d="M27 11.9462C27.0004 12.3527 26.9783 12.7588 26.9338 13.1628C25.4524 16.9697 20.669 19.7586 15 19.7586C9.33104 19.7586 4.5476 16.9697 3.06622 13.1628C3.02158 12.7588 2.99948 12.3527 3.00001 11.9462C3.00001 7.93243 5.44966 4.44829 9.00001 4.44829C10.1563 4.44605 11.299 4.69747 12.3476 5.18484L18.2979 4.92002C19.1641 4.60597 20.0787 4.44631 21 4.44829C24.5504 4.44829 27 7.93243 27 11.9462Z" fill="#FF5364" />
                      <path d="M24.2069 19.7835C22.4725 21.9915 20.2312 23.7487 17.6731 24.9062C17.4248 25.0262 17.1724 25.1421 16.9158 25.2455C16.3075 25.5103 15.6662 25.7503 15 25.9655C14.7186 25.8745 14.4413 25.7793 14.1724 25.68V21.4138C13.1374 20.2807 12.5492 18.8102 12.5172 17.2759C12.5398 15.8139 12.9146 14.3788 13.6096 13.0924C13.6565 12.9908 13.659 12.8743 13.6166 12.7707C13.5743 12.6672 13.4908 12.5858 13.3862 12.5462C12.1823 12.1299 10.9192 11.9105 9.64548 11.8966C7.66341 11.2345 7.52686 9.25242 7.55582 8.48276C7.56163 8.29954 7.68833 8.14242 7.86617 8.09793L10.2662 7.50207C10.666 7.40062 11.014 7.15437 11.2427 6.81104L12.2151 5.35448C12.2557 5.2952 12.2999 5.23853 12.3475 5.18483C12.553 4.94619 12.8232 4.77227 13.1255 4.68414C14.2787 4.32089 15.4728 4.10266 16.68 4.03448C17.3254 4.06984 17.9202 4.39538 18.2979 4.92C19.1596 6.1032 19.6088 7.53665 19.5765 9C19.5765 10.0593 19.1213 10.6676 18.4965 10.9531V10.9614L18.6165 11.7931L18.7075 12.4303C18.73 12.5943 18.8494 12.7284 19.0096 12.7697C19.705 13.0065 20.3277 13.4184 20.8179 13.9655C21.5834 14.7269 23.1269 17.2138 24.2069 19.7835Z" fill="#35495E" />
                      <path d="M18.6166 11.7931C18.2892 11.9191 17.9411 11.9823 17.5903 11.9793C17.1383 11.9763 16.6907 11.8893 16.2703 11.7227C15.7996 11.5322 15.4906 11.0761 15.4883 10.5683V7.75861C15.4883 7.53008 15.6735 7.34482 15.9021 7.34482C16.1306 7.34482 16.3159 7.53008 16.3159 7.75861V10.5683C16.3157 10.7378 16.419 10.8904 16.5766 10.9531C17.1554 11.2023 17.8087 11.2157 18.3972 10.9903C18.4289 10.9764 18.4623 10.9666 18.4966 10.9614L18.6166 11.7931Z" fill="#2C3E50" />
                      <path d="M21.6001 20.7186C21.5254 20.9343 21.2915 21.0504 21.0745 20.9793C20.2965 20.6753 19.4181 20.7793 18.7325 21.2565C17.9249 21.8918 17.4623 22.8693 17.4828 23.8965C17.4764 24.2426 17.5412 24.5863 17.6732 24.9062C17.4249 25.0262 17.1725 25.1421 16.9159 25.2455C16.7387 24.8181 16.65 24.3592 16.6552 23.8965C16.6361 22.604 17.2263 21.3777 18.2483 20.5862C19.1511 19.9542 20.3072 19.8072 21.3394 20.1931C21.5551 20.2678 21.6711 20.5017 21.6001 20.7186Z" fill="#2C3E50" />
                      <path d="M9.20684 7.76691V9.00001C9.20684 9.22854 9.02158 9.4138 8.79305 9.4138H7.61374C7.56348 9.10616 7.54408 8.79427 7.55581 8.48277C7.56161 8.29954 7.68831 8.14243 7.86615 8.09794L9.20684 7.76691Z" fill="#3F5C6C" />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_1538">
                        <rect width="24" height="24" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="h-5 text-primary-80 leading-5 font-bold text-[14px] ">100% health guarantee for pets</span>
              </div>
              <div className="flex flex-row items-center h-[30px] gap-[9px]  ">
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_108_1551)">
                      <path d="M14.2387 9.23168L16.6665 8.87498C17.6106 8.73629 18.3322 7.96141 18.4034 7.00988L18.6653 3.51121C18.6934 3.13585 18.2945 2.87856 17.9641 3.05891L15.746 4.26985C14.9879 4.68371 14.4553 5.41556 14.2947 6.26416L13.8163 8.79135C13.7684 9.04437 13.984 9.26912 14.2387 9.23168Z" fill="#FFE07D" />
                      <path d="M17.9642 3.05891L16.9089 3.63498L16.6597 6.96532C16.5884 7.91686 15.8668 8.69168 14.9228 8.83043L13.8333 8.99053C13.8919 9.14878 14.0549 9.25868 14.2388 9.23163L16.6666 8.87488C17.6107 8.73619 18.3323 7.96131 18.4035 7.00977L18.6654 3.51111C18.6934 3.13585 18.2946 2.87856 17.9642 3.05891Z" fill="#FFD064" />
                      <path d="M9.86684 18.9549L11.4653 18.6186C11.8148 18.6588 12.043 19.0055 11.9416 19.3424L11.5128 20.7674L15.5037 26.3514H18.1574L28.1904 24.3855L22.5049 12.9789C21.6578 11.2794 20.6577 9.66062 19.5169 8.14261C17.778 5.53421 14.2567 4.82403 11.6427 6.55451L9.94921 7.67559C9.24636 8.14087 8.78673 8.89455 8.69476 9.73244L8.54252 11.1199C8.48815 11.6157 8.14801 12.0336 7.67356 12.1875L4.6117 13.1807L3.98511 15.6554L4.1672 16.0342C4.71991 17.1842 5.82406 17.9702 7.09169 18.1159L8.15371 18.238C8.1998 18.2433 8.24225 18.2675 8.26814 18.3059C8.61761 18.8257 9.24937 19.0848 9.86684 18.9549Z" fill="#FFD064" />
                      <path d="M22.5048 12.9789C21.6578 11.2794 20.6576 9.66062 19.5169 8.14261C18.0291 5.91094 15.2367 5.06904 12.824 5.95614C13.9206 6.35676 14.9042 7.09699 15.6013 8.14261C16.7421 9.66062 17.7422 11.2794 18.5893 12.9789L25.0087 25.8577L28.1904 24.3855L22.5048 12.9789Z" fill="#FFC250" />
                      <path d="M22.6742 16.383L22.7186 15.7946C22.7858 14.9051 22.4194 14.0378 21.7347 13.466L19.716 11.7802C19.4747 11.5787 19.1131 11.7869 19.1661 12.0967L19.6361 14.8414C19.6756 15.0721 19.8116 15.2749 20.0099 15.3991L22.0691 16.6888C22.3215 16.847 22.6517 16.6802 22.6742 16.383Z" fill="#4A80AA" />
                      <path d="M21.7347 13.4661L19.716 11.7803C19.4747 11.5788 19.1131 11.7869 19.1661 12.0968L19.312 12.9486L20.0991 13.6059C20.7838 14.1777 21.1503 15.0449 21.083 15.9345L21.0732 16.0652L22.069 16.6889C22.3215 16.847 22.6517 16.6802 22.6742 16.3831L22.7186 15.7946C22.7858 14.9051 22.4194 14.0379 21.7347 13.4661Z" fill="#407093" />
                      <path d="M16.3879 20.6197C16.6837 20.9167 17.0466 21.1382 17.4459 21.2656C17.5011 21.2832 17.5453 21.3249 17.566 21.3791L17.7367 21.8268C17.8549 22.1368 18.1721 22.3358 18.4995 22.2818C18.516 22.2791 18.5325 22.2758 18.549 22.2719L19.4505 22.0621C19.8143 21.9774 20.0852 22.3935 19.8606 22.6919L18.9297 23.9284C18.4013 24.6303 18.1335 25.4858 18.1572 26.3513H29.1626C29.346 26.3513 29.4772 26.1728 29.4208 25.9983C29.3059 25.6426 29.2195 25.278 29.1632 24.9077L28.671 21.67C28.4794 20.4099 27.9459 19.2265 27.1287 18.2484L24.9996 15.7002C24.2931 14.8547 23.3172 14.2779 22.2358 14.0667L22.1225 14.0446C20.7087 13.7685 19.2456 14.1419 18.1371 15.0618L17.6597 15.4579C16.9695 16.0307 16.6572 16.9411 16.8506 17.8169L17.0082 18.5308L16.0896 19.5422L16.125 20.3557L16.3879 20.6197Z" fill="#407093" />
                      <path d="M10.712 13.1504C11.0976 13.1504 11.4103 12.8377 11.4103 12.4521C11.4103 12.0664 11.0976 11.7538 10.712 11.7538C10.3263 11.7538 10.0137 12.0664 10.0137 12.4521C10.0137 12.8377 10.3263 13.1504 10.712 13.1504Z" fill="#707DD3" />
                      <path d="M3.69688 15.0555L3.98513 15.6553L4.13663 15.252C4.23451 14.9916 4.48768 14.8226 4.76575 14.8322L5.48141 14.8569C5.76797 14.8668 5.92027 14.5222 5.72003 14.317L4.61166 13.1806L4.48162 13.2228C3.71913 13.4701 3.34962 14.333 3.69688 15.0555Z" fill="#407093" />
                      <path d="M5.72002 14.317L4.61165 13.1806L4.4816 13.2228C4.22711 13.3054 4.0167 13.4568 3.86182 13.6483L4.78778 14.5977C4.85681 14.6684 4.89119 14.7525 4.89879 14.8368L5.48139 14.8569C5.76795 14.8668 5.92025 14.5222 5.72002 14.317Z" fill="#365E7D" />
                      <path d="M7.7724 15.9745C8.02531 15.9745 8.23034 15.7694 8.23034 15.5165C8.23034 15.2636 8.02531 15.0586 7.7724 15.0586C7.51948 15.0586 7.31445 15.2636 7.31445 15.5165C7.31445 15.7694 7.51948 15.9745 7.7724 15.9745Z" fill="#FFC250" />
                      <path d="M9.54242 15.9745C9.79533 15.9745 10.0004 15.7694 10.0004 15.5165C10.0004 15.2636 9.79533 15.0586 9.54242 15.0586C9.2895 15.0586 9.08447 15.2636 9.08447 15.5165C9.08447 15.7694 9.2895 15.9745 9.54242 15.9745Z" fill="#FFC250" />
                      <path d="M8.79803 17.2459C9.05095 17.2459 9.25598 17.0408 9.25598 16.7879C9.25598 16.535 9.05095 16.33 8.79803 16.33C8.54512 16.33 8.34009 16.535 8.34009 16.7879C8.34009 17.0408 8.54512 17.2459 8.79803 17.2459Z" fill="#FFC250" />
                      <path d="M19.0098 19.1798C19.3683 19.1798 19.6588 18.8892 19.6588 18.5308C19.6588 18.1724 19.3683 17.8818 19.0098 17.8818C18.6514 17.8818 18.3608 18.1724 18.3608 18.5308C18.3608 18.8892 18.6514 19.1798 19.0098 19.1798Z" fill="#95D6A4" />
                      <path d="M16.6433 19.5013L16.0897 19.5423L16.033 19.6047C15.8762 19.7773 15.8607 20.0359 15.9958 20.226L16.1251 20.3558L16.7035 20.3129C16.9276 20.2963 17.0959 20.1011 17.0793 19.877C17.0627 19.6529 16.8678 19.4852 16.6433 19.5013Z" fill="#E28086" />
                      <path d="M16.2494 9.65151L17.3001 9.70282L19.0543 9.47479C19.0543 9.47479 19.8545 9.56882 20.2516 9.16651C20.4899 8.92514 20.6701 8.62229 20.7653 8.27741L21.6991 4.89555C21.7993 4.53274 21.4578 4.20315 21.0988 4.31616L18.6882 5.07506C17.8644 5.33441 17.2002 5.94945 16.8784 6.7509L15.9201 9.13782C15.8242 9.37671 15.9923 9.63896 16.2494 9.65151Z" fill="#FFE07D" />
                      <path d="M21.0987 4.31614L19.6848 4.76127C19.6853 4.80499 19.6797 4.84997 19.6671 4.89554L18.7333 8.27739C18.5373 8.9872 17.9815 9.5185 17.3 9.7028L18.7004 9.7712C19.6534 9.81776 20.5113 9.19713 20.7652 8.27739L21.699 4.89554C21.7992 4.53272 21.4577 4.20308 21.0987 4.31614Z" fill="#FFD064" />
                      <path d="M19.7797 14.9067L19.893 14.9288C20.9744 15.14 21.9503 15.7168 22.6568 16.5623L24.786 19.1105C25.6033 20.0886 26.1367 21.2721 26.3283 22.5322L26.8206 25.7699C26.8503 25.9655 26.8892 26.1594 26.9354 26.3515H29.1628C29.3462 26.3515 29.4774 26.173 29.4211 25.9984C29.3062 25.6427 29.2197 25.2781 29.1634 24.9079L28.6711 21.6702C28.4795 20.4101 27.9461 19.2266 27.1289 18.2485L24.9997 15.7003C24.2932 14.8548 23.3173 14.278 22.2359 14.0668L22.1226 14.0447C20.8304 13.7924 19.4971 14.083 18.4309 14.8372C18.8768 14.7971 19.3307 14.819 19.7797 14.9067Z" fill="#365E7D" />
                      <path d="M24.0773 16.2973C24.0773 16.2973 24.6635 15.7126 24.6922 15.3657C24.7351 14.8473 24.6314 14.32 24.3817 13.8474L23.1533 11.5219C23.0065 11.244 22.5929 11.2995 22.5245 11.6063L21.9184 14.3241C21.8674 14.5525 21.9163 14.7917 22.0527 14.9819L23.0496 16.3718L24.0773 16.2973Z" fill="#4A80AA" />
                      <path d="M24.3816 13.8475L23.1532 11.522C23.0064 11.244 22.5928 11.2995 22.5244 11.6063L22.3025 12.6013L22.9927 13.9078C23.3984 14.6758 23.4176 15.5882 23.0495 16.3719L23.4687 16.9563C23.6423 17.1984 24.0111 17.1693 24.1446 16.9028L24.4089 16.3753C24.8085 15.5776 24.7983 14.6362 24.3816 13.8475Z" fill="#407093" />
                      <path d="M24.8908 30C26.65 30 28.0761 28.5739 28.0761 26.8147C28.0761 25.0556 26.65 23.6295 24.8908 23.6295C23.1317 23.6295 21.7056 25.0556 21.7056 26.8147C21.7056 28.5739 23.1317 30 24.8908 30Z" fill="#B3E59F" />
                      <path d="M26.7585 24.2352C27.1392 24.76 27.3643 25.405 27.3643 26.1029C27.3643 27.8621 25.9382 29.2882 24.179 29.2882C23.4811 29.2882 22.8361 29.0631 22.3113 28.6824C22.8901 29.4805 23.8296 30 24.8908 30C26.6499 30 28.076 28.5739 28.076 26.8148C28.0761 25.7535 27.5566 24.8141 26.7585 24.2352Z" fill="#95D6A4" />
                      <path d="M24.5329 28.0129C24.425 28.0129 24.3215 27.97 24.2451 27.8937L23.4341 27.0827C23.2752 26.9237 23.2752 26.6661 23.4341 26.5071C23.593 26.3483 23.8508 26.3483 24.0096 26.5071L24.5329 27.0304L25.8689 25.6943C26.0278 25.5355 26.2855 25.5355 26.4444 25.6943C26.6034 25.8532 26.6034 26.1109 26.4444 26.2698L24.8206 27.8937C24.7443 27.97 24.6408 28.0129 24.5329 28.0129Z" fill="#F2FBFF" />
                      <path d="M15.781 25.4157C15.911 24.9771 15.5823 24.5369 15.1248 24.5369C14.6751 24.5369 14.3476 24.1105 14.4637 23.6759L14.5074 23.5121C14.6235 23.0776 14.296 22.6512 13.8462 22.6512H13.7546C13.3173 22.6512 12.9922 22.2466 13.0862 21.8195L13.1348 21.599C13.2289 21.172 12.9038 20.7674 12.4665 20.7674H11.5128L10.7588 23.2733C10.5387 24.0044 10.427 24.7637 10.427 25.5272V26.0801C10.427 26.23 10.5484 26.3515 10.6983 26.3515H15.5037L15.781 25.4157Z" fill="#F9F6F6" />
                      <path d="M22.7033 19.9414L24.0874 20.132C24.31 20.1626 24.5154 20.0071 24.5461 19.7844C24.5768 19.5618 24.4211 19.3564 24.1984 19.3257L22.8143 19.1351C22.045 19.0291 21.2725 19.1587 20.5784 19.5102L19.7242 19.9472C19.555 20.0339 19.451 20.2127 19.4595 20.4028C19.4679 20.5928 19.5873 20.7617 19.7638 20.8331L20.7131 21.2166C21.1247 21.3788 21.4905 21.6453 21.771 21.9872L22.244 22.5637C22.3245 22.6618 22.4412 22.7125 22.5589 22.7125C22.6497 22.7125 22.7411 22.6823 22.8168 22.6202C22.9906 22.4777 23.0159 22.2213 22.8733 22.0474L22.4003 21.471C22.2133 21.2431 21.9974 21.0409 21.7599 20.8692C22.083 20.9409 22.3938 21.0648 22.6792 21.2382L23.8929 21.9757C23.959 22.0159 24.0319 22.0349 24.1039 22.0349C24.2414 22.0349 24.3755 21.9653 24.4521 21.8392C24.5688 21.6471 24.5077 21.3968 24.3156 21.2801L23.1019 20.5427C22.6265 20.2538 22.096 20.0729 21.5471 20.0091C21.9218 19.9116 22.313 19.8878 22.7033 19.9414Z" fill="#4A80AA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_1551">
                        <rect width="27" height="27" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>

                </span>
                <span className="h-5 text-primary-80 leading-5 font-bold text-[14px] ">100% guarantee of pet identification</span>
              </div>
            </div>
            <div className="hidden xl:flex flex-row h-8 py-1.5 px-2.5 gap-[21px] ">
              <div className="flex flex-row gap-2">
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 11.25L12.5 13.75M12.5 6.25L7.5 8.75M15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5ZM5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61929 7.5 10C7.5 11.3807 6.38071 12.5 5 12.5ZM15 7.5C13.6193 7.5 12.5 6.38071 12.5 5C12.5 3.61929 13.6193 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5C17.5 6.38071 16.3807 7.5 15 7.5Z" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
                <span className=" h-5 text-primary-80 leading-5 font-bold text-[14px] ">Share:</span>
              </div>
              <div className="hidden xl:flex flex-row w-[129px] justify-between ">
                <span>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_108_1610)">
                      <path d="M18.7692 9.38461C18.7692 4.20163 14.5676 0 9.38461 0C4.20163 0 0 4.20163 0 9.38461C0 14.0687 3.4318 17.9512 7.91827 18.6552V12.0974H5.53546V9.38461H7.91827V7.31707C7.91827 4.96505 9.31936 3.66587 11.463 3.66587C12.4894 3.66587 13.5637 3.84916 13.5637 3.84916V6.15865H12.3804C11.2146 6.15865 10.851 6.88211 10.851 7.625V9.38461H13.4537L13.0376 12.0974H10.851V18.6552C15.3374 17.9512 18.7692 14.0687 18.7692 9.38461Z" fill="#99A2A5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_1610">
                        <rect width="18.7692" height="18.7692" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_108_1611)">
                      <path d="M6.64826 17.0097C13.7292 17.0097 17.6033 11.1417 17.6033 6.05458C17.6033 5.88962 17.5997 5.72099 17.5923 5.55603C18.346 5.01101 18.9963 4.33594 19.5129 3.56253C18.811 3.8748 18.0658 4.07875 17.3027 4.1674C18.1062 3.68579 18.7078 2.9292 18.996 2.03789C18.2401 2.48585 17.4135 2.80184 16.5516 2.97232C15.9708 2.35525 15.203 1.94667 14.3667 1.80976C13.5305 1.67285 12.6724 1.81523 11.9252 2.2149C11.178 2.61456 10.5833 3.24924 10.2329 4.02082C9.88262 4.7924 9.79623 5.65789 9.98713 6.48349C8.45663 6.40669 6.95935 6.0091 5.59236 5.31651C4.22537 4.62392 3.01918 3.65179 2.052 2.46314C1.56043 3.31067 1.41 4.31357 1.6313 5.26802C1.8526 6.22247 2.42902 7.05685 3.24341 7.60158C2.63202 7.58217 2.03402 7.41756 1.49882 7.12135V7.16901C1.49827 8.05842 1.80575 8.92059 2.369 9.60894C2.93224 10.2973 3.71648 10.7693 4.58841 10.9448C4.02205 11.0998 3.42764 11.1224 2.85116 11.0108C3.0972 11.7757 3.57591 12.4447 4.22047 12.9245C4.86504 13.4042 5.6433 13.6708 6.44664 13.6869C5.0828 14.7582 3.39807 15.3393 1.66378 15.3366C1.35622 15.3361 1.04896 15.3172 0.743652 15.2801C2.5055 16.4104 4.555 17.0107 6.64826 17.0097Z" fill="#99A2A5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_1611">
                        <rect width="18.7692" height="18.7692" fill="white" transform="translate(0.743652)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_108_1612)">
                      <path d="M9.87192 1.68996C12.3794 1.68996 12.6763 1.70096 13.6624 1.74495C14.5789 1.78528 15.0738 1.93924 15.4037 2.06755C15.8399 2.23618 16.1552 2.44147 16.4815 2.76773C16.8114 3.09766 17.013 3.40926 17.1817 3.84549C17.31 4.17542 17.4639 4.67398 17.5043 5.58678C17.5482 6.57656 17.5592 6.8735 17.5592 9.37728C17.5592 11.8847 17.5482 12.1817 17.5043 13.1678C17.4639 14.0843 17.31 14.5791 17.1817 14.9091C17.013 15.3453 16.8077 15.6606 16.4815 15.9868C16.1515 16.3168 15.8399 16.5184 15.4037 16.687C15.0738 16.8153 14.5752 16.9693 13.6624 17.0096C12.6726 17.0536 12.3757 17.0646 9.87192 17.0646C7.36447 17.0646 7.06753 17.0536 6.08142 17.0096C5.16495 16.9693 4.67006 16.8153 4.34013 16.687C3.90389 16.5184 3.58863 16.3131 3.26236 15.9868C2.93244 15.6569 2.73081 15.3453 2.56218 14.9091C2.43388 14.5791 2.27991 14.0806 2.23959 13.1678C2.1956 12.178 2.1846 11.8811 2.1846 9.37728C2.1846 6.86983 2.1956 6.5729 2.23959 5.58678C2.27991 4.67031 2.43388 4.17542 2.56218 3.84549C2.73081 3.40926 2.9361 3.09399 3.26236 2.76773C3.59229 2.4378 3.90389 2.23618 4.34013 2.06755C4.67006 1.93924 5.16862 1.78528 6.08142 1.74495C7.06753 1.70096 7.36447 1.68996 9.87192 1.68996ZM9.87192 0C7.32414 0 7.00521 0.0109976 6.00443 0.054988C5.00732 0.0989784 4.3218 0.260276 3.72793 0.491226C3.1084 0.733173 2.58418 1.0521 2.06363 1.57632C1.53941 2.09687 1.22048 2.62109 0.978531 3.23696C0.747581 3.8345 0.586283 4.51635 0.542293 5.51346C0.498302 6.51791 0.487305 6.83684 0.487305 9.38461C0.487305 11.9324 0.498302 12.2513 0.542293 13.2521C0.586283 14.2492 0.747581 14.9347 0.978531 15.5286C1.22048 16.1481 1.53941 16.6724 2.06363 17.1929C2.58418 17.7135 3.1084 18.0361 3.72426 18.2743C4.3218 18.5053 5.00365 18.6666 6.00077 18.7106C7.00155 18.7546 7.32048 18.7656 9.86825 18.7656C12.416 18.7656 12.735 18.7546 13.7357 18.7106C14.7329 18.6666 15.4184 18.5053 16.0122 18.2743C16.6281 18.0361 17.1523 17.7135 17.6729 17.1929C18.1934 16.6724 18.516 16.1481 18.7543 15.5323C18.9853 14.9347 19.1466 14.2529 19.1905 13.2558C19.2345 12.255 19.2455 11.9361 19.2455 9.38828C19.2455 6.84051 19.2345 6.52157 19.1905 5.52079C19.1466 4.52368 18.9853 3.83816 18.7543 3.24429C18.5234 2.62109 18.2044 2.09687 17.6802 1.57632C17.1597 1.05577 16.6354 0.733173 16.0196 0.494892C15.422 0.263942 14.7402 0.102644 13.7431 0.0586538C12.7386 0.0109976 12.4197 0 9.87192 0Z" fill="#99A2A5" />
                      <path d="M9.87188 4.564C7.21046 4.564 5.05127 6.72319 5.05127 9.38461C5.05127 12.046 7.21046 14.2052 9.87188 14.2052C12.5333 14.2052 14.6925 12.046 14.6925 9.38461C14.6925 6.72319 12.5333 4.564 9.87188 4.564ZM9.87188 12.5116C8.14526 12.5116 6.7449 11.1112 6.7449 9.38461C6.7449 7.65799 8.14526 6.25762 9.87188 6.25762C11.5985 6.25762 12.9989 7.65799 12.9989 9.38461C12.9989 11.1112 11.5985 12.5116 9.87188 12.5116Z" fill="#99A2A5" />
                      <path d="M16.0087 4.37335C16.0087 4.99654 15.5028 5.49877 14.8832 5.49877C14.26 5.49877 13.7578 4.99288 13.7578 4.37335C13.7578 3.75015 14.2637 3.24792 14.8832 3.24792C15.5028 3.24792 16.0087 3.75381 16.0087 4.37335Z" fill="#99A2A5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_1612">
                        <rect width="18.7692" height="18.7692" fill="white" transform="translate(0.487305)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_108_1613)">
                    <path d="M18.813 5.63082C18.813 5.63082 18.6297 4.33677 18.0651 3.76856C17.3503 3.02072 16.5511 3.01706 16.1846 2.97307C13.5598 2.78244 9.61899 2.78244 9.61899 2.78244H9.61166C9.61166 2.78244 5.67086 2.78244 3.0461 2.97307C2.67951 3.01706 1.88035 3.02072 1.16551 3.76856C0.600965 4.33677 0.421338 5.63082 0.421338 5.63082C0.421338 5.63082 0.230713 7.15215 0.230713 8.66982V10.0922C0.230713 11.6098 0.417672 13.1312 0.417672 13.1312C0.417672 13.1312 0.600965 14.4252 1.16184 14.9934C1.87669 15.7413 2.81515 15.7156 3.23306 15.7963C4.73606 15.9392 9.61533 15.9832 9.61533 15.9832C9.61533 15.9832 13.5598 15.9759 16.1846 15.7889C16.5511 15.7449 17.3503 15.7413 18.0651 14.9934C18.6297 14.4252 18.813 13.1312 18.813 13.1312C18.813 13.1312 18.9999 11.6135 18.9999 10.0922V8.66982C18.9999 7.15215 18.813 5.63082 18.813 5.63082ZM7.67609 11.8188V6.54362L12.746 9.19037L7.67609 11.8188Z" fill="#99A2A5"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_108_1613">
                    <rect width="18.7692" height="18.7692" fill="white" transform="translate(0.230713)"/>
                    </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[18px] ">
            <div className="flex text-[14px] font-medium leading-[20px] text-neutral-60 mb-[9px] w-[343px] h-6 gap-1.5 ">
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
              <span className="h-5">Large Dog</span>
              <span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 9L14 12L11 15" stroke="#667479" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              </span>
              <span className="h-5">Shiba Inu Sepia</span>
            </div>
            <div className="flex flex-col w-[302px] h-[96px] gap-1.5">
              <div className="flex flex-col gap-0.5">
                <span className="hidden xl:block h-5 text-neutral-40 leading-5 font-medium text-[14px] ">SKU #{animal.sku}</span>
                <span className="h-9 text-neutral-100 leading-9 font-bold text-[24px] ">{animal.name}</span>
              </div>
              <span className="h-8 text-neutral-100 leading-8 font-bold text-[20px] ">{animal.price}</span>
            </div>
            {/* les buttons */}
            <div className="flex flex-row md:w-[373px] gap-2 md:gap-[18px]">
              <button className='flex items-center bg-primary w-[138px] h-11 rounded-[57px] px-7 gap-2 '>
                  <span className='text-neutral-00 w-[82px] h-6 font-medium leading-[24px] tracking-[0] text-[15px] align-bottom '>Contact us</span>
              </button>
              <button className='flex items-center w-[200px] md:w-[217px] h-11 border-[2px] border-primary-80 rounded-[57px] px-4 md:pl-6 md:pr-7 gap-2.5 '>
                <span className="">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 14.8V7.19995V7.19666C21 6.07875 21 5.51945 20.7822 5.09204C20.5905 4.71572 20.2841 4.40973 19.9078 4.21799C19.48 4 18.9203 4 17.8002 4H6.2002C5.08009 4 4.51962 4 4.0918 4.21799C3.71547 4.40973 3.40973 4.71572 3.21799 5.09204C3 5.51986 3 6.07985 3 7.19995V18.671C3 19.7367 3 20.2696 3.21846 20.5432C3.40845 20.7813 3.69644 20.9197 4.00098 20.9194C4.35115 20.919 4.76744 20.5861 5.59961 19.9203L7.12357 18.7012C7.44844 18.4413 7.61084 18.3114 7.79172 18.219C7.95219 18.137 8.12279 18.0771 8.29932 18.0408C8.49829 18 8.70652 18 9.12256 18H17.8001C18.9202 18 19.48 18 19.9078 17.782C20.2841 17.5902 20.5905 17.2844 20.7822 16.908C21 16.4806 21 15.9212 21 14.8032V14.8Z" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
                <span className='text-primary-80 w-[129px] h-6 font-bold leading-[24px] tracking-[0] text-[15px] align-bottom '>Chat with Monito</span>
              </button>
            </div>
            <div className="flex flex-row justify-between gap-2">
              <span className="h-5 text-primary-80 leading-6 font-bold text-[18px] ">Information</span>
              <span className="flex flex-row gap-2">
                <span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 11.25L12.5 13.75M12.5 6.25L7.5 8.75M15 17.5C13.6193 17.5 12.5 16.3807 12.5 15C12.5 13.6193 13.6193 12.5 15 12.5C16.3807 12.5 17.5 13.6193 17.5 15C17.5 16.3807 16.3807 17.5 15 17.5ZM5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61929 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61929 7.5 10C7.5 11.3807 6.38071 12.5 5 12.5ZM15 7.5C13.6193 7.5 12.5 6.38071 12.5 5C12.5 3.61929 13.6193 2.5 15 2.5C16.3807 2.5 17.5 3.61929 17.5 5C17.5 6.38071 16.3807 7.5 15 7.5Z" stroke="#002A48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              
                <span className=" h-5 text-primary-80 leading-5 font-bold text-[14px] ">Share</span>
              </span>
            </div>
            <div className="flex flex-col w-full h-full">
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">SKU</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: #{animal.sku}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Gender</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.gender}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Age</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.age}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Size</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.size}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Color</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.color}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Vaccinated</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.vaccinated ? 'Yes' : 'No'}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Dewormed</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.dewormed ? 'Yes' : 'No'}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Cert</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.cert ? 'Yes (MKA)' : 'No'} </span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Microchip</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.microchip ? 'Yes' : 'No'}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Location</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.location}</span>
                </div>
              </div>
              <div className="flex flex-row h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Published Date</span>
                </div>
                <div className="flex flex-row w-[323px] h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.Publicate_date}</span>
                </div>
              </div>
              <div className="flex flex-row min-h-[42px] border-b border-neutral-10 py-2 ">
                <div className="flex flex-row w-[194px] min-h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">Additional Information</span>
                </div>
                <div className="flex flex-row w-[323px] min-h-[26px] px-[11px] pt-1 pb-0.5 gap-2.5 ">
                  <span className="text-neutral-60 leading-5 text-[14px] font-medium">: {animal.Additionnal_Informations}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:hidden flex-col md:flex-row w-full max-h-24 bg-brand-gradient py-[9px] rounded-[10px] px-3 justify-between gap-[9px] ">
              <div className="flex flex-row items-center h-[30px] gap-[9px]  ">
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" fill="#FCEED5" />
                    <g clip-path="url(#clip0_108_1538)">
                      <path d="M27 11.9462C27.0004 12.3527 26.9783 12.7588 26.9338 13.1628C26.4 18.2111 22.531 23.52 15 25.9655C7.48139 23.5324 3.60001 18.24 3.06622 13.1628C3.02158 12.7588 2.99948 12.3527 3.00001 11.9462C3.00001 7.93243 5.44966 4.44829 9.00001 4.44829C10.1563 4.44605 11.299 4.69747 12.3476 5.18484L18.2979 4.92002C19.1641 4.60597 20.0787 4.44631 21 4.44829C24.5504 4.44829 27 7.93243 27 11.9462Z" fill="#DF4D60" />
                      <path d="M27 11.9462C27.0004 12.3527 26.9783 12.7588 26.9338 13.1628C25.4524 16.9697 20.669 19.7586 15 19.7586C9.33104 19.7586 4.5476 16.9697 3.06622 13.1628C3.02158 12.7588 2.99948 12.3527 3.00001 11.9462C3.00001 7.93243 5.44966 4.44829 9.00001 4.44829C10.1563 4.44605 11.299 4.69747 12.3476 5.18484L18.2979 4.92002C19.1641 4.60597 20.0787 4.44631 21 4.44829C24.5504 4.44829 27 7.93243 27 11.9462Z" fill="#FF5364" />
                      <path d="M24.2069 19.7835C22.4725 21.9915 20.2312 23.7487 17.6731 24.9062C17.4248 25.0262 17.1724 25.1421 16.9158 25.2455C16.3075 25.5103 15.6662 25.7503 15 25.9655C14.7186 25.8745 14.4413 25.7793 14.1724 25.68V21.4138C13.1374 20.2807 12.5492 18.8102 12.5172 17.2759C12.5398 15.8139 12.9146 14.3788 13.6096 13.0924C13.6565 12.9908 13.659 12.8743 13.6166 12.7707C13.5743 12.6672 13.4908 12.5858 13.3862 12.5462C12.1823 12.1299 10.9192 11.9105 9.64548 11.8966C7.66341 11.2345 7.52686 9.25242 7.55582 8.48276C7.56163 8.29954 7.68833 8.14242 7.86617 8.09793L10.2662 7.50207C10.666 7.40062 11.014 7.15437 11.2427 6.81104L12.2151 5.35448C12.2557 5.2952 12.2999 5.23853 12.3475 5.18483C12.553 4.94619 12.8232 4.77227 13.1255 4.68414C14.2787 4.32089 15.4728 4.10266 16.68 4.03448C17.3254 4.06984 17.9202 4.39538 18.2979 4.92C19.1596 6.1032 19.6088 7.53665 19.5765 9C19.5765 10.0593 19.1213 10.6676 18.4965 10.9531V10.9614L18.6165 11.7931L18.7075 12.4303C18.73 12.5943 18.8494 12.7284 19.0096 12.7697C19.705 13.0065 20.3277 13.4184 20.8179 13.9655C21.5834 14.7269 23.1269 17.2138 24.2069 19.7835Z" fill="#35495E" />
                      <path d="M18.6166 11.7931C18.2892 11.9191 17.9411 11.9823 17.5903 11.9793C17.1383 11.9763 16.6907 11.8893 16.2703 11.7227C15.7996 11.5322 15.4906 11.0761 15.4883 10.5683V7.75861C15.4883 7.53008 15.6735 7.34482 15.9021 7.34482C16.1306 7.34482 16.3159 7.53008 16.3159 7.75861V10.5683C16.3157 10.7378 16.419 10.8904 16.5766 10.9531C17.1554 11.2023 17.8087 11.2157 18.3972 10.9903C18.4289 10.9764 18.4623 10.9666 18.4966 10.9614L18.6166 11.7931Z" fill="#2C3E50" />
                      <path d="M21.6001 20.7186C21.5254 20.9343 21.2915 21.0504 21.0745 20.9793C20.2965 20.6753 19.4181 20.7793 18.7325 21.2565C17.9249 21.8918 17.4623 22.8693 17.4828 23.8965C17.4764 24.2426 17.5412 24.5863 17.6732 24.9062C17.4249 25.0262 17.1725 25.1421 16.9159 25.2455C16.7387 24.8181 16.65 24.3592 16.6552 23.8965C16.6361 22.604 17.2263 21.3777 18.2483 20.5862C19.1511 19.9542 20.3072 19.8072 21.3394 20.1931C21.5551 20.2678 21.6711 20.5017 21.6001 20.7186Z" fill="#2C3E50" />
                      <path d="M9.20684 7.76691V9.00001C9.20684 9.22854 9.02158 9.4138 8.79305 9.4138H7.61374C7.56348 9.10616 7.54408 8.79427 7.55581 8.48277C7.56161 8.29954 7.68831 8.14243 7.86615 8.09794L9.20684 7.76691Z" fill="#3F5C6C" />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_1538">
                        <rect width="24" height="24" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="h-5 text-primary-80 leading-5 font-bold text-[14px] ">100% health guarantee for pets</span>
              </div>
              <div className="flex flex-row items-center h-[30px] gap-[9px]  ">
                <span>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_108_1551)">
                      <path d="M14.2387 9.23168L16.6665 8.87498C17.6106 8.73629 18.3322 7.96141 18.4034 7.00988L18.6653 3.51121C18.6934 3.13585 18.2945 2.87856 17.9641 3.05891L15.746 4.26985C14.9879 4.68371 14.4553 5.41556 14.2947 6.26416L13.8163 8.79135C13.7684 9.04437 13.984 9.26912 14.2387 9.23168Z" fill="#FFE07D" />
                      <path d="M17.9642 3.05891L16.9089 3.63498L16.6597 6.96532C16.5884 7.91686 15.8668 8.69168 14.9228 8.83043L13.8333 8.99053C13.8919 9.14878 14.0549 9.25868 14.2388 9.23163L16.6666 8.87488C17.6107 8.73619 18.3323 7.96131 18.4035 7.00977L18.6654 3.51111C18.6934 3.13585 18.2946 2.87856 17.9642 3.05891Z" fill="#FFD064" />
                      <path d="M9.86684 18.9549L11.4653 18.6186C11.8148 18.6588 12.043 19.0055 11.9416 19.3424L11.5128 20.7674L15.5037 26.3514H18.1574L28.1904 24.3855L22.5049 12.9789C21.6578 11.2794 20.6577 9.66062 19.5169 8.14261C17.778 5.53421 14.2567 4.82403 11.6427 6.55451L9.94921 7.67559C9.24636 8.14087 8.78673 8.89455 8.69476 9.73244L8.54252 11.1199C8.48815 11.6157 8.14801 12.0336 7.67356 12.1875L4.6117 13.1807L3.98511 15.6554L4.1672 16.0342C4.71991 17.1842 5.82406 17.9702 7.09169 18.1159L8.15371 18.238C8.1998 18.2433 8.24225 18.2675 8.26814 18.3059C8.61761 18.8257 9.24937 19.0848 9.86684 18.9549Z" fill="#FFD064" />
                      <path d="M22.5048 12.9789C21.6578 11.2794 20.6576 9.66062 19.5169 8.14261C18.0291 5.91094 15.2367 5.06904 12.824 5.95614C13.9206 6.35676 14.9042 7.09699 15.6013 8.14261C16.7421 9.66062 17.7422 11.2794 18.5893 12.9789L25.0087 25.8577L28.1904 24.3855L22.5048 12.9789Z" fill="#FFC250" />
                      <path d="M22.6742 16.383L22.7186 15.7946C22.7858 14.9051 22.4194 14.0378 21.7347 13.466L19.716 11.7802C19.4747 11.5787 19.1131 11.7869 19.1661 12.0967L19.6361 14.8414C19.6756 15.0721 19.8116 15.2749 20.0099 15.3991L22.0691 16.6888C22.3215 16.847 22.6517 16.6802 22.6742 16.383Z" fill="#4A80AA" />
                      <path d="M21.7347 13.4661L19.716 11.7803C19.4747 11.5788 19.1131 11.7869 19.1661 12.0968L19.312 12.9486L20.0991 13.6059C20.7838 14.1777 21.1503 15.0449 21.083 15.9345L21.0732 16.0652L22.069 16.6889C22.3215 16.847 22.6517 16.6802 22.6742 16.3831L22.7186 15.7946C22.7858 14.9051 22.4194 14.0379 21.7347 13.4661Z" fill="#407093" />
                      <path d="M16.3879 20.6197C16.6837 20.9167 17.0466 21.1382 17.4459 21.2656C17.5011 21.2832 17.5453 21.3249 17.566 21.3791L17.7367 21.8268C17.8549 22.1368 18.1721 22.3358 18.4995 22.2818C18.516 22.2791 18.5325 22.2758 18.549 22.2719L19.4505 22.0621C19.8143 21.9774 20.0852 22.3935 19.8606 22.6919L18.9297 23.9284C18.4013 24.6303 18.1335 25.4858 18.1572 26.3513H29.1626C29.346 26.3513 29.4772 26.1728 29.4208 25.9983C29.3059 25.6426 29.2195 25.278 29.1632 24.9077L28.671 21.67C28.4794 20.4099 27.9459 19.2265 27.1287 18.2484L24.9996 15.7002C24.2931 14.8547 23.3172 14.2779 22.2358 14.0667L22.1225 14.0446C20.7087 13.7685 19.2456 14.1419 18.1371 15.0618L17.6597 15.4579C16.9695 16.0307 16.6572 16.9411 16.8506 17.8169L17.0082 18.5308L16.0896 19.5422L16.125 20.3557L16.3879 20.6197Z" fill="#407093" />
                      <path d="M10.712 13.1504C11.0976 13.1504 11.4103 12.8377 11.4103 12.4521C11.4103 12.0664 11.0976 11.7538 10.712 11.7538C10.3263 11.7538 10.0137 12.0664 10.0137 12.4521C10.0137 12.8377 10.3263 13.1504 10.712 13.1504Z" fill="#707DD3" />
                      <path d="M3.69688 15.0555L3.98513 15.6553L4.13663 15.252C4.23451 14.9916 4.48768 14.8226 4.76575 14.8322L5.48141 14.8569C5.76797 14.8668 5.92027 14.5222 5.72003 14.317L4.61166 13.1806L4.48162 13.2228C3.71913 13.4701 3.34962 14.333 3.69688 15.0555Z" fill="#407093" />
                      <path d="M5.72002 14.317L4.61165 13.1806L4.4816 13.2228C4.22711 13.3054 4.0167 13.4568 3.86182 13.6483L4.78778 14.5977C4.85681 14.6684 4.89119 14.7525 4.89879 14.8368L5.48139 14.8569C5.76795 14.8668 5.92025 14.5222 5.72002 14.317Z" fill="#365E7D" />
                      <path d="M7.7724 15.9745C8.02531 15.9745 8.23034 15.7694 8.23034 15.5165C8.23034 15.2636 8.02531 15.0586 7.7724 15.0586C7.51948 15.0586 7.31445 15.2636 7.31445 15.5165C7.31445 15.7694 7.51948 15.9745 7.7724 15.9745Z" fill="#FFC250" />
                      <path d="M9.54242 15.9745C9.79533 15.9745 10.0004 15.7694 10.0004 15.5165C10.0004 15.2636 9.79533 15.0586 9.54242 15.0586C9.2895 15.0586 9.08447 15.2636 9.08447 15.5165C9.08447 15.7694 9.2895 15.9745 9.54242 15.9745Z" fill="#FFC250" />
                      <path d="M8.79803 17.2459C9.05095 17.2459 9.25598 17.0408 9.25598 16.7879C9.25598 16.535 9.05095 16.33 8.79803 16.33C8.54512 16.33 8.34009 16.535 8.34009 16.7879C8.34009 17.0408 8.54512 17.2459 8.79803 17.2459Z" fill="#FFC250" />
                      <path d="M19.0098 19.1798C19.3683 19.1798 19.6588 18.8892 19.6588 18.5308C19.6588 18.1724 19.3683 17.8818 19.0098 17.8818C18.6514 17.8818 18.3608 18.1724 18.3608 18.5308C18.3608 18.8892 18.6514 19.1798 19.0098 19.1798Z" fill="#95D6A4" />
                      <path d="M16.6433 19.5013L16.0897 19.5423L16.033 19.6047C15.8762 19.7773 15.8607 20.0359 15.9958 20.226L16.1251 20.3558L16.7035 20.3129C16.9276 20.2963 17.0959 20.1011 17.0793 19.877C17.0627 19.6529 16.8678 19.4852 16.6433 19.5013Z" fill="#E28086" />
                      <path d="M16.2494 9.65151L17.3001 9.70282L19.0543 9.47479C19.0543 9.47479 19.8545 9.56882 20.2516 9.16651C20.4899 8.92514 20.6701 8.62229 20.7653 8.27741L21.6991 4.89555C21.7993 4.53274 21.4578 4.20315 21.0988 4.31616L18.6882 5.07506C17.8644 5.33441 17.2002 5.94945 16.8784 6.7509L15.9201 9.13782C15.8242 9.37671 15.9923 9.63896 16.2494 9.65151Z" fill="#FFE07D" />
                      <path d="M21.0987 4.31614L19.6848 4.76127C19.6853 4.80499 19.6797 4.84997 19.6671 4.89554L18.7333 8.27739C18.5373 8.9872 17.9815 9.5185 17.3 9.7028L18.7004 9.7712C19.6534 9.81776 20.5113 9.19713 20.7652 8.27739L21.699 4.89554C21.7992 4.53272 21.4577 4.20308 21.0987 4.31614Z" fill="#FFD064" />
                      <path d="M19.7797 14.9067L19.893 14.9288C20.9744 15.14 21.9503 15.7168 22.6568 16.5623L24.786 19.1105C25.6033 20.0886 26.1367 21.2721 26.3283 22.5322L26.8206 25.7699C26.8503 25.9655 26.8892 26.1594 26.9354 26.3515H29.1628C29.3462 26.3515 29.4774 26.173 29.4211 25.9984C29.3062 25.6427 29.2197 25.2781 29.1634 24.9079L28.6711 21.6702C28.4795 20.4101 27.9461 19.2266 27.1289 18.2485L24.9997 15.7003C24.2932 14.8548 23.3173 14.278 22.2359 14.0668L22.1226 14.0447C20.8304 13.7924 19.4971 14.083 18.4309 14.8372C18.8768 14.7971 19.3307 14.819 19.7797 14.9067Z" fill="#365E7D" />
                      <path d="M24.0773 16.2973C24.0773 16.2973 24.6635 15.7126 24.6922 15.3657C24.7351 14.8473 24.6314 14.32 24.3817 13.8474L23.1533 11.5219C23.0065 11.244 22.5929 11.2995 22.5245 11.6063L21.9184 14.3241C21.8674 14.5525 21.9163 14.7917 22.0527 14.9819L23.0496 16.3718L24.0773 16.2973Z" fill="#4A80AA" />
                      <path d="M24.3816 13.8475L23.1532 11.522C23.0064 11.244 22.5928 11.2995 22.5244 11.6063L22.3025 12.6013L22.9927 13.9078C23.3984 14.6758 23.4176 15.5882 23.0495 16.3719L23.4687 16.9563C23.6423 17.1984 24.0111 17.1693 24.1446 16.9028L24.4089 16.3753C24.8085 15.5776 24.7983 14.6362 24.3816 13.8475Z" fill="#407093" />
                      <path d="M24.8908 30C26.65 30 28.0761 28.5739 28.0761 26.8147C28.0761 25.0556 26.65 23.6295 24.8908 23.6295C23.1317 23.6295 21.7056 25.0556 21.7056 26.8147C21.7056 28.5739 23.1317 30 24.8908 30Z" fill="#B3E59F" />
                      <path d="M26.7585 24.2352C27.1392 24.76 27.3643 25.405 27.3643 26.1029C27.3643 27.8621 25.9382 29.2882 24.179 29.2882C23.4811 29.2882 22.8361 29.0631 22.3113 28.6824C22.8901 29.4805 23.8296 30 24.8908 30C26.6499 30 28.076 28.5739 28.076 26.8148C28.0761 25.7535 27.5566 24.8141 26.7585 24.2352Z" fill="#95D6A4" />
                      <path d="M24.5329 28.0129C24.425 28.0129 24.3215 27.97 24.2451 27.8937L23.4341 27.0827C23.2752 26.9237 23.2752 26.6661 23.4341 26.5071C23.593 26.3483 23.8508 26.3483 24.0096 26.5071L24.5329 27.0304L25.8689 25.6943C26.0278 25.5355 26.2855 25.5355 26.4444 25.6943C26.6034 25.8532 26.6034 26.1109 26.4444 26.2698L24.8206 27.8937C24.7443 27.97 24.6408 28.0129 24.5329 28.0129Z" fill="#F2FBFF" />
                      <path d="M15.781 25.4157C15.911 24.9771 15.5823 24.5369 15.1248 24.5369C14.6751 24.5369 14.3476 24.1105 14.4637 23.6759L14.5074 23.5121C14.6235 23.0776 14.296 22.6512 13.8462 22.6512H13.7546C13.3173 22.6512 12.9922 22.2466 13.0862 21.8195L13.1348 21.599C13.2289 21.172 12.9038 20.7674 12.4665 20.7674H11.5128L10.7588 23.2733C10.5387 24.0044 10.427 24.7637 10.427 25.5272V26.0801C10.427 26.23 10.5484 26.3515 10.6983 26.3515H15.5037L15.781 25.4157Z" fill="#F9F6F6" />
                      <path d="M22.7033 19.9414L24.0874 20.132C24.31 20.1626 24.5154 20.0071 24.5461 19.7844C24.5768 19.5618 24.4211 19.3564 24.1984 19.3257L22.8143 19.1351C22.045 19.0291 21.2725 19.1587 20.5784 19.5102L19.7242 19.9472C19.555 20.0339 19.451 20.2127 19.4595 20.4028C19.4679 20.5928 19.5873 20.7617 19.7638 20.8331L20.7131 21.2166C21.1247 21.3788 21.4905 21.6453 21.771 21.9872L22.244 22.5637C22.3245 22.6618 22.4412 22.7125 22.5589 22.7125C22.6497 22.7125 22.7411 22.6823 22.8168 22.6202C22.9906 22.4777 23.0159 22.2213 22.8733 22.0474L22.4003 21.471C22.2133 21.2431 21.9974 21.0409 21.7599 20.8692C22.083 20.9409 22.3938 21.0648 22.6792 21.2382L23.8929 21.9757C23.959 22.0159 24.0319 22.0349 24.1039 22.0349C24.2414 22.0349 24.3755 21.9653 24.4521 21.8392C24.5688 21.6471 24.5077 21.3968 24.3156 21.2801L23.1019 20.5427C22.6265 20.2538 22.096 20.0729 21.5471 20.0091C21.9218 19.9116 22.313 19.8878 22.7033 19.9414Z" fill="#4A80AA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_108_1551">
                        <rect width="27" height="27" fill="white" transform="translate(3 3)" />
                      </clipPath>
                    </defs>
                  </svg>

                </span>
                <span className="h-5 text-primary-80 leading-5 font-bold text-[14px] ">100% guarantee of pet identification</span>
              </div>
            </div>
        {/* Our lovely customer */}
        <div className="flex flex-col w-full h-[471px] pb-[26px] pl-4 pt-6 rounded-[20px] ">
          <span className="h-9 font-bold leading-9 mb-3 text-[24px] text-neutral-100 ">Our lovely customer</span>
          <div className="flex flex-row h-[340px] mb-6 overflow-x-hidden gap-3 ">
            {lovelycustomers.map((lovelycustomer, index) => (
              <img key={index} src={lovelycustomer.image} alt="" className="w-[248px] h-full rounded-[10px] " />
            ))}
          </div>
          <div className="flex flex-row justify-center">
            <div class="flex flex-row items-start gap-[6px] w-[97.5px] h-[9px]">
              {/* <!-- Active dot (plus large) --> */}
              <div class="w-[22.5px] h-[9px] bg-primary rounded-[7.5px]"></div>
              
              {/* <!-- Inactive dots --> */}
              <div class="w-[9px] h-[9px] bg-neutral-20 rounded-[7.5px]"></div>
              <div class="w-[9px] h-[9px] bg-neutral-20 rounded-[7.5px]"></div>
              <div class="w-[9px] h-[9px] bg-neutral-20 rounded-[7.5px]"></div>
              <div class="w-[9px] h-[9px] bg-neutral-20 rounded-[7.5px]"></div>
              <div class="w-[9px] h-[9px] bg-neutral-20 rounded-[7.5px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full min-h-[588px] py-[60px] gap-7 ">
          <div className="relative flex flex-col xl:flex-row">
            <div className="flex flex-col w-full h-[60px] gap-0.5 ">
              <span className="w-[91px] h-[24px] text-[#000000] font-medium leading-[24px] tracking-[0] text-[14px] xl:text-[16px]">Whats new?</span>
              <span className="w-full h-[36px] font-bold text-primary leading-[36px] tracking-[0] text-[20px] xl:text-[24px]">See more puppies</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-5 ">
            {animals.map((animal, index) => (
            <div key={index} className="w-full h-[317px] xl:w-[280px] xl:h-[378px] bg-neutral-00 p-2 cursor-pointer"
              onClick={() => handleAnimalClick(animal)}
            >
              <img className="min-w-[169px] h-[169px] xl:w-[264px] xl:h-[264px] rounded-[10px] " src={animal.image} alt="" />
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
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}