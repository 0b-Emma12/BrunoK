import { useId, useState, type FormEvent } from 'react'
import { ArrowIcon } from '../shared/Icons'

export function NewsletterForm() {
  const inputId = useId()
  const messageId = useId()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = email.trim()
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
    if (!valid) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <form className="mil-subscribe-form mil-up" onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor={inputId}>
        Email address
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        placeholder="Enter your email"
        autoComplete="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
          if (status !== 'idle') setStatus('idle')
        }}
        aria-invalid={status === 'error'}
        aria-describedby={messageId}
      />
      <button type="submit" className="mil-button mil-icon-button-sm mil-arrow-place" aria-label="Subscribe">
        <span className="sr-only">Subscribe</span>
        <ArrowIcon />
      </button>
      <p id={messageId} className={`form-message ${status}`} aria-live="polite">
        {status === 'error' ? 'Please enter a valid email address.' : null}
        {status === 'success' ? 'Signup preview only. Team Bruno K updates are not connected yet.' : null}
      </p>
    </form>
  )
}
