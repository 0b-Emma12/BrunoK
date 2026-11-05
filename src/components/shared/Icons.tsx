type IconProps = {
  className?: string
}

export function ArrowIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 16L16 4M16 4H7M16 4V13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function QuoteIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="64"
      height="54"
      viewBox="0 0 64 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 54V36.6C0 16.2 10.1 4.7 29.7 0l3.4 9.3C21 12.9 14.7 19.5 14.1 28.1h15.6V54H0ZM35.8 54V36.6C35.8 16.2 45.9 4.7 65.5 0l3.4 9.3C56.8 12.9 50.5 19.5 49.9 28.1h15.6V54H35.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ZoomIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ className = '' }: IconProps) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M1 7.5L5 11.5L13 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
