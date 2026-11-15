import { useState } from 'react'
import { animals, categoryAnimals } from '../../data'
import { ArrowLeftIcon, ArrowRightIcon, CaretDownMdIcon, FilterIcon } from '../ui/Icons'
import { PetCard } from '../ui/PetCard'

const filterGroups = [
    {
        id: 'gender',
        title: 'Gender',
        options: [{ value: 'male', label: 'Male' }, { value: 'female', label: 'Female' }],
    },
    {
        id: 'color',
        title: 'Color',
        options: [
            { value: 'red', label: 'Red', swatch: 'bg-pink-red' },
            { value: 'apricot', label: 'Apricot', swatch: 'bg-[#FFB672]' },
            { value: 'black', label: 'Black', swatch: 'bg-neutral-80' },
            { value: 'black-white', label: 'Black & White', swatch: 'bg-split' },
            { value: 'silver', label: 'Silver', swatch: 'bg-[#CECECE]' },
            { value: 'tan', label: 'Tan', swatch: 'bg-[#FFF7CE]' },
        ],
    },
    { id: 'price', title: 'Price' },
    {
        id: 'breed',
        title: 'Breed',
        options: [{ value: 'small', label: 'Small' }, { value: 'medium', label: 'Medium' }, { value: 'large', label: 'Large' }],
    },
]

// Sur mobile la maquette affiche 20 cartes (10 rangées de 2) dans l'ordre de la page d'accueil ;
// au-delà, 15 cartes (5 rangées de 3) dans l'ordre de la maquette desktop.
const mobileAnimals = [...animals, ...animals, ...animals.slice(0, 4)]

const pages = [
    { label: '1', current: true },
    { label: '2' },
    { label: '3' },
    { label: '4', className: 'hidden md:flex' },
    { label: '...', ellipsis: true },
    { label: '28' },
]

function Checkbox({ checked, onChange, children }) {
    return (
        <label className="flex cursor-pointer items-center gap-2.5 text-[14px] leading-5 font-medium text-neutral-100">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="size-4 shrink-0 cursor-pointer appearance-none rounded-[4px] border border-neutral-20 bg-neutral-00 bg-center bg-no-repeat transition-colors checked:border-primary checked:bg-primary checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M4%208.5l2.5%202.5L12%205.5%22%20fill%3D%22none%22%20stroke%3D%22%23FDFDFD%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')]"
            />
            {children}
        </label>
    )
}

function PriceInput({ label }) {
    return (
        <label className="flex h-10 min-w-0 flex-1 items-center justify-between gap-2.5 border-b border-neutral-10 px-2.5 text-neutral-80">
            <span className="sr-only">{label} price</span>
            <input
                type="number"
                inputMode="numeric"
                min="0"
                max="999999999"
                placeholder={label}
                className="w-full min-w-0 bg-transparent text-[14px] leading-5 font-medium text-neutral-80 outline-none placeholder:text-neutral-80"
            />
            <svg aria-hidden="true" width="8" height="12" viewBox="0 0 8 12" fill="none" className="shrink-0">
                <path d="M1 4.5L4 1.5L7 4.5M1 7.5L4 10.5L7 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </label>
    )
}

function Filters({ selected, onToggle }) {
    return (
        <div className="flex flex-col">
            {filterGroups.map((group, index) => (
                <fieldset key={group.id} className={`flex flex-col gap-2.5 border-b border-neutral-10 pb-4 ${index === 0 ? '' : 'pt-4'}`}>
                    <legend className="float-left w-full text-[16px] leading-6 font-bold text-neutral-100">{group.title}</legend>
                    {group.options ? (
                        <div className="flex flex-col gap-2">
                            {group.options.map((option) => {
                                const key = `${group.id}:${option.value}`
                                return (
                                    <Checkbox key={key} checked={selected.includes(key)} onChange={() => onToggle(key)}>
                                        {option.swatch && <span aria-hidden="true" className={`size-4 shrink-0 rounded-full ${option.swatch}`} />}
                                        {option.label}
                                    </Checkbox>
                                )
                            })}
                        </div>
                    ) : (
                        <div className="flex gap-2.5">
                            <PriceInput label="Min" />
                            <PriceInput label="Max" />
                        </div>
                    )}
                </fieldset>
            ))}
        </div>
    )
}

