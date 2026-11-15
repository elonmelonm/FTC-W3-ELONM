// Titre de section : sur-titre 16/24 + titre 24/36 (14/20 + 20/32 sur mobile).
export function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        {eyebrow && <p className="text-[14px] leading-5 font-medium text-black xl:text-[16px] xl:leading-6">{eyebrow}</p>}
        <h2 className="text-[20px] leading-8 font-bold text-primary capitalize xl:text-[24px] xl:leading-9">{title}</h2>
      </div>
      {action}
    </div>
  )
}
