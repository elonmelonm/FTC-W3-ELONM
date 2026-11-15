import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { CaretRightIcon } from './Icons'

// Fil d'Ariane 14/20 Medium, séparateurs de 24px espacés de 6px.
export function Breadcrumb({ items, className = '' }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 text-[14px] leading-5 font-medium text-neutral-60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <Fragment key={item.label}>
              <li>
                {item.to && !isLast ? (
                  <Link to={item.to} className="transition-colors duration-200 hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="flex">
                  <CaretRightIcon />
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
