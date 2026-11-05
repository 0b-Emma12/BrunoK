import { Logo } from '../ui/Logo'

type HeaderProps = {
  dark: boolean
  menuOpen: boolean
  pageLabel: string
  onToggleMenu: () => void
}

export function Header({ dark, menuOpen, pageLabel, onToggleMenu }: HeaderProps) {
  return (
    <div className={`mil-frame ${dark ? 'mil-frame-dark' : ''}`}>
      <div className="mil-frame-top">
        <Logo light={dark} />
        <div className="mil-frame-center" aria-hidden="true" />
        <button
          type="button"
          className={`mil-menu-btn ${menuOpen ? 'mil-active' : ''}`}
          onClick={onToggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          <span />
        </button>
      </div>
      <div className="mil-frame-bottom">
        <div className="mil-current-page">{pageLabel}</div>
        <a href="#top" className="mil-back-to-top">
          <span className="mil-link mil-muted">
            <span>Back to top</span>
          </span>
        </a>
      </div>
    </div>
  )
}
