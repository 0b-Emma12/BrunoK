import { Link } from 'react-router-dom'

type LogoProps = {
  light?: boolean
  onClick?: () => void
  className?: string
}

export function Logo({ light = false, onClick, className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`mil-logo ${className}`.trim()}
      onClick={onClick}
      aria-label="Bruno K home"
    >
      <span className={light ? 'mil-muted' : ''}>BRUNO K</span>
    </Link>
  )
}
