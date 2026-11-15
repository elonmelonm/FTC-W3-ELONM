import { knowledges } from '../data'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { Button } from './ui/Button'
import { ChevronRightIcon } from './ui/Icons'
import { SectionHeading } from './ui/SectionHeading'

// « Card Blog » : 380×424.
function BlogCard({ knowledge }) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="card-shadow flex flex-col gap-2 rounded-[12px] bg-white p-2"
        >
            <img className="h-60 w-full rounded-[10px] object-cover" src={knowledge.image} alt="" loading="lazy" width="364" height="240" />
            <div className="flex flex-col items-start gap-2.5 p-2">
                <span className="rounded-[28px] bg-state px-2.5 py-0.5 text-[10px] leading-4 font-bold text-neutral-00">Pet knowledge</span>
                {/* Bloc texte de 114px : titre sur 1 ou 2 lignes, le résumé remplit les lignes entières restantes (4 ou 3). */}
                <div className="flex h-[114px] flex-col gap-1.5 overflow-hidden">
                    <h3 className="line-clamp-2 shrink-0 text-[16px] leading-6 font-bold text-neutral-100">{knowledge.title}</h3>
                    <p className="line-clamp-4 shrink-0 text-[14px] leading-5 font-normal text-neutral-80">{knowledge.description}</p>
                </div>
            </div>
        </motion.article>
    )
}

export function Knowledge() {
    return (
        <section className="page-container flex flex-col py-10 xl:py-[60px]">
            <SectionHeading
                eyebrow="You already know ?"
                title="Useful pet knowledge"
                action={
                    <Button variant="outline" size="md" className="hidden lg:inline-flex">
                        View more
                        <ChevronRightIcon />
                    </Button>
                }
            />
            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:mt-7">
                {knowledges.map((knowledge) => (
                    <BlogCard key={knowledge.title} knowledge={knowledge} />
                ))}
            </div>
            <Button variant="outline" className="mt-5 w-full lg:hidden">
                View more
                <ChevronRightIcon />
            </Button>
        </section>
    )
}
