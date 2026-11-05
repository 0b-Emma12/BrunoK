import { useId, useState } from 'react'
import type { AccordionItem } from '../../data/services'

type AccordionProps = {
  items: AccordionItem[]
  defaultOpen?: number
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)
  const baseId = useId()

  return (
    <div className="mil-accordion">
      {items.map((item, index) => {
        const open = openIndex === index
        const buttonId = `${baseId}-button-${index}`
        const panelId = `${baseId}-panel-${index}`
        return (
          <div className="mil-accordion-group" key={item.title}>
            <button
              type="button"
              id={buttonId}
              className="mil-accordion-menu"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="mil-accordion-head">{item.title}</span>
              <span className={`mil-symbol ${open ? 'mil-active' : ''}`} aria-hidden="true">
                <span className="mil-plus">+</span>
                <span className="mil-minus">−</span>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`mil-accordion-content ${open ? 'mil-open' : ''}`}
            >
              <div className="mil-accordion-inner">
                {item.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