function SortButton({ className = '' }) {
    return (
        <button type="button" className={`shrink-0 items-center gap-2 rounded-[20px] border border-neutral-20 pr-2.5 pl-5 text-[14px] leading-5 font-medium text-neutral-60 ${className}`}>
            Sort by: Popular
            <CaretDownMdIcon />
        </button>
    )
}

export function SmallDog() {
    const [selected, setSelected] = useState([])
    const [filtersOpen, setFiltersOpen] = useState(false)

    const toggle = (key) => setSelected((current) => (current.includes(key) ? current.filter((item) => item !== key) : [...current, key]))

    return (
        <section className="page-container pt-[22px] pb-[60px] lg:pt-[35px]">
            {/* Barre d'outils mobile & tablette */}
            <div className="mb-[25px] flex items-center justify-between lg:hidden">
                <SortButton className="-ml-px flex h-[38px]" />
                <button
                    type="button"
                    aria-expanded={filtersOpen}
                    aria-controls="mobile-filters"
                    onClick={() => setFiltersOpen((open) => !open)}
                    className="mr-2 flex h-[38px] items-center gap-2 px-2.5 text-[16px] leading-6 font-bold text-primary-80"
                >
                    <FilterIcon />
                    Filter
                </button>
            </div>
            {filtersOpen && (
                <div id="mobile-filters" className="mb-6 rounded-[12px] border border-neutral-10 p-4 lg:hidden">
                    <Filters selected={selected} onToggle={toggle} />
                </div>
            )}

            <div className="flex gap-5">
                <aside aria-label="Filters" className="hidden w-[280px] shrink-0 flex-col gap-3.5 lg:flex">
                    <h2 className="text-[24px] leading-9 font-bold text-primary">Filter</h2>
                    <Filters selected={selected} onToggle={toggle} />
                </aside>

                <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3.5">
                            <h2 className="text-[24px] leading-9 font-bold text-primary">Small Dog</h2>
                            <span className="pt-1 text-[14px] leading-5 font-medium text-neutral-60">52 puppies</span>
                        </div>
                        <SortButton className="-mt-[3px] hidden h-[34px] lg:flex" />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 md:hidden">
                        {mobileAnimals.map((animal, index) => (
                            <PetCard key={`${animal.id}-${index}`} animal={animal} />
                        ))}
                    </div>
                    <div className="mt-4 hidden grid-cols-3 gap-3 md:grid lg:mt-3.5 lg:gap-x-5 lg:gap-y-[18px]">
                        {categoryAnimals.map((animal, index) => (
                            <PetCard key={`${animal.id}-${index}`} animal={animal} />
                        ))}
                    </div>

                    <nav aria-label="Pagination" className="mt-10 flex justify-center">
                        <ul className="flex items-center gap-3 text-[16px] leading-6 font-bold text-primary">
                            <li>
                                <button type="button" aria-label="Previous page" className="flex size-[34px] items-center justify-center rounded-[8px] text-primary-80 transition-colors hover:bg-neutral-10">
                                    <ArrowLeftIcon />
                                </button>
                            </li>
                            {pages.map((page) => (
                                <li key={page.label} className={page.className ?? 'flex'}>
                                    {page.ellipsis ? (
                                        <span className="flex size-[34px] items-center justify-center">...</span>
                                    ) : (
                                        <button
                                            type="button"
                                            aria-label={`Page ${page.label}`}
                                            aria-current={page.current ? 'page' : undefined}
                                            className={`flex size-[34px] items-center justify-center rounded-[8px] pt-0.5 transition-colors ${page.current ? 'bg-primary text-neutral-00' : 'hover:bg-neutral-10'}`}
                                        >
                                            {page.label}
                                        </button>
                                    )}
                                </li>
                            ))}
                            <li>
                                <button type="button" aria-label="Next page" className="flex size-[34px] items-center justify-center rounded-[8px] text-primary-80 transition-colors hover:bg-neutral-10">
                                    <ArrowRightIcon />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
