import { animals } from '../data'
import { Button } from './ui/Button'
import { ChevronRightIcon } from './ui/Icons'
import { PetCard } from './ui/PetCard'
import { SectionHeading } from './ui/SectionHeading'

export function WhatsNew() {
    return (
        <section className="page-container flex flex-col py-10 xl:py-[60px]">
            <SectionHeading
                eyebrow="Whats new?"
                title="Take a look at some of our pets"
                action={
                    <Button to="/category" variant="outline" size="md" className="hidden lg:inline-flex">
                        View more
                        <ChevronRightIcon />
                    </Button>
                }
            />
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5 xl:mt-7 xl:grid-cols-4">
                {animals.map((animal) => (
                    <PetCard key={animal.id} animal={animal} />
                ))}
            </div>
            <Button to="/category" variant="outline" className="mt-4 w-full lg:hidden">
                View more
                <ChevronRightIcon />
            </Button>
        </section>
    )
}
