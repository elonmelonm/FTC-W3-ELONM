import { products } from '../data'
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { Button } from './ui/Button'
import { ChevronRightIcon, GiftIcon } from './ui/Icons'
import { SectionHeading } from './ui/SectionHeading'

// « Product Card / Store » : 280×446.
function ProductCard({ product }) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="card-shadow flex flex-col gap-2 rounded-[12px] bg-neutral-00 px-2 pt-2"
        >
            {/* Les packshots sur fond blanc sont affichés à 84% de la vignette, comme dans la maquette. */}
            <div className="aspect-square w-full overflow-hidden rounded-[10px] bg-white">
                <img
                    className={`size-full ${product.packshot ? 'object-contain p-[7.95%]' : 'object-cover'}`}
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width="264"
                    height="264"
                />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 px-2 pt-2 pb-5">
                <div className="flex flex-col gap-1">
                    <h3 className="text-[16px] leading-6 font-bold text-neutral-100">{product.name}</h3>
                    <p className="flex items-center text-[12px] leading-[18px] text-neutral-60">
                        <span className="flex gap-1.5">
                            <span className="font-medium">Product:</span>
                            <span className="font-bold">{product.product}</span>
                        </span>
                        {product.size && (
                            <>
                                <span aria-hidden="true" className="mx-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-60" />
                                <span className="flex gap-1.5">
                                    <span className="font-medium">Size:</span>
                                    <span className="font-bold">{product.size}</span>
                                </span>
                            </>
                        )}
                    </p>
                    <p className="text-[14px] leading-5 font-bold text-neutral-100">{product.price}</p>
                </div>
                <p className="flex h-[34px] items-center gap-0.5 rounded-[8px] bg-secondary-40 px-2.5 pt-1.5 pb-1 text-[14px] leading-5 font-bold text-primary-80">
                    <GiftIcon className="shrink-0" />
                    <span aria-hidden="true" className="mx-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{product.gifts}</span>
                </p>
            </div>
        </motion.article>
    )
}

// Section absente des maquettes mobiles : affichée à partir de la tablette paysage.
export function OurProducts() {
    return (
        <section className="page-container hidden flex-col gap-7 py-[60px] lg:flex">
            <SectionHeading
                eyebrow="Hard to choose right products for your pets?"
                title="Our Products"
                action={
                    <Button variant="outline" size="md">
                        View more
                        <ChevronRightIcon />
                    </Button>
                }
            />
            <div className="grid grid-cols-3 gap-5 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.name + product.price} product={product} />
                ))}
            </div>
        </section>
    )
}
