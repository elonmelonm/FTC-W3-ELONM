import { Button } from '../components/ui/Button'

// Page simple pour les liens du menu qui n'ont pas de maquette (About, Contact, 404).
export function About({ title = 'About us' }) {
  return (
    <section className="page-container flex min-h-[60vh] flex-col items-start justify-center gap-4 pt-[140px] pb-20">
      <h1 className="text-[36px] leading-[54px] font-bold text-primary capitalize xl:text-[52px] xl:leading-[68px]">{title}</h1>
      <p className="max-w-[480px] text-[16px] leading-6 font-medium text-neutral-80">
        This page is on its way. In the meantime, take a look at the puppies waiting for a new home.
      </p>
      <Button to="/category" className="mt-2">
        Explore Now
      </Button>
    </section>
  )
}
