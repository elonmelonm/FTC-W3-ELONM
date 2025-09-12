import { Route, Routes, useLocation } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Category } from "./pages/Category"
import { CategoryDetail } from "./pages/CategoryDetail"
import { Link } from 'react-router-dom'
import Logo from './assets/Frame.png'

function App() {
  const location = useLocation();

  const isCategoryDetailPage = location.pathname === "/category-detail";

  return (
    <div className="flex flex-col min-h-screen">

      {!isCategoryDetailPage && (
        // Header flottant au-dessus du contenu 
        <Header className="absolute top-0 left-0 w-full z-10" />
      )}

      {isCategoryDetailPage && (
        <>
          <header className="absolute top-0 left-0 z-10 hidden xl:flex lg:flex-row lg:justify-between h-[100px] bg-transparent px-[130px] py-7 ">
            <div className="flex items-center lg:w-[529px] h-10 gap-12 ">
              <img className='w-[115px] z-20 ' src={Logo} alt="" />
              <div className='flex w-[366px] h-6 gap-12 items-center '>
                <Link to="/" className='w-11 h-6 text-primary font-bold size-4 '>Home</Link>
                <Link to="/category" className='w-[71px] h-6 text-primary font-bold size-4 '>Category</Link>
                <Link to="/about" className='w-[46px] h-6 text-primary font-bold size-4 '>About</Link>
                <div className='w-[61px] h-6 text-primary font-bold size-4 '>Contact</div>
              </div>
            </div>
            <div className="flex lg:w-[615px] h-11 gap-3.5 ">
              <div className='flex bg-neutral-00 w-[280px] h-11 rounded-[46px] px-5 py-3 gap-3 '>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.281 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0916 18.0667C18.2418 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2418 17.0637 18.0916 16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15Z" fill="#667479" />
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
          </header>
          {/* // header en mobile & tablet  */}
          <header className='flex xl:hidden z-10 items-center justify-between h-[57px] bg-transparent absolute top-[33px] w-full pr-3.5 pl-2.5 pt-0.5 md:px-16'>
            <button>
              <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3335 35.5L23.3335 28.5L30.3335 21.5" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>
            <button>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_114_1537)">
                  <path d="M12.5 0C5.59067 0 0 5.59116 0 12.5C0 19.4093 5.59116 25 12.5 25C19.4093 25 25 19.4088 25 12.5C25 5.59067 19.4088 0 12.5 0ZM12.5 23.0469C6.67026 23.0469 1.95312 18.3293 1.95312 12.5C1.95312 6.67026 6.67065 1.95312 12.5 1.95312C18.3297 1.95312 23.0469 6.67065 23.0469 12.5C23.0469 18.3297 18.3293 23.0469 12.5 23.0469Z" fill="white" />
                  <path d="M12.5 10.4653C11.9606 10.4653 11.5234 10.9025 11.5234 11.4419V17.7306C11.5234 18.27 11.9606 18.7072 12.5 18.7072C13.0394 18.7072 13.4766 18.2699 13.4766 17.7306V11.4419C13.4766 10.9025 13.0394 10.4653 12.5 10.4653Z" fill="white" />
                  <path d="M12.5 9.26953C13.2281 9.26953 13.8184 8.67928 13.8184 7.95117C13.8184 7.22306 13.2281 6.63281 12.5 6.63281C11.7719 6.63281 11.1816 7.22306 11.1816 7.95117C11.1816 8.67928 11.7719 9.26953 12.5 9.26953Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_114_1537">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </button>
          </header>
        </>
      )}

      {/* Pages */}
      <main className="flex-1 relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category-detail" element={<CategoryDetail />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
